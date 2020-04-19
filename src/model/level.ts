import { Human } from "./human"
import { LocationName } from "../content/locations"
import { TripSummary } from "./tripSummary"
import { Couple, PeopleGraph, Relationship, EdgeKey, CoupleUtils } from "./peopleGraph"
import { Situation, SituationEffect } from "./situation"
import { FriendshipManager } from "./friendshipManager"
import { HumanTag, humanTagMap, RelationshipTag, relationshipTagMap } from "../content/entityTags"
import { HumanName } from "../content/humans"

export class Level {
    public humans: Array<Human>
    public locations: Array<LocationName>

    public friendshipManager: FriendshipManager

    constructor(
        humans: Array<Human>,
        locations: Array<LocationName>,
        relationships: Array<Relationship>,
        initialTags: Array<[HumanName, HumanTag]>,
        initialFondness: Array<[Couple, number]>,
        situations: Array<Situation>,
    ) {
        this.humans = humans
        this.locations = locations
        let peopleGraph = new PeopleGraph(this.humans, relationships, initialTags, initialFondness)

        this.friendshipManager = new FriendshipManager(situations, peopleGraph)

        // Init relationships on people
        this.updateHumansFromPeopleGraphForDisplay()

    }

    private updateHumansFromPeopleGraphForDisplay() {
        this.humans.forEach(h => {
            h.relationships = this.friendshipManager.peopleGraph.getOutRelationships(h.name)
            h.tags = this.friendshipManager.peopleGraph.getHumTags(h.name)
        })
    }

    public goOut(tripSummary: TripSummary): string {
        // Update friendships based on trip
        let effects = this.friendshipManager.applyMeeting(tripSummary)

        // Construct msgs for effects
        let { perPersonRelMsg, perPersonHumMsg } = this.reduceEffectsPerPerson(effects)
        let effectsMsgs = Array.from(new Set(effects.map(effect => effect.description)))
        effectsMsgs.push("") // separator dummy
        effectsMsgs = effectsMsgs.concat(this.createEffectsMsgs(perPersonRelMsg, perPersonHumMsg))

        let effectMsg = effectsMsgs.length > 0
            ? effectsMsgs.join('\n')
            : "Nothing significant occured."

        // Update relationships on people
        this.updateHumansFromPeopleGraphForDisplay()

        console.log("Effects:", effects)
        console.log("Humans:", this.humans)
        console.log("Relationships", this.friendshipManager.peopleGraph)

        // Construct final msg
        let friendList: string = tripSummary.goPeople.filter((x: Human) => x.name != 'You').map((human: Human) => human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation} with ${friendList}.\n${effectMsg}`

        return statusMessage
    }

    private createEffectsMsgs(
        perPersonRelMsg: Map<EdgeKey, [RelationshipTag[], RelationshipTag[]]>,
        perPersonHumMsg: Map<HumanName, [HumanTag[], HumanTag[]]>
    ) : Array<string> {
        let effectMsg : Array<string> = []

        perPersonHumMsg.forEach((changes, person) => {
            let newTags = changes[0]
            let remTags = changes[1]
            let remTagsArr = []
            for(let remTag of remTags) {
                if(humanTagMap.has(remTag)) {
                    remTagsArr.push(humanTagMap.get(remTag))
                }
            }
            let newTagsArr = []
            for(let newTag of newTags) {
                if(humanTagMap.has(newTag)) {
                    newTagsArr.push(humanTagMap.get(newTag))
                }
            }
            if(remTagsArr.length != 0 && newTagsArr.length != 0) {
                effectMsg.push(`${person} lost ${remTagsArr.join(', ')}, but gained ${newTagsArr.join(', ')}`)
            } else if(remTagsArr.length != 0) {
                effectMsg.push(`${person} lost ${remTagsArr.join(', ')}`)
            } else if(newTagsArr.length != 0) {
                effectMsg.push(`${person} gained ${newTagsArr.join(', ')}`)
            }
        })

        perPersonRelMsg.forEach((changes, edgeKey) => {
            let couple = CoupleUtils.fromEdgeKey(edgeKey)
            let newTags = changes[0]
            let remTags = changes[1]
            for(let remTag of remTags) {
                if(relationshipTagMap.has(remTag)) {
                    effectMsg.push(`${couple[0]} no longer ${relationshipTagMap.get(remTag)} ${couple[1]}`)
                }
            }
            for(let newTag of newTags) {
                if(relationshipTagMap.has(newTag)) {
                    effectMsg.push(`${couple[0]} now ${relationshipTagMap.get(newTag)} ${couple[1]}`)
                }
            }
        })
        
        // let relMsgs = Array<string>()
        // perPersonRelMsg.forEach((changes, couple) => {
        //     // TODO: empty tag names will not look nice, as well as empty newRelTags or oldRelTags
        //     let newRelTags = changes[0].map(t => relationshipTagMap.get(t) ?? "").join(", ")
        //     let oldRelTags = changes[1].map(t => relationshipTagMap.get(t) ?? "").join(", ")
        //     relMsgs.push(`${couple[0]} now ${newRelTags} and no longer ${oldRelTags}  ${couple[1]}.`)
        // })

        // let humMsgs = Array<string>()
        // perPersonHumMsg.forEach((changes, person) => {
        //     let newHumTags = changes[0].map(t => humanTagMap.get(t) ?? "").join(", ")
        //     let oldHumTags = changes[1].map(t => humanTagMap.get(t) ?? "").join(", ")
        //     relMsgs.push(`${person} is now ${newHumTags} and no longer ${oldHumTags}.`)
        // })
        // let effectMsg = relMsgs.concat(humMsgs)

        return effectMsg
    }

    private reduceEffectsPerPerson(effects: SituationEffect[]) {
        // first array in keys is always added tags, second removed
        let perPersonRelMsg = new Map<EdgeKey, [Array<RelationshipTag>, Array<RelationshipTag>]>()
        let perPersonHumMsg = new Map<HumanName, [Array<HumanTag>, Array<HumanTag>]>()

        let addToMap = function <K, V>(key: K, value: V, valueStore: Map<K, [Array<V>, Array<V>]>, addedRemovedStoreSwitch: 0 | 1) {
            let perKeyStore = valueStore.get(key) ?? [new Array<V>(), new Array<V>()]
            perKeyStore[addedRemovedStoreSwitch].push(value)
            valueStore.set(key, perKeyStore)
        }

        effects.forEach(effect => {
            effect.addedHumTags.forEach(ah => addToMap(ah[0], ah[1], perPersonHumMsg, 0))
            effect.removedHumTags.forEach(rh => addToMap(rh[0], rh[1], perPersonHumMsg, 1))
            effect.addedRelTags.forEach(ah => addToMap(CoupleUtils.toEdgeKey(ah[0]), ah[1], perPersonRelMsg, 0))
            effect.removedRelTags.forEach(ah => addToMap(CoupleUtils.toEdgeKey(ah[0]), ah[1], perPersonRelMsg, 1))
        })



        return { perPersonRelMsg, perPersonHumMsg }
    }
}

import { Human } from "./human"
import { LocationName } from "../content/locations"
import { TripSummary } from "./tripSummary"
import { Couple, PeopleGraph, Relationship, EdgeKey, CoupleUtils, MIN_FONDNESS } from "./peopleGraph"
import { Situation, SituationEffect } from "./situation"
import { FriendshipManager } from "./friendshipManager"
import { HumanTag, humanTagMap, RelationshipTag, relationshipTagMap, relationshipTagMapStory, relationshipTagBidirectional, relationshipTagShadowingNewRem, relationshipTagShadowingRemNew } from "../content/entityTags"
import { HumanName } from "../content/humans"
import { BoardScene } from "../management/board"

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

    private fixAgreement(val: string) : string {
        return val.replace(/You was/g, 'You were')
    }
    
    public goOut(board: BoardScene, tripSummary: TripSummary): string {
        // Update friendships based on trip
        let effects = this.friendshipManager.applyMeeting(tripSummary)

        // Update relationships on people
        this.updateHumansFromPeopleGraphForDisplay()

        // Debug log
        console.log("Effects:", effects)
        console.log("Humans:", this.humans)
        console.log("Relationships", this.friendshipManager.peopleGraph)

        // Construct msgs for effects
        let { perPersonRelChanges, perPersonHumChanges } = this.reduceEffectsPerPerson(effects)
        this.reduceTagsShadowing(perPersonRelChanges)

        let effectsMsgs = Array.from(new Set(effects.map(effect => this.fixAgreement(effect.description))))
        effectsMsgs.push("") // separator dummy
        effectsMsgs = effectsMsgs.concat(this.createEffectsMsgs(perPersonRelChanges, perPersonHumChanges))

        console.log("Msgs:", effectsMsgs)
        effectsMsgs = effectsMsgs.filter(msg => {
            let gonePeople = this.friendshipManager.peopleGraph.getPeopleWithTags(HumanTag.gone)
            return gonePeople.every(gp => !msg.includes(gp))
        })

        let effectMsg = effectsMsgs.length > 0
            ? effectsMsgs.join('\n')
            : "Nothing significant occured."

        // Construct final msg
        let friendList: string = tripSummary.goPeople.filter((x: Human) => x.name != 'You').map((human: Human) => human.name).join(', ')
        let statusMessage = `You went ${tripSummary.goLocation} with ${friendList}.\n${effectMsg}`

        let stopProp : boolean = false
        for(let h1 of this.humans) {
            for(let h2 of this.humans) {
                if(h1 == h2) {
                    continue
                }
                if(this.friendshipManager.peopleGraph.getFondness([h1.name, h2.name]) <= MIN_FONDNESS) {
                    if(h1.name == 'You') {
                        board.fail(`${h1.name} hate ${h2.name} too much.\nGame over.`)
                    } else {
                        board.fail(`${h1.name} hates ${h2.name} too much.\nGame over.`)
                    }
                    stopProp = true
                    break
                }
            }
            if(stopProp)
                break
        }

        return statusMessage
    }

    private reduceTagsShadowing(
        perPersonRelMsg: Map<EdgeKey, [RelationshipTag[], RelationshipTag[]]>
    ) {
        perPersonRelMsg.forEach((changes, couple) => {
            let newTags = changes[0]
            let remTags = changes[1]
            let toRemNew : Array<RelationshipTag> = []
            let toRemRem : Array<RelationshipTag> = []
            for(let tag of newTags) {
                for(let tagK of relationshipTagShadowingNewRem) {
                    if(tagK[0] == tag) {
                        toRemRem.push(tagK[1])
                    }
                }
            }
            for(let tag of remTags) {
                for(let tagK of relationshipTagShadowingRemNew) {
                    if(tagK[0] == tag) {
                        toRemNew.push(tagK[1])
                    }
                }
            }
            newTags = newTags.filter(x => !toRemNew.includes(x))
            remTags = remTags.filter(x => !toRemRem.includes(x))
            perPersonRelMsg.set(couple, [newTags, remTags])
        })
        return perPersonRelMsg
    }

    private createEffectsMsgs(
        perPersonRelMsg: Map<EdgeKey, [RelationshipTag[], RelationshipTag[]]>,
        perPersonHumMsg: Map<HumanName, [HumanTag[], HumanTag[]]>
    ): Array<string> {
        let effectMsg: Array<string> = []

        perPersonHumMsg.forEach((changes, person) => {
            let newTags = changes[0]
            let remTags = changes[1]
            let remTagsArr = []
            for (let remTag of remTags) {
                if (humanTagMap.has(remTag)) {
                    remTagsArr.push(humanTagMap.get(remTag))
                }
            }
            let newTagsArr = []
            for (let newTag of newTags) {
                if (humanTagMap.has(newTag)) {
                    newTagsArr.push(humanTagMap.get(newTag))
                }
            }
            if (remTagsArr.length != 0 && newTagsArr.length != 0) {
                effectMsg.push(`${person} lost ${remTagsArr.join(', ')}, but gained ${newTagsArr.join(', ')}`)
            } else if (remTagsArr.length != 0) {
                effectMsg.push(`${person} lost ${remTagsArr.join(', ')}`)
            } else if (newTagsArr.length != 0) {
                effectMsg.push(`${person} gained ${newTagsArr.join(', ')}`)
            }
        })

        
        let relationshipTemplates : Array<[string, Couple]> = []
        let addIfNotContains = (tag: RelationshipTag, message: string, couple: Couple) : boolean => {
            // If it's not bidirectional explicitly, we don't deduplicate
            if(!relationshipTagBidirectional.has(tag)) {
                relationshipTemplates.push([message, couple])
                return true
            }

            for(let x of relationshipTemplates) {
                if (x[0] == message && ((x[1][0] == couple[0] && x[1][1] == couple[1]) || (x[1][0] == couple[1] && x[1][1] == couple[0])) )
                    return false
            }
            relationshipTemplates.push([message, couple])
            return true
        }

        perPersonRelMsg.forEach((changes, edgeKey) => {
            let couple = CoupleUtils.fromEdgeKey(edgeKey)
            let newTags = changes[0]
            let remTags = changes[1]
            for (let remTag of remTags) {
                if (relationshipTagMapStory.has(remTag)) {
                    addIfNotContains(
                        remTag,
                        (relationshipTagMapStory.get(remTag) as [string, string])[1],
                        couple
                    )
                }
            }
            for (let newTag of newTags) {
                if (relationshipTagMapStory.has(newTag)) {
                    addIfNotContains(
                        newTag,
                        (relationshipTagMapStory.get(newTag) as [string, string])[0],
                        couple
                    )
                }
            }
        })

        for(let x of relationshipTemplates) {
            effectMsg.push(
                x[0].replace('SUBJ', x[1][0]).replace('OBJ', x[1][1])
            )
        }

        return effectMsg
    }

    private reduceEffectsPerPerson(effects: SituationEffect[]) {
        // first array in keys is always added tags, second removed
        let perPersonRelChanges = new Map<EdgeKey, [Array<RelationshipTag>, Array<RelationshipTag>]>()
        let perPersonHumChanges = new Map<HumanName, [Array<HumanTag>, Array<HumanTag>]>()

        let addToMap = function <K, V>(key: K, value: V, valueStore: Map<K, [Array<V>, Array<V>]>, addedRemovedStoreSwitch: 0 | 1) {
            let perKeyStore = valueStore.get(key) ?? [new Array<V>(), new Array<V>()]
            perKeyStore[addedRemovedStoreSwitch].push(value)
            valueStore.set(key, perKeyStore)
        }

        effects.forEach(effect => {
            effect.addedHumTags.forEach(ah => addToMap(ah[0], ah[1], perPersonHumChanges, 0))
            effect.removedHumTags.forEach(rh => addToMap(rh[0], rh[1], perPersonHumChanges, 1))
            effect.addedRelTags.forEach(ah => addToMap(CoupleUtils.toEdgeKey(ah[0]), ah[1], perPersonRelChanges, 0))
            effect.removedRelTags.forEach(ah => addToMap(CoupleUtils.toEdgeKey(ah[0]), ah[1], perPersonRelChanges, 1))
        })



        return { perPersonRelChanges, perPersonHumChanges }
    }
}

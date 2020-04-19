import { Human } from "./human"
import { Location } from "./location"
import { TripSummary } from "./tripSummary"
import { PeopleGraph, Relationship } from "./peopleGraph"
import { HateGraph, SituationEffect } from "./hateGraph"
import { FriendshipManager } from "./friendshipManager"
import { HumanTag, humanTagMap, RelationshipTag, relationshipTagMap } from "../content/entityTags"
import { HumanName } from "../content/humans"

export class Level {
    public humans: Array<Human>
    public locations: Array<Location>

    public friendshipManager: FriendshipManager

    constructor(
        humans: Array<Human>,
        locations: Array<Location>,
        relationships: Array<Relationship>,
        initialTags: Array<[HumanName, HumanTag]>,
        hateGraph: HateGraph,
    ) {
        this.humans = humans
        this.locations = locations
        let peopleGraph = new PeopleGraph(this.humans, relationships, initialTags)

        this.friendshipManager = new FriendshipManager(hateGraph, peopleGraph)

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

        let {perPersonRelMsg, perPersonHumMsg} = this.reduceEffectsPerPerson(effects)
        let effectsMsgs = this.createEffectsMsgs(perPersonRelMsg, perPersonHumMsg)
        effectsMsgs.concat(effects.map(effect => {
            return effect.description
        }))

        let effectMsg = effectsMsgs.length > 0
            ? effectsMsgs.join('\n')
            : "No one cared for your trip. ╯︿╰"

        // Update relationships on people
        this.updateHumansFromPeopleGraphForDisplay()

        console.log("Effects:", effects)
        console.log("Humans:", this.humans)
        console.log("Relationships", this.friendshipManager.peopleGraph)

        // Construct final msg
        let friendList: string = tripSummary.goPeople.map((human: Human) => HumanName[human.name]).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation?.name} with ${friendList}.\n${effectMsg}`

        return statusMessage
    }

    private createEffectsMsgs(
        perPersonRelMsg: Map<[HumanName, HumanName], [RelationshipTag[], RelationshipTag[]]>,
        perPersonHumMsg: Map<HumanName, [HumanTag[], HumanTag[]]>) {

        let relMsgs = Array<string>()
        perPersonRelMsg.forEach((changes, couple) => {
            // TODO: empty tag names will not look nice, as well as empty newRelTags or oldRelTags
            let newRelTags = changes[0].map(t => relationshipTagMap.get(t) ?? "").join(", ")
            let oldRelTags = changes[1].map(t => relationshipTagMap.get(t) ?? "").join(", ")
            relMsgs.push(`${HumanName[couple[0]]} now ${newRelTags} and no longer ${oldRelTags}  ${HumanName[couple[1]]}.`)
        })

        let humMsgs = Array<string>()
        perPersonHumMsg.forEach((changes, person) => {
            let newHumTags = changes[0].map(t => humanTagMap.get(t) ?? "").join(", ")
            let oldHumTags = changes[1].map(t => humanTagMap.get(t) ?? "").join(", ")
            relMsgs.push(`${HumanName[person]} is now ${newHumTags} and no longer ${oldHumTags}.`)
        })
        let effectsMsgs = relMsgs.concat(humMsgs)

        return effectsMsgs
    }

    private reduceEffectsPerPerson(effects: SituationEffect[]) {
        // first array in keys is always added tags, second removed
        let perPersonRelMsg = new Map<[HumanName, HumanName], [Array<RelationshipTag>, Array<RelationshipTag>]>()
        let perPersonHumMsg = new Map<HumanName, [Array<HumanTag>, Array<HumanTag>]>()

        let addToMap = function<K, V>(key: K, value: V, valueStore: Map<K, [Array<V>, Array<V>]>, addedRemovedStoreSwitch: 0|1) {
            let perKeyStore = valueStore.get(key) ?? [new Array<V>(), new Array<V>()]
            perKeyStore[addedRemovedStoreSwitch].push(value)
            valueStore.set(key, perKeyStore)
        }

        effects.forEach(effect => {
            effect.addedHumTags.forEach(ah => addToMap(ah[0], ah[1], perPersonHumMsg, 0))
            effect.removedHumTags.forEach(rh => addToMap(rh[0], rh[1], perPersonHumMsg, 1))
            effect.addedRelTags.forEach(ah => addToMap(ah[0], ah[1], perPersonRelMsg, 0))
            effect.removedRelTags.forEach(ah => addToMap(ah[0], ah[1], perPersonRelMsg, 1))
        })

        return { perPersonRelMsg, perPersonHumMsg }
    }
}

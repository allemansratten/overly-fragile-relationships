import { Human, HumanName } from "./human"
import { Location } from "./location"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph, Relationship } from "./peopleGraph"
import { HateGraph, SituationEffect } from "./hateGraph"
import { FriendshipManager } from "./friendshipManager"
import { HumanTag, RelationshipTag, HumanTagMap, RelationshipTagMap } from "./entityTags"

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
<<<<<<< HEAD
        let { perPersonRelMsg, perPersonHumMsg } = this.reduceEffectsPerPerson(effects)
        let effectsMsgs = this.createEffectsMsgs(perPersonRelMsg, perPersonHumMsg)
=======
        let effectsMsgs = effects.map(effect => {
            return effect.description
            // return `${effect.people[0]} now ${Array(effect.addedRelTags).join(", ")} and no longer ${Array(effect.removedHumTags).join(", ")}  ${effect.people[1]} a bit more.`
        })
>>>>>>> 40dc27f485bab9b0f19cc0ad61d48bd32408e5ec

        let effectMsg = effectsMsgs.length > 0
            ? effectsMsgs.join('\n')
            : "No one cared for your trip. ╯︿╰"

        // Update relationships on people
        this.updateHumansFromPeopleGraphForDisplay()

        console.log("Effects:", effects)
        console.log("Humans:", this.humans)
        console.log("Relationships", this.friendshipManager.peopleGraph)

        // Construct final msg
        let friendList: string = tripSummary.goPeople.map((human: Human) => human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation?.name} with ${friendList}.\n${effectMsg}`

        return statusMessage
    }

    private createEffectsMsgs(
        perPersonRelMsg: Map<[string, string], [RelationshipTag[], RelationshipTag[]]>, 
        perPersonHumMsg: Map<string, [HumanTag[], HumanTag[]]>) {

        let relMsgs = Array<string>()
        perPersonRelMsg.forEach((changes, couple) => {
            let newRelTags = changes[0].map(t => RelationshipTagMap[t]).join(", ")
            let oldRelTags = changes[1].map(t => RelationshipTagMap[t]).join(", ")
            relMsgs.push(`${couple[0]} now ${newRelTags} and no longer ${oldRelTags}  ${couple[1]}.`)
        })

        let humMsgs = Array<string>()
        perPersonHumMsg.forEach((changes, person) => {
            let newHumTags = changes[0].map(t => HumanTagMap[t]).join(", ")
            let oldHumTags = changes[1].map(t => HumanTagMap[t]).join(", ")
            relMsgs.push(`${person[0]} is now ${newHumTags} and no longer ${oldHumTags}.`)
        })
        let effectsMsgs = relMsgs.concat(humMsgs)

        return effectsMsgs
    }

    private reduceEffectsPerPerson(effects: SituationEffect[]) {
        let perPersonRelMsg = new Map<[HumanName, HumanName], [Array<RelationshipTag>, Array<RelationshipTag>]>()
        let perPersonHumMsg = new Map<HumanName, [Array<HumanTag>, Array<HumanTag>]>()

        effects.forEach(effect => {
            effect.addedHumTags.forEach(ah => {
                let ppHumMsg = perPersonHumMsg.get(ah[0]) ?? [new Array(), new Array()]
                ppHumMsg[0].push(ah[1])
                perPersonHumMsg.set(ah[0], ppHumMsg)
            })
            effect.removedHumTags.forEach(rh => {
                let ppHumMsg = perPersonHumMsg.get(rh[0]) ?? [new Array(), new Array()]
                ppHumMsg[1].push(rh[1])
                perPersonHumMsg.set(rh[0], ppHumMsg)
            })
            effect.addedRelTags.forEach(ac => {
                let ppHumMsg = perPersonRelMsg.get(ac[0]) ?? [new Array(), new Array()]
                ppHumMsg[0].push(ac[1])
                perPersonRelMsg.set(ac[0], ppHumMsg)
            })
            effect.removedRelTags.forEach(rc => {
                let ppHumMsg = perPersonRelMsg.get(rc[0]) ?? [new Array(), new Array()]
                ppHumMsg[1].push(rc[1])
                perPersonRelMsg.set(rc[0], ppHumMsg)
            })
        })
        return { perPersonRelMsg, perPersonHumMsg }
    }
}

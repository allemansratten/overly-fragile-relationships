import { Human, HumanName } from "./human"
import { Location } from "./location"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph, Relationship } from "./peopleGraph"
import { HateGraph } from "./hateGraph"
import { FriendshipManager } from "./friendshipManager"
import { HumanTag } from "./entityTags"

export class Level {
    public humans: Array<Human>
    public locations: Array<Location>

    public friendshipManager: FriendshipManager

    constructor(humans: Array<Human>, locations: Array<Location>, relationships: Array<Relationship>, initialTags: Array<[HumanName, HumanTag]>, hateGraph: HateGraph) {
        this.humans = humans
        this.locations = locations
        let peopleGraph = new PeopleGraph(this.humans, relationships, initialTags)

        this.friendshipManager = new FriendshipManager(hateGraph, peopleGraph)

        // Init relationships on people
        this.humans.forEach(h => {
            h.relationships = this.friendshipManager.peopleGraph.getOutRelationships(h.name)
        });

    }

    public goOut(tripSummary: TripSummary): string {
        // Update friendships based on trip
        let effects = this.friendshipManager.applyMeeting(tripSummary)

        // Construct msgs for effects
        let effectsMsgs = effects.map(effect => {
            return `${effect.people[0]} now ${effect.addedHumTags.join(", ")} and no longer ${effect.removedHumTags.join(", ")}  ${effect.people[1]} a bit more.`
        })

        let effectMsg = effectsMsgs.length > 0

            ? effectsMsgs.join('\n')
            : "No one cared for your trip. ╯︿╰"

        // Update relationships on people
        this.humans.forEach(h => {
            h.relationships = this.friendshipManager.peopleGraph.getOutRelationships(h.name)
        });

        console.log("Effects:", effects)
        console.log("Humans:", this.humans)
        console.log("Relationships", this.friendshipManager.peopleGraph)

        // Construct final msg
        let friendList: string = tripSummary.goPeople.map((human: Human) => human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation?.name} with ${friendList}.\n${effectMsg}`

        return statusMessage
    }
}

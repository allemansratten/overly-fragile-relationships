import { Human } from "./human"
import { Location } from "./location"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph, Relationship } from "./peopleGraph"
import { HateGraph } from "./hateGraph"
import { FriendshipManager } from "./friendshipManager"

export class Level {
    public humans: Array<Human>
    public locations: Array<Location>

    public friendshipManager: FriendshipManager

    constructor(humans: Array<Human>, locations: Array<Location>, relationships: Array<Relationship>, hateGraph: HateGraph) {
        this.humans = humans
        this.locations = locations
        let peopleGraph = new PeopleGraph(this.humans, relationships)

        this.friendshipManager = new FriendshipManager(hateGraph, peopleGraph)
    }

    public goOut(tripSummary: TripSummary): string {
        // Update friendships based on trip
        let effects = this.friendshipManager.ApplyMeeting(tripSummary)

        // Construct msgs for effects
        let effectsMsgs = effects.map(effect => {
            return `${effect.people[0]} now ${effect.relationshipChange > 0 ? "loves" : "hates"}  ${effect.people[1]} a bit more.`
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
        let friendList: string = tripSummary.goPeople.map((human: Human)=>human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation?.name} with ${friendList}.\n${effectMsg}`

        return statusMessage
    }
}

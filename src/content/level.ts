import { Human } from "./human"
import { Location } from "./location"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph, Relationship } from "./peopleGraph"
import { HateGraph } from "./hateGraph"
import { FriendshipManager } from "./friendshipManager"

export class Level {
    public humans: Array<Human>
    public locations: Array<Location>

    public peopleGraph: PeopleGraph
    public hateGraph: HateGraph
    public friendshipManager: FriendshipManager

    constructor(humans: Array<Human>, locations: Array<Location>, relationships: Array<Relationship>, hateGraph: HateGraph) {
        this.humans = humans
        this.locations = locations
        this.peopleGraph = new PeopleGraph(this.humans, relationships)

        this.hateGraph = hateGraph
        this.hateGraph.constraints.push()
        this.friendshipManager = new FriendshipManager(this.hateGraph, this.peopleGraph)
    }

    public goOut(tripSummary: TripSummary): string {
        // Update friendships based on trip
        let effects = this.friendshipManager.ApplyMeeting(tripSummary)

        // Construct msgs for effects
        let effectsMsgs = effects.map(effect => {
            return `${effect.people[0].name} now ${effect.relationshipChange > 0 ? "loves" : "hates"}  ${effect.people[1].name} a bit more.`
        });
        let effectMsg = effectsMsgs.length > 0 
            ? effectsMsgs.join('\n')
            : "No one cared for your trip. ╯︿╰"

        // Update relationships on people
        this.humans.forEach(h => {
            h.relationships = this.friendshipManager.peopleGraph.getRelationships(h)
        });
    
        // Construct final msg
        let friendlist: string = tripSummary.goPeople.map((human: Human)=>human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation?.name} with ${friendlist}.\n${effectMsg}`

        return statusMessage
    }
}

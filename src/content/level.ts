import {Human} from "./human"
import {Location} from "./location"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph } from "./peopleGraph"
import { HateGraph, Constraint } from "./hateGraph"
import { FriendshipManager } from "./friendshipManager"
import level1 from '../../data/level_1.yaml'

export class Level {
    public humans : Array<Human>
    public locations : Array<Location>

    public peopleGraph : PeopleGraph
    public hateGraph : HateGraph
    public friendshipManager: FriendshipManager

    constructor(path: string) {
        // TODO: nacitani ze souboru
        this.humans = []
        this.humans.push({name: 'Kate', love: 3})
        this.humans.push({name: 'Lucian', love: 5})
        this.humans.push({name: 'Mathew', love: -5})

        this.locations = []
        this.locations.push({name: 'Park', limit: { min: 2, max: 5}})
        this.locations.push({name: 'Woods', limit: { min: 2, max: 4}})
        this.locations.push({name: 'Forest', limit: { min: 2, max: 6}})

        this.peopleGraph = new PeopleGraph(
            this.humans,
            [
                {people: [{name: 'Kate'}, {name: 'Mathew'}], level: -1},
            ])

        this.hateGraph = new HateGraph()
        this.hateGraph.constraints.push(
            { 
                haveToBePresent: [{name: 'Kate'}, {name: 'Lucian'}], 
                cannotBePresent: [{name: 'Mathew'}], 
                allowedLocations: this.locations, 
                effect: [
                    {people: [{name: 'Kate'}, {name: 'Lucian'}], relationshipChange: +1},
                    {people: [{name: 'Lucian'}, {name: 'Kate'}], relationshipChange: +1},

                    {people: [{name: 'Mathew'}, {name: 'Kate'}], relationshipChange: -1}
                ]
            }
        )
        this.friendshipManager = new FriendshipManager(this.hateGraph, this.peopleGraph)
    }

    public goOut(tripSummary: TripSummary): string {
        let effects = this.friendshipManager.ApplyMeeting(tripSummary)
        console.log(effects)

        let effectsMsgs = effects.map(effect => {
            return `${effect.people[0].name} now ${effect.relationshipChange > 0 ? "loves" : "hates"}  ${effect.people[1].name} a bit more.`
        });

        let effectMsg = effectsMsgs.length > 0 
            ? effectsMsgs.join('\n')
            : "No one cared for your trip. ╯︿╰"


        let friendlist: string = tripSummary.goPeople.map((human: Human)=>human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation.name} with ${friendlist}.\n${effectMsg}`
        return statusMessage
    }
}
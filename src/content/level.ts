import {Human} from "./human"
import {Location} from "./location"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph } from "./peopleGraph"
import { HateGraph, Constrain } from "./hateGraph"
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
                [{name: 'Kate'}, {name: 'Mathew'}, -1]
            ])

        this.hateGraph = new HateGraph()
        this.hateGraph.constrains.push(
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
        let friendlist: string = tripSummary.goPeople.map((human: Human)=>human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation.name} with ${friendlist}`
        return statusMessage
    }
}
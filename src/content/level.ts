import {Human} from "./human"
import {Location} from "./location"
import { TripSummary } from "../management/tripsummary"
import yf from './level_1.yaml'

export class Level {
    public humans : Array<Human>
    public locations : Array<Location>

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
    }

    public goOut(tripSummary: TripSummary): string {
        let friendlist: string = tripSummary.goPeople.map((human: Human)=>human.name).join(', ')
        let statusMessage = `You went out to ${tripSummary.goLocation.name} with ${friendlist}`
        return statusMessage
    }
}
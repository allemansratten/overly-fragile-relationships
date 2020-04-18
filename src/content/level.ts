import {Human} from "./human"
import {Location} from "./location"

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
}
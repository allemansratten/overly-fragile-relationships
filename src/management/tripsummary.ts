import { Human } from '../content/human'
import { Location } from '../content/location'

export class TripSummary {
    public goPeople: Array<Human> = new Array<Human>()
    public goLocation?: Location = null

    public removeGoPeople(human: Human): boolean {
        let prevSize = this.goPeople.length
        this.goPeople = this.goPeople.filter(x => x.name !== human.name)
        return prevSize != this.goPeople.length
    }

    public flipGoPeople(human: Human): boolean {
        if (this.removeGoPeople(human)) {
            // deleted
            return false
        } else {
            // not deleted, so add
            this.goPeople.push(human)
            return true
        }
    }

    public prepare(location: Location): boolean {
        this.goLocation = location
        if (this.goPeople.length < this.goLocation.limit.min)
            return false
        if (this.goPeople.length > this.goLocation.limit.max)
            return false
        return true
    }
}
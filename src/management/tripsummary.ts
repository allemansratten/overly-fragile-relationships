import { Human } from '../content/human'
import { Location } from '../content/location'

export class TripSummary {
    public goPeople: Array<Human> = new Array<Human>()
    public goLocation?: Location = null

    public removeGoPeople(human: Human): boolean {
        for (let i in this.goPeople) {
            if (this.goPeople[i].name == human.name) {
                delete this.goPeople[i]
                return true
            }
        }
        return false
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

    public isValid(): boolean {
        if (this.goLocation == null)
            return false
        if (this.goPeople.length < this.goLocation.limit.min)
            return false
        if (this.goPeople.length > this.goLocation.limit.max)
            return false
        return true
    }
}
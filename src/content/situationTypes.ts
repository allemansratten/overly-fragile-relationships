import { HumanName } from "./human"
import { SituationEffect, Situation } from "./hateGraph"
import { TripSummary } from "../management/tripsummary"
import { PeopleGraph } from "./peopleGraph"
import { Location } from "./location"


export class SimpleSituation implements Situation {
    private haveToBePresent: Array<HumanName>
    private cannotBePresent: Array<HumanName>
    private allowedLocations: Array<Location>

    public effect: Array<SituationEffect>

    constructor(

        haveToBePresent: Array<HumanName>, cannotBePresent: Array<HumanName>, allowedLocations: Array<Location>, effect: Array<SituationEffect>) {

        this.haveToBePresent = haveToBePresent
        this.cannotBePresent = cannotBePresent
        this.allowedLocations = allowedLocations
        this.effect = effect
    }

    public GetApplicableEffects(trip: TripSummary, _: PeopleGraph): Array<SituationEffect> {
        return this.isApplicable(trip) ? this.effect : new Array()
    }

    public isApplicable(trip: TripSummary): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        return this.haveToBePresent.every(hp => namesPresent.includes(hp)) &&
            this.cannotBePresent.every(cp => !namesPresent.includes(cp)) &&
            this.allowedLocations.some(loc => loc.name == trip.goLocation?.name)
    }
}
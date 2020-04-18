import { HumanName } from "./human";
import { Location } from "./location"
import { TripSummary } from "../management/tripsummary";


export class HateGraph {
    public constraints: Array<Constraint>

    constructor(constraints: Array<Constraint>) {
        this.constraints = constraints
    }
}

export interface RelationshipEffect {
    people: [HumanName, HumanName]
    relationshipChange: number

    // TODO(?): Add min/max pre=existing relationship level for the change to apply.
}

export interface Constraint {
    DoesConstraintApplies(trip: TripSummary): boolean
    effect: Array<RelationshipEffect>
}

export class PresenceConstraint implements Constraint {
    private haveToBePresent: Array<HumanName>
    private cannotBePresent: Array<HumanName>
    private allowedLocations: Array<Location>

    public effect: Array<RelationshipEffect>

    constructor(

        haveToBePresent: Array<HumanName>, cannotBePresent: Array<HumanName>, allowedLocations: Array<Location>, effect: Array<RelationshipEffect>) {

        this.haveToBePresent = haveToBePresent
        this.cannotBePresent = cannotBePresent
        this.allowedLocations = allowedLocations
        this.effect = effect
    }

    public DoesConstraintApplies(trip: TripSummary): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        return this.haveToBePresent.every(hp => namesPresent.includes(hp)) &&
            this.cannotBePresent.every(cp => !namesPresent.includes(cp)) &&
            this.allowedLocations.some(loc => loc.name == trip.goLocation?.name)
    }

}
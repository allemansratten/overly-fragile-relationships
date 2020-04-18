import { HumanName, HumanTag } from "./human";
import { Location } from "./location"
import { TripSummary } from "../management/tripsummary";
import { RelationshipTag } from "./peopleGraph";


export class HateGraph {
    public constraints: Array<Constraint>

    constructor(constraints: Array<Constraint>) {
        this.constraints = constraints
    }
}

export class SituationEffect {
    people: [HumanName, HumanName]

    addedRelTags: Set<RelationshipTag>
    removedRelTags: Set<RelationshipTag>

    addedHumTags: [Set<HumanTag>, Set<HumanTag>]
    removedHumTags: [Set<HumanTag>, Set<HumanTag>]

    constructor(
        people: [HumanName, HumanName], 
        addedRelTags?: Set<RelationshipTag>, 
        removedRelTags?: Set<RelationshipTag>, 
        addedHumTags?: [Set<HumanTag>, Set<HumanTag>], 
        removedHumTags?: [Set<HumanTag>, Set<HumanTag>]) {
            this.people = people
            this.addedRelTags = addedRelTags ?? new Set<RelationshipTag>()
            this.removedRelTags = removedRelTags ?? new Set<RelationshipTag>()
            this.addedHumTags = addedHumTags ??  [new Set<HumanTag>(), new Set<HumanTag>()]
            this.removedHumTags = removedHumTags ?? [new Set<HumanTag>(), new Set<HumanTag>()]

    }
}

export interface Constraint {
    GetApplicableEffects(trip: TripSummary): Array<SituationEffect>
}

export class SimpleSituation implements Constraint {
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

    public GetApplicableEffects(trip: TripSummary): Array<SituationEffect> {
        return this.isApplicable(trip) ? this.effect : new Array()
    }

    public isApplicable(trip: TripSummary): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        return this.haveToBePresent.every(hp => namesPresent.includes(hp)) &&
            this.cannotBePresent.every(cp => !namesPresent.includes(cp)) &&
            this.allowedLocations.some(loc => loc.name == trip.goLocation?.name)
    }

}
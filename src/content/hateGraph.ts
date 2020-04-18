import { TripSummary } from "../management/tripsummary";
import { RelationshipTag, HumanTag } from "./entityTags";
import { PeopleGraph, CoupleKey } from "./peopleGraph";
import { HumanName } from "./human";

export class HateGraph {
    public constraints: Array<Situation>

    constructor(constraints: Array<Situation>) {
        this.constraints = constraints
    }
}

export interface Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect>
}


export class SituationEffect {
    addedRelTags: Array<[CoupleKey, RelationshipTag]>
    removedRelTags: Array<[CoupleKey, RelationshipTag]>

    addedHumTags: Array<[HumanName, HumanTag]>
    removedHumTags: Array<[HumanName, HumanTag]>

    constructor(
        addedRelTags?: Array<[CoupleKey, RelationshipTag]>, 
        removedRelTags?: Array<[CoupleKey, RelationshipTag]>, 
        addedHumTags?: Array<[HumanName, HumanTag]>,
        removedHumTags?: Array<[HumanName, HumanTag]>) {
            this.addedRelTags = addedRelTags ?? new Array()
            this.removedRelTags = removedRelTags ?? new Array()
            this.addedHumTags = addedHumTags ??  new Array()
            this.removedHumTags = removedHumTags ?? new Array()

    }
}
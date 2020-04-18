import { TripSummary } from "../management/tripsummary";
import { RelationshipTag, HumanTag } from "./entityTags";
import { PeopleGraph, CoupleKey } from "./peopleGraph";

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
    people: CoupleKey

    addedRelTags: Set<RelationshipTag>
    removedRelTags: Set<RelationshipTag>

    addedHumTags: [Set<HumanTag>, Set<HumanTag>]
    removedHumTags: [Set<HumanTag>, Set<HumanTag>]

    constructor(
        people: CoupleKey, 
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
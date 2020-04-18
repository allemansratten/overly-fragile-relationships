import { TripSummary } from "../management/tripsummary"
import { HumanTag, RelationshipTag } from "./entityTags"
import { CoupleKey, PeopleGraph } from "./peopleGraph"
import { HumanName } from "./human"

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
    description: string

    addedRelTags: Array<[CoupleKey, RelationshipTag]>
    removedRelTags: Array<[CoupleKey, RelationshipTag]>

    addedHumTags: Array<[HumanName, HumanTag]>
    removedHumTags: Array<[HumanName, HumanTag]>

    constructor(
        description: string,
        addedRelTags?: Array<[CoupleKey, RelationshipTag]>,
        removedRelTags?: Array<[CoupleKey, RelationshipTag]>,
        addedHumTags?: Array<[HumanName, HumanTag]>,
        removedHumTags?: Array<[HumanName, HumanTag]>,
    ) {
        this.description = description
        this.addedRelTags = addedRelTags ?? new Array()
        this.removedRelTags = removedRelTags ?? new Array()
        this.addedHumTags = addedHumTags ?? new Array()
        this.removedHumTags = removedHumTags ?? new Array()
    }
}
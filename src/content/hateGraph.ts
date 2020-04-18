import { HumanIdentity } from "./human";
import { Location } from "./location"


export class HateGraph {
    public constraints: Array<Constraint>

    constructor(constraints: Array<Constraint>) {
        this.constraints = constraints
    }
}

export interface RelationshipEffect {
    people: [HumanIdentity, HumanIdentity]
    relationshipChange: number

    // TODO(?): Add min/max pre=existing relationship level for the change to apply.
}

export interface Constraint {
    haveToBePresent: Array<HumanIdentity>
    cannotBePresent: Array<HumanIdentity>
    allowedLocations: Array<Location>

    effect: Array<RelationshipEffect>
}
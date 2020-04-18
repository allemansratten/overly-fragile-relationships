import { HumanIdentity } from "./human";
import { Location } from "./location"


export class HateGraph {
    public constraints: Array<Constraint>

    constructor() {
        this.constraints = []
    }
}

export class RelationshipEffect {
    public people: [HumanIdentity, HumanIdentity]
    public relationshipChange: number

    // TODO(?): Add min/max pre=existing relationship level for the change to apply.
}

export class Constraint {
    public haveToBePresent: Array<HumanIdentity>
    public cannotBePresent: Array<HumanIdentity>
    public allowedLocations: Array<Location>

    public effect: Array<RelationshipEffect>
}
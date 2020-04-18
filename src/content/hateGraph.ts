import { HumanIdentity } from "./human";
import { Location } from "./location"


export class HateGraph {
    public constrains: Array<Constrain>

    constructor() {
        this.constrains = []
    }
}

export class RelationShipEffect {
    public people: [HumanIdentity, HumanIdentity]
    public relationshipChange: number

    // TODO(?): Add min/max pre=existing relationship level for the change to apply.
}

export class Constrain {
    public haveToBePresent: Array<HumanIdentity>
    public cannotBePresent: Array<HumanIdentity>
    public allowedLocations: Array<Location>

    public effect: Array<RelationShipEffect>
}
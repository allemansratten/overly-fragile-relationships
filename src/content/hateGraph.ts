import { Human } from "./human";
import { Location } from "./location"

export class HateGraph {
    public constrains: Array<Constrain>
}

export class RelationShipEffect {
    public people: [Human, Human]
    public relationshipChange: number

    // TODO(?): Add min/max pre=existing relationship level for the change to apply.
}

export class Constrain {
    public haveToBePresent: Array<Human>
    public cannotBePresent: Array<Human>
    public allowedLocations: Array<Location>

    public effect: Array<RelationShipEffect>
}
import { Human } from "./human";
import { Location } from "./location"

export class HateGraph {
    public Data: Array<Constrain>
}

export class RelationShipEffect {
    public People: [Human, Human]
    public RelationshipChange: number

    // TODO(?): Add min/max pre=existing relationship level for the change to apply.
}

export class Constrain {
    public HaveToBePresent: Array<Human>
    public CannotBePresetn: Array<Human>
    public RequiredLocation: Location

    public Effect: Array<RelationShipEffect>
}
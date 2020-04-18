import { Relationship } from "./peopleGraph";

export interface Human extends HumanIdentity {
    relationships: Array<Relationship>
}

export interface HumanIdentity {
    name: string,
}

import { Relationship } from "./peopleGraph";

export type HumanName = string

export interface Human {
    name: HumanName
    relationships: Array<Relationship>
}

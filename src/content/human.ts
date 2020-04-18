import { Relationship } from "./peopleGraph";
import { HumanTag } from "./entityTags";

export type HumanName = string

export class Human {
    name: HumanName
    relationships: Array<Relationship>
    public tags: Set<HumanTag>

    constructor(name: HumanName, relationships?: Array<Relationship>, tags?: Set<HumanTag>) {
        this.name = name
        this.relationships = relationships ?? new Array()
        this.tags = tags ?? new Set()
    }


}
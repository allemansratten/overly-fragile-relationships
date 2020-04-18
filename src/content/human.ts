import { Relationship } from "./peopleGraph";
import { HumanTag } from "./entityTags";

export type HumanName = string

export class Human {
    name: HumanName
    
    // these are read only
    public relationships: Array<Relationship>
    public tags: Set<HumanTag>

    constructor(name: HumanName) {
        this.name = name
        this.relationships = new Array()
        this.tags = new Set()
    }


}
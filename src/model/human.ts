import { Relationship } from "./peopleGraph";
import { HumanTag } from "../content/entityTags";
import { HumanName } from "../content/humans";

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
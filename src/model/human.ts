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

export class HumanUtils{
    public static peopleToString(people: HumanName[]) : string {
        if (people.length == 1) {
            return people[0]
        }
        else if (people.length == 2) {
            return people.join(" and ")
        }
        else {
            let copy: string[] = people.slice()
            copy[copy.length - 1] = `and ${copy[copy.length - 1]}`
            return copy.join(", ")
        }
    }
    
}
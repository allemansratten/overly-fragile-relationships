import { Human, HumanName } from "./human"
import { RelationshipTag, RelationshipTagMap } from "./entityTags"

type NodeKey = string

export class PeopleGraph {
    private graph: Map<NodeKey, Set<RelationshipTag>>
    private oriented: Boolean

    constructor(people: Human[] = [], initialRelationships: Array<Relationship> = []){
        this.graph = new Map
        this.oriented = false

        people.forEach(h => {
            people.forEach(hh => {
                this.setTags([h.name, hh.name], new Set<RelationshipTag>())
            });
        });

        initialRelationships.forEach(rel => {
            this.setTags(rel.people, rel.tags)
        });
    }


    public setTags(people: [HumanName, HumanName], tags: Set<RelationshipTag>){
        let graphKey = this.getGraphKey(people)
        this.graph.set(graphKey, tags) 
    }

    public getTags(people: [HumanName, HumanName]) {
        let graphKey = this.getGraphKey(people)
        return this.graph.get(graphKey)
    }

    public addTag(people: [HumanName, HumanName], tag: RelationshipTag) {
        this.getTags(people)?.add(tag)
    }

    public removeTag(people: [HumanName, HumanName], tag: RelationshipTag) : boolean {
        return this.getTags(people)?.delete(tag) ?? false
    }

    public getOutRelationships(person: HumanName): Array<Relationship>{
        let result = new Array

        this.graph.forEach((val, key) => {
            if (key.startsWith(person)) {
                result.push(new Relationship(this.nodeKeyToTwoIdentities(key), val))
            }
        })

        return result
    }

    public getInRelationships(person: HumanName): Array<Relationship>{
        let result = new Array

        this.graph.forEach((val, key) => {
            if (key.endsWith(person)) {
                result.push(new Relationship(this.nodeKeyToTwoIdentities(key), val))
            }
        })

        return result
    }

    private getGraphKey(unorderedPair: [HumanName, HumanName]): NodeKey{
        let [a, b] = unorderedPair
        let orderedPair = a <= b || !this.oriented ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

    private nodeKeyToTwoIdentities(key: NodeKey): [HumanName, HumanName]{
        let names = key.split('|')
        console.assert(names.length == 2)

        return [names[0], names[1]]
    }

}

export class Relationship {
    people: [HumanName, HumanName]
    tags: Set<RelationshipTag>

    constructor(people: [HumanName, HumanName], tags?: Set<RelationshipTag>){
        this.people = people
        this.tags = tags ?? new Set<RelationshipTag>()
    }

    public toString(): string {
        return `- ${this.people[1]}: ${Array.from(this.tags).map((x) => RelationshipTagMap[x]).join(', ')}`
    }
}

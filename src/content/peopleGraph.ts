import { Human, HumanName } from "./human"
import { RelationshipTag, RelationshipTagMap, HumanTag } from "./entityTags"

type NodeKey = string

export class PeopleGraph {
    private relationshipTags: Map<NodeKey, Set<RelationshipTag>>
    private humansTags: Map<HumanName, Set<HumanTag>>

    private oriented: Boolean

    constructor(people: Human[] = [], initialRelationships: Array<Relationship> = [], initialTags: Array<[HumanName, HumanTag]>){
        this.relationshipTags = new Map()
        this.humansTags = new Map()
        this.oriented = false

        people.forEach(h => {
            people.forEach(hh => {
                if (h.name != hh.name) {
                    this.setRelTags([h.name, hh.name], new Set<RelationshipTag>())
                }
            });
        });

        initialTags.forEach(hTagTuple => {
            let hName = hTagTuple[0]
            let hTags = this.humansTags.get(hName) ?? new Set<HumanTag>()
            hTags.add(hTagTuple[1])
            this.humansTags.set(hName, hTags)
        });

        initialRelationships.forEach(rel => {
            this.setRelTags(rel.people, rel.tags)
        });
    }


    public setRelTags(people: [HumanName, HumanName], tags: Set<RelationshipTag>){
        let graphKey = this.getGraphKey(people)
        this.relationshipTags.set(graphKey, tags) 
    }

    public getRelTags(people: [HumanName, HumanName]): Set<RelationshipTag> {
        let graphKey = this.getGraphKey(people)
        return this.relationshipTags.get(graphKey)!
    }

    public addRelTag(people: [HumanName, HumanName], tag: RelationshipTag) {
        this.getRelTags(people)?.add(tag)
    }

    public removeRelTag(people: [HumanName, HumanName], tag: RelationshipTag) : boolean {
        return this.getRelTags(people)?.delete(tag) ?? false
    }

    public getOutRelationships(person: HumanName): Array<Relationship>{
        let result = new Array

        this.relationshipTags.forEach((val, key) => {
            if (key.startsWith(person)) {
                result.push(new Relationship(this.nodeKeyToTwoIdentities(key), val))
            }
        })

        return result
    }

    public getInRelationships(person: HumanName): Array<Relationship>{
        let result = new Array

        this.relationshipTags.forEach((val, key) => {
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

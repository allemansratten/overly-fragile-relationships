import { HumanIdentity } from "./human"

type NodeKey = string

export class PeopleGraph {
    private graph: Map<NodeKey, number>
    private oriented: Boolean

    constructor(people: HumanIdentity[] = [], initialRelationships: Array<Relationship> = []){
        this.graph = new Map
        this.oriented = false

        people.forEach(h => {
            people.forEach(hh => {
                // will set weight for each person with themselves but ¯\_(ツ)_/¯
                this.setWeight([h, hh], 0)
            });
        });

        initialRelationships.forEach(rel => {
            this.setWeight(rel.people, rel.level)
        });
    }

    public setWeight(people: [HumanIdentity, HumanIdentity], weight: number){
        let graphKey = this.getGraphKey(people)
        this.graph.set(graphKey, weight) 
    }

    public updateWeight(people: [HumanIdentity, HumanIdentity], weightDelta: number){
        let graphKey = this.getGraphKey(people)
        this.graph.set(graphKey, this.graph.get(graphKey) ?? 0 + weightDelta) 
    }

    public getWeight(people: [HumanIdentity, HumanIdentity]): number{
        let graphKey = this.getGraphKey(people)
        let currValue = this.graph.get(graphKey) 
        if (currValue == null) {
            this.graph.set(graphKey, 0)
            return 0
        }
        return currValue
    }

    public getRelationships(person: HumanIdentity): Array<Relationship>{
        let result = new Array

        this.graph.forEach((val, key) => {
            if (key.startsWith(person.name)) {
                result.push(new Relationship(this.nodeKeyToTwoIdentities(key), val))
            }
        })

        return result
    }

    private getGraphKey(unorderedPair: [HumanIdentity, HumanIdentity]): NodeKey{
        let [a, b] = unorderedPair.map(n => n.name)
        let orderedPair = a <= b || !this.oriented ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

    private nodeKeyToTwoIdentities(key: NodeKey): [HumanIdentity, HumanIdentity]{
        let names = key.split('|')
        console.assert(names.length == 2)

        return [{name: names[0]}, {name:names[1]}]
    }

}

export class Relationship {
    constructor(people: [HumanIdentity, HumanIdentity], level: number){
        this.people = people
        this.level = level
    }

    people: [HumanIdentity, HumanIdentity]
    level: number

    public toString(): string {
        return `${this.people[0]} -> ${this.people[1]}: ${this.level}`
    }
}
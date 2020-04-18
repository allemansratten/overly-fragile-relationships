import { Human, HumanName } from "./human"

type NodeKey = string

export class PeopleGraph {
    private graph: Map<NodeKey, number>
    private oriented: Boolean


    constructor(people: Human[] = [], initialRelationships: Array<Relationship> = []){
        this.graph = new Map
        this.oriented = false

        people.forEach(h => {
            people.forEach(hh => {
                if (hh.name != h.name) {
                    this.setWeight([h.name, hh.name], 0)
                }
            });
        });

        initialRelationships.forEach(rel => {
            this.setWeight(rel.people, rel.level)
        });
    }

    public setWeight(people: [HumanName, HumanName], weight: number){
        let graphKey = this.getGraphKey(people)
        this.graph.set(graphKey, weight) 
    }

    public updateWeight(people: [HumanName, HumanName], weightDelta: number){
        let graphKey = this.getGraphKey(people)
        this.graph.set(graphKey, (this.graph.get(graphKey) ?? 0) + weightDelta)
    }

    public getWeight(people: [HumanName, HumanName]): number{
        let graphKey = this.getGraphKey(people)
        let currValue = this.graph.get(graphKey) 
        if (currValue == null) {
            this.graph.set(graphKey, 0)
            return 0
        }
        return currValue
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
    constructor(people: [HumanName, HumanName], level: number){
        this.people = people
        this.level = level
    }

    people: [HumanName, HumanName]
    level: number

    public toString(): string {
        return `${this.people[0]} -> ${this.people[1]}: ${this.level}`
    }
}
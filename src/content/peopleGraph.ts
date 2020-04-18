import { Human, HumanName } from "./human"

type NodeKey = string

export class PeopleGraph {
    private graph: Record<NodeKey, number>
    private oriented: Boolean

    constructor(people: Human[] = [], initialRelationships: Array<Relationship> = []){
        this.graph = {}
        this.oriented = false

        people.forEach(h => {
            people.forEach(hh => {
                // will set weight for each person with themselves but ¯\_(ツ)_/¯
                this.setWeight([h.name, hh.name], 0)
            });
        });

        initialRelationships.forEach(rel => {
            this.setWeight(rel.people, rel.level)
        });
    }

    public setWeight(people: [HumanName, HumanName], weight: number){
        let graphKey = this.getGraphKey(people)
        this.graph[graphKey] = weight 
    }

    public updateWeight(people: [HumanName, HumanName], weightDelta: number){
        let graphKey = this.getGraphKey(people)
        this.graph[graphKey] += weightDelta 
    }

    public getWeight(people: [HumanName, HumanName]): number{
        let graphKey = this.getGraphKey(people)
        return this.graph[graphKey] 
    }

    private getGraphKey(unorderedPair: [HumanName, HumanName]): NodeKey{
        let [a, b] = unorderedPair
        let orderedPair = a <= b || !this.oriented ? [a, b] : [b, a]

        return orderedPair.join('|')
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
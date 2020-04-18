import { HumanIdentity } from "./human"

type NodeKey = string

export class PeopleGraph {
    private graph: Map<[HumanIdentity, HumanIdentity], number>
    private oriented: Boolean

    constructor(people: HumanIdentity[] = [], initialRelationships: Array<Relationship> = []){
        this.graph = new Map()
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
        this.graph[graphKey] = weight 
    }

    public updateWeight(people: [HumanIdentity, HumanIdentity], weightDelta: number){
        let graphKey = this.getGraphKey(people)
        this.graph[graphKey] += weightDelta 
    }

    public getWeight(people: [HumanIdentity, HumanIdentity]): number{
        let graphKey = this.getGraphKey(people)
        return this.graph[graphKey] 
    }

    private getGraphKey(unorderedPair: [HumanIdentity, HumanIdentity]): NodeKey{
        let [a, b] = unorderedPair.map(n => n.name)
        let orderedPair = a <= b || !this.oriented ? [a, b] : [b, a]

        return orderedPair.join('|')
    }
}

export interface Relationship {
    people: [HumanIdentity, HumanIdentity]
    level: number
}
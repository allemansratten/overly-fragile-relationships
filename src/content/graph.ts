import { Human } from "./human"

type NodeKey = string

export class PeopleGraph {
    private graph: Map<[Human, Human], number>

    constructor(){
        this.graph = new Map()
    }

    public setWeight(people: [Human, Human], weight: number){
        let graphKey = this.getOrderedPair(people)
        this.graph[graphKey] = weight 
    }

    public updateWeight(people: [Human, Human], weightDelta: number){
        let graphKey = this.getOrderedPair(people)
        this.graph[graphKey] += weightDelta 
    }

    public getWeight(people: [Human, Human]): number{
        let graphKey = this.getOrderedPair(people)
        return this.graph[graphKey] 
    }

    private getOrderedPair(unorderedPair: [Human, Human]): NodeKey{
        let [a, b] = unorderedPair.map(n => n.name)
        let orderedPair = a <= b ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

}
import { Human } from "./human"

type NodeKey = string

export class PeopleGraph {
    private graph: Map<[Human, Human], number>
    private oriented: Boolean

    constructor(){
        this.graph = new Map()
        this.oriented = false
    }

    public setWeight(people: [Human, Human], weight: number){
        let graphKey = this.getGraphKey(people)
        this.graph[graphKey] = weight 
    }

    public updateWeight(people: [Human, Human], weightDelta: number){
        let graphKey = this.getGraphKey(people)
        this.graph[graphKey] += weightDelta 
    }

    public getWeight(people: [Human, Human]): number{
        let graphKey = this.getGraphKey(people)
        return this.graph[graphKey] 
    }

    private getGraphKey(unorderedPair: [Human, Human]): NodeKey{
        let [a, b] = unorderedPair.map(n => n.name)
        let orderedPair = a <= b || !this.oriented ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

}
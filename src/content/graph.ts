type Person = string
type NodeKey = string

export class PeopleGraph {
    private graph: Map<[Person, Person], number>

    constructor(){
        this.graph = new Map()
    }

    public setWeight(people: [Person, Person], weight: number){
        let graphKey = this.getOrderedPair(people)
        this.graph[graphKey] = weight 
    }

    public updateWeight(people: [Person, Person], weightDelta: number){
        let graphKey = this.getOrderedPair(people)
        this.graph[graphKey] += weightDelta 
    }

    public getWeight(people: [Person, Person]): number{
        let graphKey = this.getOrderedPair(people)
        return this.graph[graphKey] 
    }

    private getOrderedPair(unorderedPair: [Person, Person]): NodeKey{
        let [a, b] = unorderedPair
        let orderedPair = a <= b ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

}
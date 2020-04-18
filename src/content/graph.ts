type Person = string
type NodeKey = string

export class PeopleGraph {
    private graph: Map<[Person, Person], number>

    constructor(){
        this.graph = new Map()
    }


    public addWeight(people: [Person, Person], weight: number){
        let graphKey = this.getOrderedPair(people)
        this.graph[graphKey] = weight 
    }

    public updateWeight(people: [Person, Person], weightDelta: number){
        let graphKey = this.getOrderedPair(people)
        this.graph[graphKey] += weightDelta 
    }

    private getOrderedPair(unorderedPair: [Person, Person]): NodeKey{
        let [a, b] = unorderedPair
        let orderedPair = a <= b ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

}
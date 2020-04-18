import { Relationship } from "./peopleGraph";

export type HumanName = string

export type HumanTag =
    'introvert' | 'extrovert' | 'angry when drunk' | 'sad when drunk' |
    'good bowler' | 'bad bowler' | 'promiscuous' | 'jealous' | 'disagreeable'

export class Human {
    name: HumanName
    relationships: Array<Relationship>
    public tags: Set<HumanTag>

    constructor(name: HumanName, relationships?: Array<Relationship>){
        this.name = name
        this.relationships = relationships ?? new Array()
        this.tags = new Set()
    }


}
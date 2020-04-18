import { Relationship } from "./peopleGraph";

export type HumanName = string

export type HumanTag =
    'introvert' | 'extrovert' | 'angry when drunk' | 'sad when drunk' |
    'good bowler' | 'bad bowler' | 'promiscuous' | 'jealous' | 'disagreeable'

export interface Human {
    name: HumanName
    relationships: Array<Relationship>
}
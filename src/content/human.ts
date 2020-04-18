import { Relationship } from "./peopleGraph";

export type HumanName = string

export enum HumanTag {
    introvert, extrovert, angry_drunk, sad_drunk,
    good_bowler, bad_bowler, promiscuous, jealous, disagreeable
}

let HumanTagMap: { [key in HumanTag]: string } = {
    [HumanTag.introvert]: 'introvert',
    [HumanTag.extrovert]: 'extrover',
    [HumanTag.angry_drunk]: 'angry when drunk',
    [HumanTag.sad_drunk]: 'sad when drunk',
    [HumanTag.good_bowler]: 'good bowler',
    [HumanTag.bad_bowler]: 'bad bowler',
    [HumanTag.promiscuous]: 'promiscuous',
    [HumanTag.jealous]: 'jealous',
    [HumanTag.disagreeable]: 'disagreeable'
}
export { HumanTagMap }

export class Human {
    name: HumanName
    relationships: Array<Relationship>
    public tags: Set<HumanTag>

    constructor(name: HumanName, relationships?: Array<Relationship>, tags?: Set<HumanTag>) {
        this.name = name
        this.relationships = relationships ?? new Array()
        this.tags = tags ?? new Set()
    }


}
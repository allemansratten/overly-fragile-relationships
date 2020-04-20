import { TripSummary } from "./tripSummary"
import { HumanTag, RelationshipTag } from "../content/entityTags"
import { Couple, PeopleGraph } from "./peopleGraph"
import { HumanName } from "../content/humans"

export interface Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect>
}


export class SituationEffect {
    description: Array<string>

    addedRelTags: Array<[Couple, RelationshipTag]>
    removedRelTags: Array<[Couple, RelationshipTag]>

    addedHumTags: Array<[HumanName, HumanTag]>
    removedHumTags: Array<[HumanName, HumanTag]>

    changedFondness: Array<[Couple, number]>
    newFutureSituations: Array<[number, Situation]>

    constructor(
        description?: string | Array<string>,
        addedRelTags?: Array<[Couple, RelationshipTag]>,
        removedRelTags?: Array<[Couple, RelationshipTag]>,
        addedHumTags?: Array<[HumanName, HumanTag]>,
        removedHumTags?: Array<[HumanName, HumanTag]>,
        changedFondness?: Array<[Couple, number]>,
        newFutureSituations?: Array<[number, Situation]>
    ) {
        let assignedDescription = description ?? new Array<string>()
        this.description = Array.isArray(assignedDescription) 
            ? assignedDescription 
            : [assignedDescription]
        this.addedRelTags = addedRelTags ?? new Array()
        this.removedRelTags = removedRelTags ?? new Array()
        this.addedHumTags = addedHumTags ?? new Array()
        this.removedHumTags = removedHumTags ?? new Array()
        this.changedFondness = changedFondness ?? new Array()
        this.newFutureSituations = newFutureSituations ?? new Array()
    }

    addRelTags(tags: Array<[Couple, RelationshipTag]>): SituationEffect {
        this.addedRelTags.push(...tags)
        return this
    }

    removeRelTags(tags: Array<[Couple, RelationshipTag]>): SituationEffect {
        this.removedRelTags.push(...tags)
        return this
    }

    addHumTags(tags: Array<[HumanName, HumanTag]>): SituationEffect {
        this.addedHumTags.push(...tags)
        return this
    }

    removeHumTags(tags: Array<[HumanName, HumanTag]>): SituationEffect {
        this.removedHumTags.push(...tags)
        return this
    }

    setDescription(description: string|Array<string>): SituationEffect {
        this.description = Array.isArray(description) 
            ? description 
            : [description]
        return this
    }

    public getRandomDescription(): string {
        if (this.description.length === 0) {
            return ""
        } else {
            return this.description[Math.floor(Math.random() * this.description.length)]
        }
    }

    changeFondness(changes: Array<[Couple, number]>): SituationEffect {
        this.changedFondness.push(...changes)
        return this
    }

    addNewFutureSituations(newFutureSituations: Array<[number, Situation]>): SituationEffect {
        this.newFutureSituations.push(...newFutureSituations)
        return this
    }

    appendToThis(effect: SituationEffect) {
        this.addedHumTags = this.addedHumTags.concat(effect.addedHumTags)
        this.removedHumTags = this.removedHumTags.concat(effect.removedHumTags)
        this.addedRelTags = this.addedRelTags.concat(effect.addedRelTags)
        this.removedRelTags = this.removedRelTags.concat(effect.removedRelTags)
        this.changedFondness = this.changedFondness.concat(effect.changedFondness)
        this.newFutureSituations = this.newFutureSituations.concat(effect.newFutureSituations)
        return this
    }
}

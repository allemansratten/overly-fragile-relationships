import { TripSummary } from "./tripSummary"
import { HumanTag, RelationshipTag } from "../content/entityTags"
import { CoupleKey, PeopleGraph } from "./peopleGraph"
import { HumanName } from "../content/humans"

export class HateGraph {
    public constraints: Array<Situation>

    constructor(constraints: Array<Situation>) {
        this.constraints = constraints
    }
}

export interface Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect>
}


export class SituationEffect {
    description: string

    addedRelTags: Array<[CoupleKey, RelationshipTag]>
    removedRelTags: Array<[CoupleKey, RelationshipTag]>

    addedHumTags: Array<[HumanName, HumanTag]>
    removedHumTags: Array<[HumanName, HumanTag]>

    changedFondness: Array<[CoupleKey, number]>

    constructor(
        description?: string,
        addedRelTags?: Array<[CoupleKey, RelationshipTag]>,
        removedRelTags?: Array<[CoupleKey, RelationshipTag]>,
        addedHumTags?: Array<[HumanName, HumanTag]>,
        removedHumTags?: Array<[HumanName, HumanTag]>,
        changedFondness?: Array<[CoupleKey, number]>,
    ) {
        this.description = description ?? ""
        this.addedRelTags = addedRelTags ?? new Array()
        this.removedRelTags = removedRelTags ?? new Array()
        this.addedHumTags = addedHumTags ?? new Array()
        this.removedHumTags = removedHumTags ?? new Array()
        this.changedFondness = changedFondness ?? new Array()
    }

    addRelTags(tags: Array<[CoupleKey, RelationshipTag]>): SituationEffect {
        this.addedRelTags.push(...tags)
        return this
    }

    removeRelTags(tags: Array<[CoupleKey, RelationshipTag]>): SituationEffect {
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

    setDescription(description: string): SituationEffect {
        this.description = description
        return this
    }

    changeFondness(changes: Array<[CoupleKey, number]>): SituationEffect {
        this.changedFondness.push(...changes)
        return this
    }

    apply(effect: SituationEffect) {
        this.addedHumTags = this.addedHumTags.concat(effect.addedHumTags)
        this.removedHumTags = this.removedHumTags.concat(effect.removedHumTags)
        this.addedRelTags = this.addedRelTags.concat(effect.addedRelTags)
        this.removedRelTags = this.removedRelTags.concat(effect.removedRelTags)
    }
}

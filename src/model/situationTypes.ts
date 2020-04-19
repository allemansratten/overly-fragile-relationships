import { Situation, SituationEffect } from "./hateGraph"
import { TripSummary } from "./tripSummary"
import { CoupleKey, PeopleGraph } from "./peopleGraph"
import { Location } from "./location"
import { HumanTag, RelationshipTag } from "../content/entityTags"
import { HumanName } from "../content/humans"
import { LocationName } from "../content/locations"


export class SituationUtils {

    public static startToDate(couple: CoupleKey): SituationEffect {
        const [a, b] = couple

        return new SituationEffect(
            `${a} and ${b} started dating!`,
            [
                [[a, b], RelationshipTag.lover],
                [[b, a], RelationshipTag.lover],
            ],
            [
                [[a, b], RelationshipTag.crush],
                [[b, a], RelationshipTag.crush],
            ],
        )
    }

    public static breakUp(couple: CoupleKey): SituationEffect {
        const [a, b] = couple

        return new SituationEffect(
            `Did you hear? {a} and ${b} broke up!`,
            [
                [[a, b], RelationshipTag.ex],
                [[b, a], RelationshipTag.ex],
            ],
            [
                [[a, b], RelationshipTag.lover],
                [[b, a], RelationshipTag.lover],
            ],
        )
    }
}

export class SimpleSituation implements Situation {
    private haveToBePresent: Array<HumanName>
    private cannotBePresent: Array<HumanName>
    private allowedLocations: Array<Location>

    public effect: Array<SituationEffect>

    constructor(
        haveToBePresent: Array<HumanName>,
        cannotBePresent: Array<HumanName>,
        allowedLocations: Array<Location>,
        effect: Array<SituationEffect>,
    ) {

        this.haveToBePresent = haveToBePresent
        this.cannotBePresent = cannotBePresent
        this.allowedLocations = allowedLocations
        this.effect = effect
    }

    public GetApplicableEffects(trip: TripSummary, _: PeopleGraph): Array<SituationEffect> {
        return this.isApplicable(trip) ? this.effect : new Array()
    }

    public isApplicable(trip: TripSummary): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        return this.haveToBePresent.every(hp => namesPresent.includes(hp)) &&
            this.cannotBePresent.every(cp => !namesPresent.includes(cp)) &&
            this.allowedLocations.some(loc => loc.name == trip.goLocation?.name)
    }
}

export class NobodyLikesAngryDrunk implements Situation {
    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        if (trip.goLocation!.name != LocationName.Drink) {
            return new Array()
        }

        let effects = new Array()
        trip.goPeople.forEach(person => {
            let personTags = currentState.getHumTags(person.name)
            if (personTags.has(HumanTag.angry_drunk)) {
                trip.goPeople.filter(p => p != person).forEach(otherPerson => {
                    effects.push(new SituationEffect(
                        "Nobody likes drunk people",
                        [
                            [[otherPerson.name, person.name], RelationshipTag.dislike],
                        ],
                    ))
                })

            }
        })
        return effects
    }
}

export class MutualCrush implements Situation {
    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        // I know this is _terribly_ inefficient :(
        let effects = new Array()

        let crushesMap: Map<HumanName, HumanName[]> = new Map()

        for (const person of trip.goPeople) {
            let crushesPresent = trip.goPeople.filter(
                b => currentState.getMutualRelationshipsBetween(person.name, b.name).includes(RelationshipTag.crush),
            ).map(h => h.name)
            crushesMap.set(person.name, crushesPresent)
        }

        for (const person of trip.goPeople) {
            const crushes = crushesMap.get(person.name)!
            if (crushes.length === 1) {
                const crush = crushes[0]
                // Break symmetry by comparing names
                if (crushesMap.get(crush)!.length === 1 && crush <= person.name) {
                    effects.push(
                        SituationUtils.startToDate([person.name, crush]),
                    )
                }
            }
        }

        return effects
    }
}

export class EternalCouple implements Situation {
    a: HumanName
    b: HumanName

    constructor(a: HumanName, b: HumanName) {
        this.a = a
        this.b = b
    }

    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        let relationships = currentState.getMutualRelationshipsBetween(this.a, this.b)
        // TODO: this could break if they get together/break up in another way
        let res = []

        if (relationships.includes(RelationshipTag.eternal_couple_apart_3)) {
            res.push(
                SituationUtils.startToDate([this.a, this.b])
                    .setDescription(`${this.a} and ${this.b} are back together again.`),
                new SituationEffect()
                    .removeRelTags([[[this.a, this.b], RelationshipTag.eternal_couple_apart_3]])
                    .addRelTags([[[this.a, this.b], RelationshipTag.eternal_couple_together_1]])
            )
        } else if (relationships.includes(RelationshipTag.eternal_couple_together_3)) {
            res.push(
                SituationUtils.breakUp([this.a, this.b])
                    .setDescription(`${this.a} and ${this.b} broke up again.`),
                new SituationEffect()
                    .removeRelTags([[[this.a, this.b], RelationshipTag.eternal_couple_together_3]])
                    .addRelTags([[[this.a, this.b], RelationshipTag.eternal_couple_apart_1]])
            )
        }

        return res
    }
}

export class Complex implements Situation {
    public humReq: Array<HumanName> = Array()
    public humBan: Array<HumanName> = Array()
    public allowedLocations: Array<Location> = Array()

    public humTagsReq: Array<[HumanName, HumanTag]> = Array()
    public humTagsBan: Array<[HumanName, HumanTag]> = Array()

    public relTagsReq: Array<[CoupleKey, RelationshipTag]> = Array()
    public relTagsBan: Array<[CoupleKey, RelationshipTag]> = Array()

    public effect: Array<SituationEffect> = Array()

    constructor(
        fields?: {
            haveToBePresent?: Array<HumanName>, cannotBePresent?: Array<HumanName>,
            allowedLocations?: Array<Location>,
            humTagsReq?: Array<[HumanName, HumanTag]>, humTagsBan?: Array<[HumanName, HumanTag]>,
            relTagsReq?: Array<[CoupleKey, RelationshipTag]>, relTagsBan?: Array<[CoupleKey, RelationshipTag]>,
            effect?: Array<SituationEffect>,
        }) {
        if (fields) Object.assign(this, fields);
    }

    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        return this.isApplicable(trip, currentState) ? this.effect : new Array()
    }

    public isApplicable(trip: TripSummary, currentState: PeopleGraph): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        // If no locations are set, this means all locations are allowed
        let locationOk = (this.allowedLocations.length === 0)
            || this.allowedLocations.some(loc => loc.name == trip.goLocation?.name)

        return locationOk &&
            this.humReq.every(hp => namesPresent.includes(hp)) &&
            this.humBan.every(cp => !namesPresent.includes(cp)) &&

            this.humTagsReq.every(hr => currentState.getHumTags(hr[0]).has(hr[1])) &&
            this.humTagsBan.every(br => !currentState.getHumTags(br[0]).has(br[1])) &&

            this.relTagsReq.every(rr => currentState.getRelTags(rr[0]).has(rr[1])) &&
            this.relTagsBan.every(br => !currentState.getRelTags(br[0]).has(br[1]))
    }
}

export class TimerSituation implements Situation {
    static relationshipChains = [
        [
            RelationshipTag.eternal_couple_apart_1,
            RelationshipTag.eternal_couple_apart_2,
            RelationshipTag.eternal_couple_apart_3,
        ],
        [
            RelationshipTag.eternal_couple_together_1,
            RelationshipTag.eternal_couple_together_2,
            RelationshipTag.eternal_couple_together_3,
        ],
    ]

    static getRelationshipSteps(): Map<RelationshipTag, RelationshipTag> {
        let res = new Map()

        for (const chain of this.relationshipChains) {
            for (let i = 0; i < chain.length - 1; i++) {
                res.set(chain[i], chain[i + 1])
            }
        }

        return res
    }

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        const relationships = currentState.getAllRelationships()
        const steps = TimerSituation.getRelationshipSteps()

        let addedRelTags: Array<[CoupleKey, RelationshipTag]> = []
        let removedRelTags: Array<[CoupleKey, RelationshipTag]> = []

        for (const r of relationships) {
            for (const tag of Array.from(r.tags)) {
                if (steps.has(tag)) {
                    removedRelTags.push([r.people, tag])
                    addedRelTags.push([r.people, steps.get(tag)!])
                }
            }
        }

        return [new SituationEffect("", addedRelTags, removedRelTags)]
    }
}

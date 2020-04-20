import { Situation, SituationEffect } from "../model/situation"
import { TripSummary } from "../model/tripSummary"
import { Couple, PeopleGraph } from "../model/peopleGraph"
import { HumanTag, RelationshipTag } from "./entityTags"
import { HumanName } from "./humans"
import { LocationName } from "./locations"


export class SituationUtils {

    public static startToDate(couple: Couple): SituationEffect {
        const [a, b] = couple
        return this.changeRelationship(
            couple,
            [RelationshipTag.lover],
            [RelationshipTag.crush, RelationshipTag.ex],
            +10,
        ).setDescription(`${a} and ${b} started dating.`)
    }

    public static breakUp(couple: Couple): SituationEffect {
        const [a, b] = couple
        return this.changeRelationship(
            couple,
            [RelationshipTag.ex],
            [RelationshipTag.lover],
            -5,
        ).setDescription(`${a} and ${b} broke up!`)
    }

    public static changeRelationship(
        couple: Couple,
        addedRelTags: RelationshipTag[],
        removedRelTags: RelationshipTag[],
        fondnessChange: number,
        description?: string,
    ): SituationEffect {
        const [a, b] = couple

        function broadcast(tags: RelationshipTag[]): Array<[Couple, RelationshipTag]> {
            let res = new Array
            for (const tag of tags) {
                res.push([[a, b], tag])
                res.push([[b, a], tag])
            }
            return res
        }

        return new SituationEffect(description)
            .addRelTags(broadcast(addedRelTags))
            .removeRelTags(broadcast(removedRelTags))
            .changeFondness([
                [[a, b], fondnessChange],
                [[b, a], fondnessChange],
            ])
    }

    public static getSomeoneOnTripWithTag(trip: TripSummary, person: HumanName, currentState: PeopleGraph, tag: RelationshipTag) {
        return trip.goPeople
            .filter(oPerson => oPerson.name != person)
            .find(oPerson => currentState.getRelationshipsBetween(person, oPerson.name).some(t => t == tag))
    }

    public static getLovers(person: HumanName, currentState: PeopleGraph): HumanName[] {
        let res = []

        for (const rel of currentState.getOutRelationships(person)) {
            if (rel.tags.has(RelationshipTag.lover)) {
                res.push(rel.people[1])
            }
        }

        return res
    }

    public static subset<T>(as: T[], bs: T[]) {
        return as.every(a => bs.includes(a))
    }
}

export class SimpleSituation implements Situation {
    private haveToBePresent: Array<HumanName>
    private cannotBePresent: Array<HumanName>
    private allowedLocations: Array<LocationName>

    public effect: Array<SituationEffect>

    constructor(
        haveToBePresent: Array<HumanName>,
        cannotBePresent: Array<HumanName>,
        allowedLocations: Array<LocationName>,
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
            this.allowedLocations.some(loc => loc == trip.goLocation)
    }
}

export class NobodyLikesAngryDrunk implements Situation {
    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        if (trip.goLocation != LocationName.Drink) {
            return new Array()
        }

        let effects = new Array()
        trip.goPeople.forEach(person => {
            let personTags = currentState.getHumTags(person.name)
            if (personTags.has(HumanTag.angry_drunk)) {
                trip.goPeople.filter(p => p != person).forEach(otherPerson => {
                    // TODO: make this be one effect (so that we have one description and can say "the others weren't happy"
                    effects.push(
                        new SituationEffect(
                            `${person.name} got drunk and angry; ${otherPerson.name} wasn't happy about that.`,
                        ).changeFondness([[[otherPerson.name, person.name], -1]]),
                    )
                })

            }
        })
        return effects
    }
}

export class MutualCrush implements Situation {
    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        let effects = new Array()
        let crushesMap: Map<HumanName, HumanName[]> = new Map()
        let eligiblePeople = []

        for (const person of trip.goPeople) {
            let loverOnTrip = SituationUtils.getSomeoneOnTripWithTag(trip, person.name, currentState, RelationshipTag.lover)
            if (loverOnTrip) {
                continue
            }

            if (SituationUtils.getLovers(person.name, currentState).length >= 1
                && !currentState.getHumTags(person.name).has(HumanTag.promiscuous)) {
                // No polygamy unless the promiscuous tag is present.
                continue
            }

            let crushesPresent = trip.goPeople.filter(
                b => currentState.getMutualRelationshipsBetween(person.name, b.name).includes(RelationshipTag.crush),
            ).map(h => h.name)

            if (crushesPresent.length != 1) {
                continue
            }
            crushesMap.set(person.name, crushesPresent)
            eligiblePeople.push(person.name)
        }

        for (const person of eligiblePeople) {
            const crushes = crushesMap.get(person)
            if (crushes?.length === 1) {
                const crush = crushes[0]
                if (!eligiblePeople.includes(crush)) {
                    continue
                }
                // Break symmetry by comparing names
                if (crushesMap.get(crush)?.length === 1 && crush <= person) {
                    effects.push(
                        SituationUtils.startToDate([person, crush]),
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

    lastChange: number = 0
    static CHANGE_AFTER = 3
    together: boolean = false
    nBreakups = 0
    nMakeups = 0
    danBustedMessageFired = false

    constructor(a: HumanName, b: HumanName) {
        this.a = a
        this.b = b
    }

    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let relationships = currentState.getMutualRelationshipsBetween(this.a, this.b)

        if (!relationships.includes(RelationshipTag.ex) && !relationships.includes(RelationshipTag.lover)) {
            // Not triggered yet
            return []
        }

        const togetherNow = relationships.includes(RelationshipTag.lover)

        if (tripCount > 0 && this.together != togetherNow) {
            // Something has changed externally
            this.lastChange = tripCount
            this.together = togetherNow
            return []
        }

        this.together = togetherNow

        if (this.lastChange + EternalCouple.CHANGE_AFTER <= tripCount) {
            this.lastChange = tripCount

            let effect: SituationEffect
            let description: string
            let wrapperIndex: number

            if (!this.together) {
                effect = SituationUtils.startToDate([this.a, this.b])
                description = `${this.a} and ${this.b} started dating`
                wrapperIndex = this.nMakeups
                this.nMakeups++
            } else {
                effect = SituationUtils.breakUp([this.a, this.b])
                description = `${this.a} and ${this.b} broke up`
                wrapperIndex = this.nBreakups
                this.nBreakups++
            }
            const wrappedDescriptions = [
                `${description}.`,
                `${description} again.`,
                `You won't believe this: ${description} again.`,
                `${description}, yet again.`,
                `${description}, to nobody's surprise.`,
            ]

            if (!this.danBustedMessageFired && currentState.getHumTags(HumanName.Dan).has(HumanTag.dan_busted)) {
                this.danBustedMessageFired = true
                effect.setDescription(
                    "What? Even after Dan's shenanigans," +
                    " it seems that Flavie forgave him and they got back together...!?",
                )
            } else {
                wrapperIndex = Math.min(wrapperIndex, wrappedDescriptions.length - 1)
                effect.setDescription(wrappedDescriptions[wrapperIndex])
            }

            return [effect]
        } else {
            return []
        }
    }
}

export class Complex implements Situation {
    public humReq: Array<HumanName> = Array()
    public humBan: Array<HumanName> = Array()
    public allowedLocations: Array<LocationName> = Array()

    public humTagsReq: Array<[HumanName, HumanTag]> = Array()
    public humTagsBan: Array<[HumanName, HumanTag]> = Array()

    public relTagsReq: Array<[Couple, RelationshipTag]> = Array()
    public relTagsBan: Array<[Couple, RelationshipTag]> = Array()

    public effects: Array<SituationEffect> = Array()
    public processEffects?: (trip: TripSummary, currentState: PeopleGraph, baseEffects: Array<SituationEffect>) => Array<SituationEffect>

    constructor(
        fields?: {
            humReq?: Array<HumanName>, humBan?: Array<HumanName>,
            allowedLocations?: Array<LocationName>,
            humTagsReq?: Array<[HumanName, HumanTag]>, humTagsBan?: Array<[HumanName, HumanTag]>,
            relTagsReq?: Array<[Couple, RelationshipTag]>, relTagsBan?: Array<[Couple, RelationshipTag]>,
            effects?: Array<SituationEffect>,
            processEffects?: (trip: TripSummary, currentState: PeopleGraph, baseEffects: Array<SituationEffect>) => Array<SituationEffect>
        }) {
        if (fields) Object.assign(this, fields)
    }

    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        return this.isApplicable(trip, currentState)
            ? this.processEffects ? this.processEffects(trip, currentState, this.effects) : this.effects
            : new Array()
    }

    public isApplicable(trip: TripSummary, currentState: PeopleGraph): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        // If no locations are set, this means all locations are allowed
        let locationOk = (this.allowedLocations.length === 0)
            || this.allowedLocations.some(loc => loc == trip.goLocation)

        return locationOk &&
            this.humReq.every(hp => namesPresent.includes(hp)) &&
            this.humBan.every(cp => !namesPresent.includes(cp)) &&

            this.humTagsReq.every(hr => currentState.getHumTags(hr[0]).has(hr[1])) &&
            this.humTagsBan.every(br => !currentState.getHumTags(br[0]).has(br[1])) &&

            this.relTagsReq.every(rr => currentState.getRelTags(rr[0]).has(rr[1])) &&
            this.relTagsBan.every(br => !currentState.getRelTags(br[0]).has(br[1]))
    }
}

export class Sympathies implements Situation {
    static LIKE_CHANGE = +1
    static DISLIKE_CHANGE = -1

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let effect = new SituationEffect()

        for (const r of currentState.getAllRelationships()) {
            // Both parties must be present
            if (r.people.every(p => trip.goPeople.map(q => q.name).includes(p))) {
                if (r.tags.has(RelationshipTag.like)) {
                    effect.changeFondness([[r.people, Sympathies.LIKE_CHANGE]])
                }
                if (r.tags.has(RelationshipTag.dislike)) {
                    effect.changeFondness([[r.people, Sympathies.DISLIKE_CHANGE]])
                }
            }
        }
        return [effect]
    }
}

export class UpdateFondnessBasedTags implements Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let effect = new SituationEffect()
        let otherEffects = []

        for (const a of currentState.getHumanNames()) {
            for (const b of currentState.getHumanNames()) {
                if (a == b) continue
                const fondness = currentState.getFondness([a, b])
                const mutualRelationships = currentState.getMutualRelationshipsBetween(a, b)
                const relationships = currentState.getRelationshipsBetween(a, b)
                if (fondness >= 5 && relationships.includes(RelationshipTag.crushable)) {
                    effect.addRelTags([
                        [[a, b], RelationshipTag.crush],
                    ])
                } else {
                    effect.removeRelTags([
                        [[a, b], RelationshipTag.crush],
                    ])
                    if (a < b && mutualRelationships.includes(RelationshipTag.lover)) {
                        otherEffects.push(SituationUtils.breakUp([a, b]))
                    }
                }
            }

        }

        otherEffects.push(effect)
        return otherEffects
    }
}

export class BeatriceBreakups implements Situation {
    static BREAK_UP_AFTER = 3

    relationshipLength = -1
    lover: HumanName | null = null

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        const lovers = SituationUtils.getLovers(HumanName.Beatrice, currentState)
        const newLover = lovers.length == 0 ? null : lovers[0]

        if (this.lover !== newLover) {
            this.relationshipLength = -1
            this.lover = newLover
        } else {
            this.relationshipLength++
            console.assert(lovers.length <= 1)
        }

        if (this.relationshipLength >= BeatriceBreakups.BREAK_UP_AFTER) {
            return [
                SituationUtils.breakUp([HumanName.Beatrice, lovers[0]]).setDescription(
                    `Oh no... Beatrice got into a big fight with ${lovers[0]}, and they broke up.`,
                ),
            ]
        } else {
            return []
        }
    }
}

export class AlexAndBeatriceGetDrunk implements Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        const peoplePresent = trip.goPeople.map(p => p.name)
        if (!SituationUtils.subset([HumanName.Alex, HumanName.Beatrice], peoplePresent)) {
            return []
        }
        if (trip.goLocation != LocationName.Drink) {
            return []
        }

        // Beatrice must be single, but it's sufficient for Alex's lover not to be present
        if (SituationUtils.getLovers(HumanName.Beatrice, currentState).length > 0) {
            return []
        }
        let alexLoverOnTrip = SituationUtils.getSomeoneOnTripWithTag(trip, HumanName.Alex, currentState, RelationshipTag.lover)
        if (alexLoverOnTrip) {
            return []
        }

        if (!currentState.getMutualRelationshipsBetween(HumanName.Alex, HumanName.Beatrice)
            .includes(RelationshipTag.crush)) {
            return []
        }

        let alexLovers = SituationUtils.getLovers(HumanName.Alex, currentState)

        if (alexLovers.length === 0) {
            // Alex is single
            return [
                SituationUtils.startToDate([HumanName.Alex, HumanName.Beatrice])
                    .setDescription("Encouraged by alcohol, Alex and Beatrice revealed their true feelings towards"
                        + " one another! After going home together at the night out with you, they started dating."),
            ]
        } else {
            // Alex has a lover
            const lover = alexLovers[0]
            return [
                SituationUtils.breakUp([HumanName.Alex, lover])
                    .setDescription(`Encouraged by alcohol, Alex cheated on ${lover} with Beatrice.` +
                        ` ${lover} found out and broke up with Alex.`)
                    .changeFondness([
                        [[lover, HumanName.Alex], -2],
                        [[lover, HumanName.Beatrice], -4],
                        [[lover, HumanName.You], -3],
                    ])
                    .removeRelTags([
                        [[HumanName.Alex, HumanName.Beatrice], RelationshipTag.crushable],
                        [[HumanName.Beatrice, HumanName.Alex], RelationshipTag.crushable],
                    ])
                    .addRelTags([
                        [[lover, HumanName.Beatrice], RelationshipTag.dislike],
                    ])
            ]
        }

        return []
    }
}
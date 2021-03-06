import { Situation, SituationEffect } from "../model/situation"
import { TripSummary } from "../model/tripSummary"
import { Couple, PeopleGraph } from "../model/peopleGraph"
import { HumanTag, RelationshipTag } from "./entityTags"
import { HumanName } from "./humans"
import { LocationName } from "./locations"
import { Human, HumanUtils } from "../model/human"


export class SituationUtils {

    public static startToDate(couple: Couple): SituationEffect {
        const [a, b] = couple
        return this.changeRelationship(
            couple,
            [RelationshipTag.lover],
            [RelationshipTag.crush, RelationshipTag.ex],
            +10,
        ).setDescription([`After having fun at the night out, ${a} and ${b} started dating.`,
            `${a} and ${b} seemed to have a good time together at the party and ended up getting together.`,
            `Everybody saw it coming - ${a} and ${b} got together.`,
            `After checking each other out for some time, ${a} and ${b} finally became a couple.`,
            `After ${a} and ${b} finally confessed their feelings, they started dating.`,
            `What if ${a} and ${b} started dating, that'd be so weird? Haha, just kidding... unless? Oh, it just happened.`])
    }

    public static breakUp(couple: Couple): SituationEffect {
        const [a, b] = couple
        return this.changeRelationship(
            couple,
            [RelationshipTag.ex],
            [RelationshipTag.lover],
            -6,
        ).setDescription([`${a} and ${b} broke up!`,
            `${a} and ${b}'s relationship seemed rough lately, and now it finally came to an end.`,
            `After some stress ${a} and ${b} separated and are no longer together.`,
            `As all things do, even ${a} and ${b}'s dating era came to an end...`])
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

    public static isSingle(person: HumanName, currentState: PeopleGraph): boolean {
        return this.getLovers(person, currentState).length == 0
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
            return []
        }

        let effects = new Array()

        trip.goPeople.forEach(person => {
            let personTags = currentState.getHumTags(person.name)
            if (personTags.has(HumanTag.angry_drunk)) {
                let desc = ""
                if (trip.goPeople.length > 2) {
                    desc = `${person.name} got drunk and angry; the others weren't happy about that.`
                } else {
                    desc = `${person.name} got drunk and angry, but you're used to it at this point.`
                }
                let effect = new SituationEffect()
                    .setDescription(desc)

                trip.goPeople.filter(p => p != person).forEach(otherPerson => {
                    effect.changeFondness([[[otherPerson.name, person.name], -1]])
                })

                effects.push(effect)
            }
        })
        return effects
    }
}

export class MutualCrush implements Situation {
    static MIN_DATING_FONDNESS = 7

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
                if (currentState.getFondness([person, crush]) < MutualCrush.MIN_DATING_FONDNESS
                    || currentState.getFondness([crush, person]) < MutualCrush.MIN_DATING_FONDNESS) {
                    continue
                }
                if (currentState.getMutualRelationshipsBetween(person, crush)
                    .includes(RelationshipTag.disable_mutual_crush_dating)) {
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
    always: HumanName
    onlyWhenNotInOtherRel: HumanName

    lastChange: number = 0
    static CHANGE_AFTER = 3
    together: boolean = false
    nBreakups = 0
    nMakeups = 0
    danBustedMessageFired = false

    constructor(always: HumanName, onlyWhenNotInOtherRel: HumanName) {
        this.always = always
        this.onlyWhenNotInOtherRel = onlyWhenNotInOtherRel
    }

    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let relationships = currentState.getMutualRelationshipsBetween(this.always, this.onlyWhenNotInOtherRel)

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
                if (currentState.getOutRelationshipsOfType(this.onlyWhenNotInOtherRel, RelationshipTag.lover).length > 0) {
                    // is in relationship -> not getting back togther
                    // Something has changed externally
                    this.lastChange = tripCount
                    this.together = togetherNow
                    return []
                }

                effect = SituationUtils.startToDate([this.always, this.onlyWhenNotInOtherRel])
                description = `${this.always} and ${this.onlyWhenNotInOtherRel} started dating`
                wrapperIndex = this.nMakeups
                this.nMakeups++
            } else {
                effect = SituationUtils.breakUp([this.always, this.onlyWhenNotInOtherRel])
                description = `${this.always} and ${this.onlyWhenNotInOtherRel} broke up`
                wrapperIndex = this.nBreakups
                this.nBreakups++
            }
            const wrappedDescriptions = [
                `Have you heard? ${description}.`,
                `Have you heard? ${description} again.`,
                `You won't believe this: ${description} again.`,
                `Oh, by the way: ${description}, yet again.`,
                `Oh, by the way: ${description}, to nobody's surprise.`,
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

export class GoodCompany implements Situation {

    static BAD_FONDNESS = 3
    static GOOD_FONDNESS = 7

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let fondnessChange = new Array<[Couple, number]>()
        let goodTimePeople = new Array<HumanName>()
        let badTimePeople = new Array<HumanName>()
        
        for (const a of trip.getNames()) {
            if (a == HumanName.You) continue


            let totalChange = 0
            let goodNames = []
            let badNames = []

            for (const b of trip.getNames()) {
                if (a == b) continue
                if (b == HumanName.You) continue

                let curChange = 0
                // if (currentState.getFondness([a, b]) > GoodCompany.GOOD_FONDNESS) {
                //     curChange++
                // }
                if (currentState.getFondness([a, b]) <= GoodCompany.BAD_FONDNESS) {
                    curChange--
                }
                // if (currentState.getRelationshipsBetween(a, b).includes(RelationshipTag.like)) {
                //     curChange++
                // }
                if (currentState.getRelationshipsBetween(a, b).includes(RelationshipTag.dislike)) {
                    curChange--
                }

                // Maybe clamp curChange between -1 and 1?
                totalChange += curChange * 2
                if (curChange > 0) {
                    goodNames.push(b)
                }
                if (curChange < 0) {
                    badNames.push(b)
                }
            }
            if (totalChange === 0) continue

            totalChange = Math.max(totalChange, -4)
            fondnessChange.push([[a, HumanName.You], totalChange])

            // TODO: specify the person they were happy/unhappy about, if it's just one person
            if (totalChange < 0) {
                badTimePeople.push(a)
            } else {
                goodTimePeople.push(a)
            }
        }
        let effects = Array<SituationEffect>()

        if (fondnessChange.length > 0) {
            effects.push(new SituationEffect().changeFondness(fondnessChange))
        }
        if (badTimePeople.length > 0) {
            const peopleString = HumanUtils.peopleToString(badTimePeople)
            effects.push(
                new SituationEffect()
                    .setDescription(`${peopleString} ${goodTimePeople.length <= 1 ? "wasn't" : "weren't"} happy about who you invited.`)
            )
        }

        // TODO: good are currently unused (on purpose, so that the game is harder)
        if (goodTimePeople.length > 0) {
            const peopleString = HumanUtils.peopleToString(goodTimePeople)
            effects.push(
                new SituationEffect()
                    .setDescription(`${peopleString} enjoyed their company.`)
            )

        }
        return effects    
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
                    if (!mutualRelationships.includes(RelationshipTag.lover)) {
                        effect.addRelTags([
                            [[a, b], RelationshipTag.crush],
                        ])
                    }
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
    static BREAK_UP_AFTER = 2

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

        if (this.lover != null && this.relationshipLength >= BeatriceBreakups.BREAK_UP_AFTER) {
            return [
                SituationUtils.breakUp([HumanName.Beatrice, lovers[0]]).setDescription(
                    `Oh no... Beatrice got into a big fight with ${lovers[0]}, and they broke up.`
                    + ` She's been looking really depressed since...`,
                ).addHumTags([[HumanName.Beatrice, HumanTag.depressed]]),
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
                        [[HumanName.Alex, HumanName.Beatrice], RelationshipTag.awkawardness],
                        [[HumanName.Beatrice, HumanName.Alex], RelationshipTag.awkawardness],
                    ]),
            ]
        }

        return []
    }
}

export class EricVSAAndB implements Situation {
    private state: "init" | "abDating" | "cecilCrush" | "done" = "init"
    private abVisibleStartedDating = 0

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        if (this.state == "init") {

            if (trip.allPresent(HumanName.Alex, HumanName.Beatrice, HumanName.Eric) &&
                currentState.haveMutualRelationshipTag(HumanName.Alex, HumanName.Beatrice, RelationshipTag.lover)) {
                this.abVisibleStartedDating = tripCount
                this.state = "abDating"
                return [new SituationEffect()
                    .setDescription("Eric said something about Alex's and Beatrice's relationship being unnatural and stormed off.")
                    .changeFondness([
                        [[HumanName.Eric, HumanName.Alex], -2],
                        [[HumanName.Eric, HumanName.Beatrice], -2],
                        [[HumanName.Beatrice, HumanName.Eric], -2],
                        [[HumanName.Alex, HumanName.Eric], -2],
                    ])
                    .addRelTags([
                        [[HumanName.Eric, HumanName.Alex], RelationshipTag.dislike],
                        [[HumanName.Eric, HumanName.Beatrice], RelationshipTag.dislike],
                    ]),
                ]
            }
        } else if (this.state == "abDating" && tripCount >= 2 + this.abVisibleStartedDating) {
            if (trip.allPresent(HumanName.Eric, HumanName.Cecil) &&
                currentState.getFondness([HumanName.Eric, HumanName.Cecil]) > 3 && currentState.getFondness([HumanName.Cecil, HumanName.Eric]) > 4) {
                this.state = "cecilCrush"
                return [new SituationEffect()
                    .setDescription("Eric and Cecil seem awfully close, for how harsh Eric was towards Alex and Beatrice...")
                    .addRelTags([
                        [[HumanName.Eric, HumanName.Cecil], RelationshipTag.crushable],
                        [[HumanName.Cecil, HumanName.Eric], RelationshipTag.crushable],
                    ])
                    .changeFondness([
                        [[HumanName.Eric, HumanName.Cecil], 4],
                        [[HumanName.Cecil, HumanName.Eric], 4],
                    ])
                ]
            }
        } else if (this.state == "cecilCrush" && tripCount >= 2 + this.abVisibleStartedDating) {
            if (currentState.haveMutualRelationshipTag(HumanName.Eric, HumanName.Cecil, RelationshipTag.lover)) {
                this.state = "done"
                return [new SituationEffect()
                    .setDescription("Oh! Eric must have been repressing these feelings for a while. Now that he's dating Cecil he went to apologize to Alex and Beatrice...")
                    .changeFondness([
                        [[HumanName.Eric, HumanName.Alex], 2],
                        [[HumanName.Eric, HumanName.Beatrice], 2],
                        [[HumanName.Beatrice, HumanName.Eric], 2],
                        [[HumanName.Alex, HumanName.Eric], 2],
                    ])
                    .removeRelTags([
                        [[HumanName.Eric, HumanName.Alex], RelationshipTag.dislike],
                        [[HumanName.Eric, HumanName.Beatrice], RelationshipTag.dislike],
                    ]),
                ]
            }
        }
        return []
    }
}

export class CecilCrushConundrum implements Situation {
    private flavieAndDanBreakupCounter = 0
    private togetherWas = false
    private triggered = false

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let relationships = currentState.getMutualRelationshipsBetween(HumanName.Dan, HumanName.Flavie)
        const togetherNow = relationships.includes(RelationshipTag.lover)

        if (togetherNow === false && this.togetherWas === true) {
            this.flavieAndDanBreakupCounter += 1
        }

        if (!this.triggered &&
            this.flavieAndDanBreakupCounter >= 2 &&
            currentState.getFondness([HumanName.Flavie, HumanName.Cecil]) > 5 &&
            currentState.getOutRelationshipsOfType(HumanName.Flavie, RelationshipTag.lover)) {
            this.triggered = true
            return [new SituationEffect()
                .setDescription("Flavie is starting to see that Cecil might be right for her after all!")
                .changeFondness([[[HumanName.Flavie, HumanName.Cecil], 2]])
                .addRelTags([
                    [[HumanName.Flavie, HumanName.Cecil], RelationshipTag.crushable],
                ]),
            ]
        }

        this.togetherWas = togetherNow

        return []
    }
}


export class AlexAndCecil implements Situation {
    fired = false

    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        if (this.fired) return []
        const a = HumanName.Alex
        const c = HumanName.Cecil

        if (trip.allAbsent(a, c)
            && currentState.getFondness([a, c]) >= 7
            && currentState.getFondness([c, a]) >= 7
            && SituationUtils.isSingle(a, currentState)
            && SituationUtils.isSingle(c, currentState)) {
            this.fired = true
            return [SituationUtils.startToDate([a, c])
                .setDescription("While you were out with other people, Alex started dating Cecil,"
                    + " since they found out they enjoy each others' company so much.")]
        } else {
            return []
        }
    }
}

export class Depression implements Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        let effect = new SituationEffect()

        for (const a of currentState.getHumanNames()) {
            if (currentState.getHumTags(a).has(HumanTag.depressed)) {
                if (!SituationUtils.isSingle(a, currentState)) {
                    // Having a lover removes depression
                    effect.removeHumTags([[a, HumanTag.depressed]])

                } else {
                    for (const b of currentState.getHumanNames()) {
                        if (a == b) continue
                        effect.changeFondness([[[a, b], -1]])
                    }
                    // TODO: this is bad if multiple people have the tag, we assume it's just Beatrice
                    effect.setDescription(`${a} is depressed... if only a friend of hers could comfort her...`)
                }
            }
        }

        return [effect]
    }
}

export class LeftOutWithoutCrush implements Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): Array<SituationEffect> {
        for (const h of currentState.getHumanNames()) {
            if (!trip.allPresent(h) &&
                currentState.getOutRelationshipsOfType(h, RelationshipTag.crush).length > 0 &&
                currentState.getOutRelationshipsOfType(h, RelationshipTag.crush).every(rel => trip.allPresent(rel.people[1]))) {
2
                return [new SituationEffect().changeFondness([[[h, HumanName.You], -1]])]
            }
        }

        return []
    }
}

export class ExtrovertsIntroverts implements Situation {
    GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph, tripCount: number): SituationEffect[] {
        let results = new Array<SituationEffect>()
        if (trip.goPeople.length > 4) {
            results.push(this.effectDoesntLike(HumanTag.introvert, trip, currentState, "so many"))
        }
        if (trip.goPeople.length <= 4) {
            results.push(this.effectDoesntLike(HumanTag.extrovert, trip, currentState, "this few"))
        }

        return results
    }

    private effectDoesntLike(tag: HumanTag.introvert | HumanTag.extrovert, trip: TripSummary, currentState: PeopleGraph, msg: string) {

        let relevantPeople = trip.goPeople.filter(per => currentState.getHumTags(per.name).has(tag))
        if (tag == HumanTag.extrovert) {
            relevantPeople = relevantPeople.filter(per => {
                return !trip.goPeople.some(pPer => 
                    (pPer.name != per.name) && 
                    (
                        currentState.haveMutualRelationshipTag(per.name, pPer.name, RelationshipTag.crush) || 
                        currentState.haveMutualRelationshipTag(per.name, pPer.name, RelationshipTag.lover)
                    )
                    )
            })
        }

        if (relevantPeople.length <= 0) {
            return new SituationEffect()
        }

        let fondnessChanges = relevantPeople.map(rel => [[rel.name, HumanName.You], -3]) as Array<[Couple, number]>
        let sitEffect = new SituationEffect()
            .changeFondness(fondnessChanges)
            .setDescription(`${HumanUtils.peopleToString(relevantPeople.map(p => p.name))} `
                + `${relevantPeople.length > 1 ? "weren't" : "wasn't"} too happy to hang out with `
                + `${tag == HumanTag.introvert ? "this many" : "this few"} people.`)
        return sitEffect
    }

}


import { HumanName } from "./human"
import { Situation, SituationEffect } from "./hateGraph"
import { TripSummary } from "../management/tripsummary"
import { CoupleKey, PeopleGraph } from "./peopleGraph"
import { Location } from "./location"
import { HumanTag, RelationshipTag } from "./entityTags"


export class SimpleSituation implements Situation {
    private haveToBePresent: Array<HumanName>
    private cannotBePresent: Array<HumanName>
    private allowedLocations: Array<Location>

    public effect: Array<SituationEffect>

    constructor(
        haveToBePresent: Array<HumanName>,
        cannotBePresent: Array<HumanName>,
        allowedLocations: Array<Location>,
        effect: Array<SituationEffect>
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
        if (trip.goLocation!.name != "Drink") {
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
                            [[otherPerson.name, person.name], RelationshipTag.dislike]
                        ]
                    ))
                });

            }
        });
        return effects
    }   
}

export class MutualCrush implements Situation {
    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        // I know this is _terribly_ inefficient :(
        let effects = new Array()

        trip.goPeople.forEach(person => {
            let personsRelationshipsOut = currentState.getOutRelationships(person.name)
            let personalRelationshipsIn = currentState.getInRelationships(person.name)
            personsRelationshipsOut.filter(outRel => outRel.tags.has(RelationshipTag.crush)).forEach(outRelCrush => {
                if (personalRelationshipsIn.filter(inRel => inRel.people[0] == outRelCrush.people[1] && inRel.tags.has(RelationshipTag.crush))) {
                    effects.push(
                        new SituationEffect(
                            "Nobody likes drunk people",
                            [
                                // Could add utils for these repetitive things e.g. reflexivity
                                [[person.name, outRelCrush.people[1]], RelationshipTag.lover],
                                [[outRelCrush.people[1], person.name], RelationshipTag.lover]
                            ],
                            [
                                [[person.name, outRelCrush.people[1]], RelationshipTag.crush],
                                [[outRelCrush.people[1], person.name], RelationshipTag.crush]
                            ],
                            [
                                [person.name, HumanTag.jealous],
                                [outRelCrush.people[1], HumanTag.jealous]
                            ],
                        )
                    )
                }
                
            });
        })

        return effects
    }
}

export class Complex implements Situation {
    private humReq: Array<HumanName>
    private humBan: Array<HumanName>
    private allowedLocations: Array<Location>

    private humTagsReq: Array<[HumanName, HumanTag]>
    private humTagsBan: Array<[HumanName, HumanTag]>

    private relTagsReq: Array<[CoupleKey, RelationshipTag]>
    private relTagsBan: Array<[CoupleKey, RelationshipTag]>

    public effect: Array<SituationEffect>

    constructor(
        haveToBePresent: Array<HumanName>, cannotBePresent: Array<HumanName>,
        allowedLocations: Array<Location>,
        humTagsReq: Array<[HumanName, HumanTag]>, humTagsBan: Array<[HumanName, HumanTag]>,
        relTagsReq: Array<[CoupleKey, RelationshipTag]>, relTagsBan: Array<[CoupleKey, RelationshipTag]>,
        effect: Array<SituationEffect>
    ) {

        this.humReq = haveToBePresent
        this.humBan = cannotBePresent
        this.allowedLocations = allowedLocations

        this.humTagsReq = humTagsReq
        this.humTagsBan = humTagsBan
        this.relTagsReq = relTagsReq
        this.relTagsBan = relTagsBan

        this.effect = effect
    }

    public GetApplicableEffects(trip: TripSummary, currentState: PeopleGraph): Array<SituationEffect> {
        return this.isApplicable(trip, currentState) ? this.effect : new Array()
    }

    public isApplicable(trip: TripSummary, currentState: PeopleGraph): boolean {
        let namesPresent = trip.goPeople.map(p => p.name)

        return this.humReq.every(hp => namesPresent.includes(hp)) &&
            this.humBan.every(cp => !namesPresent.includes(cp)) &&
            this.allowedLocations.some(loc => loc.name == trip.goLocation?.name) &&

            this.humTagsReq.every(hr => currentState.getHumTags(hr[0]).has(hr[1])) &&
            this.humTagsBan.every(br => !currentState.getHumTags(br[0]).has(br[1])) &&

            this.relTagsReq.every(rr => currentState.getRelTags(rr[0]).has(rr[1])) &&
            this.relTagsReq.every(br => !currentState.getRelTags(br[0]).has(br[1]))
    }
}
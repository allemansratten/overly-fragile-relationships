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
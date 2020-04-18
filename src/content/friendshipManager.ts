import { HateGraph, Situation, SituationEffect } from "./hateGraph";
import { PeopleGraph } from "./peopleGraph";
import { TripSummary } from "../management/tripsummary";

export class FriendshipManager {
    public hateGraph: HateGraph
    public peopleGraph: PeopleGraph

    constructor(hateGraph: HateGraph, peopleGraph: PeopleGraph) {
        this.hateGraph = hateGraph
        this.peopleGraph = peopleGraph
    }

    public applyMeeting(trip: TripSummary): Array<SituationEffect> {
        let appliedEffects = new Array<SituationEffect>()

        this.hateGraph.constraints.forEach(con => {
            const appEffForCurrCon = this.tryApplyConstraint(con, trip);  // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon);

        });
        return appliedEffects
    }

    private tryApplyConstraint(con: Situation, trip: TripSummary): Array<SituationEffect> {
        let applicableEffects = con.GetApplicableEffects(trip);

        applicableEffects.forEach(eff => {
            eff.addedRelTags.forEach(at => this.peopleGraph.addRelTag(eff.people, at))
            eff.removedRelTags.forEach(at => this.peopleGraph.removeRelTag(eff.people, at))

            eff.addedHumTags[0].forEach(ah0 => this.peopleGraph.addHumTag(eff.people[0], ah0))
            eff.addedHumTags[1].forEach(ah1 => this.peopleGraph.addHumTag(eff.people[1], ah1))

            eff.removedHumTags[0].forEach(rh0 => this.peopleGraph.removeHumTag(eff.people[0], rh0))
            eff.removedHumTags[1].forEach(rh1 => this.peopleGraph.removeHumTag(eff.people[1], rh1))
        });

        return applicableEffects
        
    }
}
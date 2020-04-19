import { HateGraph, Situation, SituationEffect } from "./hateGraph";
import { PeopleGraph } from "./peopleGraph";
import { TripSummary } from "./tripsummary";

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
        let applicableEffects = con.GetApplicableEffects(trip, this.peopleGraph);

        applicableEffects.forEach(eff => {
            eff.addedRelTags.forEach(at => this.peopleGraph.addRelTag(at[0], at[1]))
            eff.removedRelTags.forEach(at => this.peopleGraph.removeRelTag(at[0], at[1]))

            eff.addedHumTags.forEach(ah => this.peopleGraph.addHumTag(ah[0], ah[1]))
            eff.removedHumTags.forEach(rh => this.peopleGraph.removeHumTag(rh[0], rh[1]))
        });

        return applicableEffects
        
    }
}
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
            const appEffForCurrCon = this.tryResolveConstraint(con, trip);  // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon);

        });
        return appliedEffects
    }

    private tryResolveConstraint(con: Situation, trip: TripSummary): Array<SituationEffect> {
        let applicableEffects = con.GetApplicableEffects(trip);

        applicableEffects.forEach(eff => {
            eff.addedRelTags.forEach(at => this.peopleGraph.addRelTag(eff.people, at))
            eff.removedRelTags.forEach(at => this.peopleGraph.removeRelTag(eff.people, at))


            // TODO: Petr: do all updates

        });

        return applicableEffects
        
    }
}
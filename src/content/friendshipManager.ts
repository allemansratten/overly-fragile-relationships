import { HateGraph, Constraint, SituationEffect } from "./hateGraph";
import { PeopleGraph } from "./peopleGraph";
import { Human } from "./human";
import { Location } from "./location"
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

    private tryResolveConstraint(con: Constraint, trip: TripSummary): Array<SituationEffect> {
        let applicableEffects = con.GetApplicableEffects(trip);

        applicableEffects.forEach(eff => {
            eff.addedRelTags.forEach(at => this.peopleGraph.addTag(eff.people, at))
            eff.removedRelTags.forEach(at => this.peopleGraph.removeTag(eff.people, at))


            // TODO: Petr: do all updates

        });

        return applicableEffects
        
    }
}
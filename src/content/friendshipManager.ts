import { HateGraph, Constraint, RelationshipEffect } from "./hateGraph";
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

    public applyMeeting(trip: TripSummary): Array<RelationshipEffect> {
        let appliedEffects = new Array<RelationshipEffect>()

        this.hateGraph.constraints.forEach(con => {
            const appEffForCurrCon = this.tryResolveConstraint(con, trip);  // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon);

        });
        return appliedEffects
    }

    private tryResolveConstraint(con: Constraint, trip: TripSummary): Array<RelationshipEffect> {
        let appliedEffects = new Array<RelationshipEffect>()

        if (con.DoesConstraintApplies(trip)) {
            con.effect.forEach(eff => {
                this.peopleGraph.updateWeight(eff.people, eff.relationshipChange);
                appliedEffects.push(eff)
            });
        }

        return appliedEffects;
    }
}
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

    public ApplyMeeting(trip: TripSummary): Array<RelationshipEffect> {
        let appliedEffects = []

        this.hateGraph.constraints.forEach(con => {
            const appliedEffectsForCurrConstr = this.tryResolveConstrain(con, trip.goPeople, trip.goLocation);
            appliedEffects = appliedEffects.concat(appliedEffectsForCurrConstr);

        });
        return appliedEffects
    }

    private tryResolveConstrain(con: Constraint, peoplePresent: Array<Human>, location: Location): Array<RelationshipEffect> {

        let appliedEffects = []

        if (false){
            // TODO: Figure out how to use debugger with this build system
            console.log(con, peoplePresent, location)
            console.log(con.haveToBePresent.every(hp => peoplePresent.some(pp => pp.name == hp.name)), peoplePresent, location)
            console.log(con.cannotBePresent.every(cp => !peoplePresent.some(pp => pp.name == cp.name)))
            console.log(con.allowedLocations.some(loc => loc.name == location.name))
        }

        if (con.haveToBePresent.every(hp => peoplePresent.some(pp => pp.name == hp.name)) &&
            con.cannotBePresent.every(cp => !peoplePresent.some(pp => pp.name == cp.name)) &&
            con.allowedLocations.some(loc => loc.name == location.name)) {
            con.effect.forEach(eff => {
                this.peopleGraph.updateWeight(eff.people, eff.relationshipChange);
                appliedEffects.push(eff)
            });
        }

        return appliedEffects;
    }
}
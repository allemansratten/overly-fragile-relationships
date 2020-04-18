import { HateGraph, Constrain } from "./hateGraph";
import { PeopleGraph } from "./peopleGraph";
import { Human } from "./human";
import { Location } from "./location"

export class FriendshipManager {
    public hateGraph: HateGraph
    public peopleGraph: PeopleGraph

    constructor(hateGraph: HateGraph, peopleGraph: PeopleGraph) {
        this.hateGraph = hateGraph
        this.peopleGraph = peopleGraph
    }

    public ApplyMeeting(peoplePresent: Array<Human>, location: Location) {
        this.hateGraph.Constrains.forEach(con => {
            this.tryResolveConstrian(con, peoplePresent, location);
        });
    }

    private tryResolveConstrian(con: Constrain, peoplePresent: Array<Human>, location: Location) {
        if (con.HaveToBePresent.every(p => peoplePresent.includes(p)) &&
            con.CannotBePresetn.every(pp => !peoplePresent.includes(pp)) &&
            con.AllowedLocations.includes(location)) {
            con.Effect.forEach(eff => {
                this.peopleGraph.updateWeight(eff.People, eff.RelationshipChange);
            });
        }
    }
}
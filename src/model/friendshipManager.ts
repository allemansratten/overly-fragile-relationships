import { Situation, SituationEffect } from "./situation"
import { PeopleGraph } from "./peopleGraph"
import { TripSummary } from "./tripSummary"

export class FriendshipManager {
    public situations: Situation[]
    public peopleGraph: PeopleGraph

    constructor(situations: Situation[], peopleGraph: PeopleGraph) {
        this.situations = situations
        this.peopleGraph = peopleGraph
    }

    public applyMeeting(trip: TripSummary): Array<SituationEffect> {
        let appliedEffects = new Array<SituationEffect>()

        this.situations.forEach(situation => {
            const appEffForCurrCon = this.tryApplyConstraint(situation, trip)  // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon)
        })
        return appliedEffects
    }

    private tryApplyConstraint(con: Situation, trip: TripSummary): Array<SituationEffect> {
        let applicableEffects = con.GetApplicableEffects(trip, this.peopleGraph)

        applicableEffects.forEach(eff => {
            eff.addedRelTags.forEach(at => this.peopleGraph.addRelTag(at[0], at[1]))
            eff.removedRelTags.forEach(at => this.peopleGraph.removeRelTag(at[0], at[1]))

            eff.addedHumTags.forEach(ah => this.peopleGraph.addHumTag(ah[0], ah[1]))
            eff.removedHumTags.forEach(rh => this.peopleGraph.removeHumTag(rh[0], rh[1]))

            eff.changedFondness.forEach(
                ([couple, change]) =>
                    this.peopleGraph.changeFondness(couple, change),
            )
        })

        return applicableEffects

    }
}
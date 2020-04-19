import { HateGraph, Situation, SituationEffect } from "./hateGraph"
import { PeopleGraph } from "./peopleGraph"
import { TripSummary } from "./tripSummary"

export class FriendshipManager {
    private tripCount: number
    private situationAddCalendar: Map<number, Situation>

    public hateGraph: HateGraph
    public peopleGraph: PeopleGraph

    constructor(hateGraph: HateGraph, peopleGraph: PeopleGraph) {
        this.tripCount = 0
        this.situationAddCalendar = new Map()

        this.hateGraph = hateGraph
        this.peopleGraph = peopleGraph
    }

    public applyMeeting(trip: TripSummary): Array<SituationEffect> {
        // update system with newly added situations
        let newSitForThisMeeting = this.situationAddCalendar.get(this.tripCount) ?? new Array()
        this.hateGraph.constraints.concat(newSitForThisMeeting)

        let appliedEffects = new Array<SituationEffect>()
        this.hateGraph.constraints.forEach(con => {
            const appEffForCurrCon = this.tryApplyConstraint(con, trip)  // We know it's gonna be assigned
            appliedEffects = appliedEffects.concat(appEffForCurrCon)
        })

        this.tripCount += 1
        return appliedEffects
    }

    private tryApplyConstraint(con: Situation, trip: TripSummary): Array<SituationEffect> {
        let applicableEffects = con.GetApplicableEffects(trip, this.peopleGraph, this.tripCount)

        applicableEffects.forEach(eff => {
            eff.addedRelTags.forEach(at => this.peopleGraph.addRelTag(at[0], at[1]))
            eff.removedRelTags.forEach(at => this.peopleGraph.removeRelTag(at[0], at[1]))

            eff.addedHumTags.forEach(ah => this.peopleGraph.addHumTag(ah[0], ah[1]))
            eff.removedHumTags.forEach(rh => this.peopleGraph.removeHumTag(rh[0], rh[1]))

            eff.changedFondness.forEach(
                ([couple, change]) =>
                    this.peopleGraph.changeFondness(couple, change),
            )

            eff.newFutureSituations.forEach(newSit => {
                this.situationAddCalendar.set(newSit[0], newSit[1])
            });
        })

        return applicableEffects

    }
}
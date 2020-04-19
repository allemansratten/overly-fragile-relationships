import { Human, HumanName } from "./human"
import { HumanTag, RelationshipTag, relationshipTagMap } from "../content/entityTags"

type EdgeKey = string
export type CoupleKey = [HumanName, HumanName]

export class PeopleGraph {
    private relationshipTags: Map<EdgeKey, Set<RelationshipTag>>
    private humansTags: Map<HumanName, Set<HumanTag>>

    private oriented: Boolean

    constructor(people: Human[] = [], initialRelationships: Array<Relationship> = [], initialTags: Array<[HumanName, HumanTag]>) {
        this.relationshipTags = new Map()
        this.humansTags = new Map()
        this.oriented = true

        people.forEach(h => {
            people.forEach(hh => {
                if (h.name != hh.name) {
                    this.setRelTags([h.name, hh.name], new Set<RelationshipTag>())
                }
            })
        })

        initialTags.forEach(hTagTuple => {
            let [hName, hTag] = hTagTuple
            this.addHumTag(hName, hTag)
        })

        initialRelationships.forEach(rel => {
            this.setRelTags(rel.people, rel.tags)
        })
    }

    public addHumTag(person: HumanName, tag: HumanTag) {
        let hTags = this.humansTags.get(person) ?? new Set<HumanTag>()
        hTags.add(tag)
        this.humansTags.set(person, hTags)
    }

    public removeHumTag(person: HumanName, tag: HumanTag): boolean {
        return this.humansTags.get(person)?.delete(tag) ?? false
    }

    public getHumTags(person: HumanName): Set<HumanTag> {
        return this.humansTags.get(person) ?? new Set()
    }

    public setRelTags(people: CoupleKey, tags: Set<RelationshipTag>) {
        let graphKey = this.toEdgeKey(people)
        this.relationshipTags.set(graphKey, tags)
    }

    public getRelTags(people: CoupleKey): Set<RelationshipTag> {
        let graphKey = this.toEdgeKey(people)
        return this.relationshipTags.get(graphKey)!
    }

    public addRelTag(people: CoupleKey, tag: RelationshipTag) {
        this.getRelTags(people)?.add(tag)
    }

    public removeRelTag(people: CoupleKey, tag: RelationshipTag): boolean {
        return this.getRelTags(people)?.delete(tag) ?? false
    }

    public getOutRelationships(person: HumanName): Array<Relationship> {
        let result = new Array

        this.relationshipTags.forEach((val, key) => {
            if (key.startsWith(person)) {
                result.push(new Relationship(this.fromEdgeKey(key), val))
            }
        })

        return result
    }

    public getInRelationships(person: HumanName): Array<Relationship> {
        let result = new Array

        this.relationshipTags.forEach((val, key) => {
            if (key.endsWith(person)) {
                result.push(new Relationship(this.fromEdgeKey(key), val))
            }
        })

        return result
    }

    public getRelationshipsBetween(a: HumanName, b: HumanName): Array<RelationshipTag> {
        return Array.from(this.relationshipTags.get(this.toEdgeKey([a, b])) ?? [])
    }

    public getMutualRelationshipsBetween(a: HumanName, b: HumanName): Array<RelationshipTag> {
        let ab = this.getRelationshipsBetween(a, b)
        let ba = this.getRelationshipsBetween(a, b)

        return intersection(ab, ba)
    }

    public getAllRelationships(): Relationship[] {
        let res = new Array

        this.relationshipTags.forEach((tags, edgeKey) => {
            const couple = this.fromEdgeKey(edgeKey)
            res.push(new Relationship(couple, tags))
        })

        return res
    }

    private toEdgeKey(unorderedPair: CoupleKey): EdgeKey {
        let [a, b] = unorderedPair
        let orderedPair = a <= b || this.oriented ? [a, b] : [b, a]

        return orderedPair.join('|')
    }

    private fromEdgeKey(key: EdgeKey): CoupleKey {
        let names = key.split('|')
        console.assert(names.length == 2)

        return [names[0], names[1]]
    }
}

export class Relationship {
    people: CoupleKey
    tags: Set<RelationshipTag>

    constructor(people: CoupleKey, tags?: Set<RelationshipTag>) {
        this.people = people
        this.tags = tags ?? new Set<RelationshipTag>()
    }

    public toString(): string {
        return `${this.people[1]}: ${Array.from(this.tags).map((x) => relationshipTagMap.get(x) ?? "?").join(', ')}`
    }
}

export function intersection<T>(as: T[], bs: T[]): T[] {
    let res = new Array

    for (const a of as) {
        if (bs.includes(a)) {
            res.push(a)
        }
    }

    return res
}
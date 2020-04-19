import { HateGraph } from "../model/hateGraph"
import { Level } from "../model/level"
import { Relationship } from "../model/peopleGraph"
import { Human } from "../model/human"
import { HumanTag, RelationshipTag } from "./entityTags"
import { EternalCouple, MutualCrush, NobodyLikesAngryDrunk, TimerSituation } from "../model/situationTypes"
import { HumanName } from "./humans"
import { LocationName } from "./locations"
import { Location } from "../model/location"

export let levels: Array<Level> = []

let locations: Location[] = [
    {name: LocationName.Bowling, limit: {min: 2, max: 5}},
    {name: LocationName.Drink, limit: {min: 2, max: 4}},
    {name: LocationName.Park, limit: {min: 2, max: 6}},
    {name: LocationName.Movie, limit: {min: 2, max: 6}},
]

// You is always on the zeroth position

function mutualRelationship(people: [HumanName, HumanName], tags: RelationshipTag[]): [Relationship, Relationship] {
    const tagSet = new Set(tags)
    const [a, b] = people

    return [
        new Relationship([a, b], tagSet),
        new Relationship([b, a], tagSet),
    ]
}

function flattenRelationshipList(relationships: Array<Relationship | [Relationship, Relationship]>) {
    let res = []

    for (const r of relationships) {
        if (r instanceof Relationship) {
            res.push(r)
        } else {
            const [ra, rb] = r
            res.push(ra, rb)
        }
    }

    return res
}

levels.push(
    new Level(
        [
            new Human(HumanName.You),
            new Human(HumanName.Alex),
            new Human(HumanName.Beatrice),
            new Human(HumanName.Cecil),
            new Human(HumanName.Dan),
            new Human(HumanName.Eric),
            new Human(HumanName.Flavie),
        ],
        locations,
        flattenRelationshipList([
            mutualRelationship([HumanName.Alex, HumanName.Beatrice], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Alex, HumanName.Cecil], [RelationshipTag.crush]),
            new Relationship([HumanName.Dan, HumanName.Beatrice], new Set([RelationshipTag.ex, RelationshipTag.crush])),
            new Relationship([HumanName.Dan, HumanName.You], new Set([RelationshipTag.ex])),
            mutualRelationship([HumanName.Eric, HumanName.Alex], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Eric, HumanName.Beatrice], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Dan, HumanName.Flavie], [RelationshipTag.eternal_couple_apart_1]),
        ]),
        [
            [HumanName.Beatrice, HumanTag.promiscuous],
            [HumanName.Cecil, HumanTag.introvert],
            [HumanName.Dan, HumanTag.extrovert],
            [HumanName.Dan, HumanTag.angry_drunk],
        ]
        ,
        new HateGraph([
            new TimerSituation(),
            new NobodyLikesAngryDrunk(),
            new MutualCrush(),
            new EternalCouple(HumanName.Dan, HumanName.Flavie),
        ]),
    ),
)
import { HateGraph } from "../model/hateGraph"
import { Level } from "../model/level"
import { Relationship } from "../model/peopleGraph"
import { Human } from "../model/human"
import { HumanTag, RelationshipTag } from "./entityTags"
import { MutualCrush, NobodyLikesAngryDrunk, TimerSituation } from "../model/situationTypes"
import { HumanName } from "./humans" 

export let levels: Array<Level> = []

let locations = [
    {name: 'Bowling', limit: {min: 2, max: 5}},
    {name: 'Drink', limit: {min: 2, max: 4}},
    {name: 'Forest', limit: {min: 2, max: 6}},
    {name: 'Movie', limit: {min: 2, max: 6}},
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
            new Relationship([HumanName.Dan, HumanName.Beatrice], new Set([RelationshipTag.ex])),
            new Relationship([HumanName.Dan, HumanName.You], new Set([RelationshipTag.ex])),
            mutualRelationship([HumanName.Eric, HumanName.Alex], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Eric, HumanName.Beatrice], [RelationshipTag.crush]),
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
        ]),
    ),
)
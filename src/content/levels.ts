import { HateGraph } from "../model/hateGraph"
import { Level } from "../model/level"
import { Relationship } from "../model/peopleGraph"
import { Human, HumanName } from "../model/human"
import { HumanTag, RelationshipTag } from "./entityTags"
import { Complex, MutualCrush, NobodyLikesAngryDrunk, SituationUtils } from "../model/situationTypes"

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
            new Human('You'),
            new Human('Alex'),
            new Human('Beatrice'),
            new Human('Cecil'),
            new Human('Dan'),
            new Human('Eric'),
        ],
        locations,
        flattenRelationshipList([
            mutualRelationship(['Alex', 'Beatrice'], [RelationshipTag.crush]),
            mutualRelationship(['Alex', 'Cecil'], [RelationshipTag.crush]),
            new Relationship(['Dan', 'Beatrice'], new Set([RelationshipTag.ex])),
            new Relationship(['Dan', 'You'], new Set([RelationshipTag.ex])),
            mutualRelationship(['Eric', 'Alex'], [RelationshipTag.crush]),
            mutualRelationship(['Eric', 'Beatrice'], [RelationshipTag.crush]),
        ]),
        [
            ['Beatrice', HumanTag.promiscuous],
            ['Cecil', HumanTag.introvert],
            ['Dan', HumanTag.extrovert],
            ['Dan', HumanTag.angry_drunk],
        ]
        ,
        new HateGraph([
            new NobodyLikesAngryDrunk(),
            new MutualCrush(),
        ]),
    ),
)
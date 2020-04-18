import { HateGraph, SimpleSituation } from "./hateGraph"
import { Level } from "./level"
import { RelationshipTag, Relationship } from "./peopleGraph"
import { Human, HumanTag } from "./human"

export let levels: Array<Level> = []

let locations = [
    { name: 'Bowling', limit: { min: 2, max: 5 } },
    { name: 'Drink', limit: { min: 2, max: 4 } },
    { name: 'Forest', limit: { min: 2, max: 6 } },
    { name: 'Movie', limit: { min: 2, max: 6 } },
]

// You is always on the zeroth position

levels.push(
    new Level(
        [
            new Human('You'),
            new Human('Kate'),
            new Human('Lucian'),
            new Human('Matthew'),
        ],
        locations,
        [
            new Relationship(['Kate', 'Lucian'], new Set(['crush' as RelationshipTag])),
        ],
        new HateGraph([
            new SimpleSituation(
                ['Kate', 'Lucian'],
                ['Matthew'],
                locations,
                [
                    {
                        people: ['Kate', 'Lucian'], 
                        addedRelTags: new Set(['crush' as RelationshipTag]), 
                        addedHumTags: [new Set(['sad when drunk' as HumanTag]), new Set<HumanTag>()],
                        removedRelTags: new Set<RelationshipTag>(),
                        removedHumTags: [new Set<HumanTag>(),new Set<HumanTag>()],
                    },
                ]
            )
            ,
        ]),
    ),
)
import { HateGraph, SimpleSituation, SituationEffect } from "./hateGraph"
import { Level } from "./level"
import { Relationship } from "./peopleGraph"
import { Human } from "./human"
import { HumanTag, RelationshipTag } from "./entityTags"

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
            new Relationship(['Kate', 'Lucian'], new Set([RelationshipTag.friend_like])),
        ],
        [
            ['You', HumanTag.angry_drunk],
            ['Kate', HumanTag.good_bowler],
            ['Lucian', HumanTag.jealous],
            ['Matthew', HumanTag.promiscuous],
            ['Matthew', HumanTag.disagreeable],
            ['Matthew', HumanTag.good_bowler],
            ['Matthew', HumanTag.extrovert],
            ['Matthew', HumanTag.jealous],
            ['Matthew', HumanTag.sad_drunk],
        ]
        ,
        new HateGraph([
            new SimpleSituation(
                ['Kate', 'Lucian'],
                ['Matthew'],
                locations,
                [
                    new SituationEffect(
                        ['Kate', 'Lucian'], 
                        new Set([RelationshipTag.crush]), 
                        undefined, 
                        [new Set([HumanTag.sad_drunk]), new Set<HumanTag>()],
                    ),
                ]
            )
            ,
        ]),
    ),
)
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
            new Human('You', [], new Set([HumanTag.angry_drunk])),
            new Human('Kate', [], new Set([HumanTag.good_bowler])),
            new Human('Lucian', [], new Set([HumanTag.jealous])),
            new Human('Matthew', [], new Set([HumanTag.promiscuous])),
        ],
        locations,
        [
            new Relationship(['Kate', 'Lucian'], new Set([RelationshipTag.friend_like])),
        ],
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
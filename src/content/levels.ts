import { HateGraph, PresenceConstraint } from "./hateGraph"
import { Level } from "./level"
import { RelationshipTag, Relationship } from "./peopleGraph"
import { Human } from "./human"

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
            new Relationship(['Kate', 'Lucian'], new Set([RelationshipTag["like (as a friend)"]])),
        ],
        new HateGraph([
            new PresenceConstraint(
                ['Kate', 'Lucian'],
                ['Matthew'],
                locations,
                [
                    { people: ['Kate', 'Lucian'], relationshipChange: +1 },
                    { people: ['Lucian', 'Kate'], relationshipChange: +1 },
                    { people: ['Matthew', 'Kate'], relationshipChange: -1 },
                ]
            )
            ,
        ]),
    ),
)
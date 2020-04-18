import { HateGraph, PresenceConstraint } from "./hateGraph"
import { Level } from "./level"

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
            {name: 'You', relationships: []},
            {name: 'Kate', relationships: []},
            {name: 'Lucian', relationships: []},
            {name: 'Matthew', relationships: []},
        ],
        locations,
        [
            { people: ['Kate', 'Matthew'], level: -1 },
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
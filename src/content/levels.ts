import { Level } from "../model/level"
import { Relationship } from "../model/peopleGraph"
import { Human } from "../model/human"
import { HumanTag, RelationshipTag } from "./entityTags"
import {
    Complex,
    EternalCouple,
    MutualCrush,
    NobodyLikesAngryDrunk,
    SituationUtils,
    TimerSituation,
} from "../model/situationTypes"
import { HumanName } from "./humans"
import { LocationName } from "./locations"
import { SituationEffect } from "../model/situation"

export let levels: Array<Level> = []

let locations: LocationName[] = [
    LocationName.Bowling,
    LocationName.Drink,
    LocationName.Park,
    LocationName.Movie,
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

const danTwoGirlfriendsBusted = new Complex({
    humReq: [HumanName.Dan, HumanName.Beatrice, HumanName.Flavie],
    relTagsReq: [
        [[HumanName.Dan, HumanName.Beatrice], RelationshipTag.lover], // should be symmetric anyways
        [[HumanName.Dan, HumanName.Flavie], RelationshipTag.lover],
    ],
    effect: [
        SituationUtils.breakUp([HumanName.Dan, HumanName.Beatrice]),
        SituationUtils.breakUp([HumanName.Dan, HumanName.Flavie]),
        new SituationEffect()
            .changeFondness([
                [[HumanName.Dan, HumanName.You], -5],
                [[HumanName.Beatrice, HumanName.Dan], -7],
                [[HumanName.Dan, HumanName.Beatrice], -2],
                [[HumanName.Flavie, HumanName.Dan], -7],
                [[HumanName.Dan, HumanName.Flavie], -2],
                [[HumanName.Flavie, HumanName.Beatrice], +4],
                [[HumanName.Beatrice, HumanName.Flavie], +4],
            ])
            .setDescription("Uh oh... Dan was dating Beatrice and Flavie at the same time," +
                " and now they found out! No more Dan Juan."),
    ],
})

const flavieFomo1 = new Complex({    //Flavie FOMO event 1
    humReq: [HumanName.Alex, HumanName.Beatrice, HumanName.Cecil, HumanName.Dan, HumanName.Eric],
    humTagsBan: [[HumanName.Flavie, HumanTag.flavie_angry]],
    effect: [new SituationEffect().changeFondness([
        [[HumanName.Flavie, HumanName.Alex], -1],
        [[HumanName.Flavie, HumanName.Beatrice], -1],
        [[HumanName.Flavie, HumanName.Cecil], -1],
        [[HumanName.Flavie, HumanName.Dan], -1],
        [[HumanName.Flavie, HumanName.Eric], -1],
        [[HumanName.Flavie, HumanName.You], -3],
    ]).addHumTags([[HumanName.Flavie, HumanTag.flavie_angry]])],
})

const flavieFomo2 = new Complex({    //Flavie FOMO event 2
        humReq: [HumanName.Alex, HumanName.Beatrice, HumanName.Cecil, HumanName.Dan, HumanName.Eric],
        humTagsReq: [[HumanName.Flavie, HumanTag.flavie_angry]],
        effect: [new SituationEffect().changeFondness([[[HumanName.Flavie, HumanName.You], -10]])],
    })

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
            mutualRelationship([HumanName.Eric, HumanName.Alex], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Eric, HumanName.Beatrice], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Dan, HumanName.Beatrice], [RelationshipTag.crush]),
            mutualRelationship([HumanName.Dan, HumanName.Flavie], [RelationshipTag.crush]),
        ]),
        [
            [HumanName.Beatrice, HumanTag.promiscuous],
            [HumanName.Cecil, HumanTag.introvert],
            [HumanName.Dan, HumanTag.extrovert],
            [HumanName.Dan, HumanTag.angry_drunk],
        ]
        ,
        [
            // initial fondness
            [[HumanName.Alex, HumanName.Beatrice], 7],
            [[HumanName.Beatrice, HumanName.Alex], 7],
            [[HumanName.Alex, HumanName.Cecil], 7],
            [[HumanName.Cecil, HumanName.Alex], 7],
        ],
        [
            new TimerSituation(),
            new NobodyLikesAngryDrunk(),
            new MutualCrush(),
            new EternalCouple(HumanName.Dan, HumanName.Flavie),
            flavieFomo2, // 2 must be before 1 (else both happen simultaneously)
            flavieFomo1,
            danTwoGirlfriendsBusted,
        ],
    ),
)        
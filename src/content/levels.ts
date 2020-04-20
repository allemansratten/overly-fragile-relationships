import { Level } from "../model/level"
import { Couple, Relationship } from "../model/peopleGraph"
import { Human } from "../model/human"
import { HumanTag, RelationshipTag } from "./entityTags"
import {
    AlexAndBeatriceGetDrunk,
    BeatriceBreakups,
    Complex,
    EternalCouple,
    MutualCrush,
    NobodyLikesAngryDrunk,
    SituationUtils,
    Sympathies,
    UpdateFondnessBasedTags,
} from "./situations"
import { HumanName } from "./humans"
import { LocationName } from "./locations"
import { SituationEffect } from "../model/situation"

export let levels: Array<Level> = []

let locations: LocationName[] = [
    LocationName.Bowling,
    LocationName.Drink,
    LocationName.Hiking,
]

// You is always on the zeroth position

function mutualRelationship(people: Couple, tags: RelationshipTag[]): [Relationship, Relationship] {
    const tagSet = new Set(tags)
    const [a, b] = people

    return [
        new Relationship([a, b], tagSet),
        new Relationship([b, a], tagSet),
    ]
}

function flatten<T>(arr: Array<T | T[]>): Array<T> {
    let res = []

    for (const a of arr) {
        if (a instanceof Array) {
            res.push(...a)
        } else {
            res.push(a)
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
    effects: [
        SituationUtils.breakUp([HumanName.Dan, HumanName.Beatrice]),
        SituationUtils.breakUp([HumanName.Dan, HumanName.Flavie]),
        new SituationEffect()
            .addHumTags([[HumanName.Dan, HumanTag.dan_busted]])
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
const fragileFlavie1 = new Complex({    //Flavie vs Alex event 1
    humReq: [HumanName.Alex, HumanName.Flavie],
    allowedLocations: [LocationName.Hiking],
    humTagsBan: [[HumanName.Flavie, HumanTag.fragile_flavie_1]],
    effects: [new SituationEffect().changeFondness([
        [[HumanName.Flavie, HumanName.Alex], -3]]).addRelTags([
        [[HumanName.Flavie, HumanName.Alex], RelationshipTag.dislike]])
        .addHumTags([[HumanName.Flavie, HumanTag.fragile_flavie_1]])
        .setDescription('Alex made fun of Flavie\'s vegan snacks, and she got really upset. But Alex makes fun of everybody, right?')],
})
const fragileFlavie2 = new Complex({    //Flavie vs Alex event 2
    humReq: [HumanName.Alex, HumanName.Flavie],
    allowedLocations: [LocationName.Hiking],
    humTagsReq: [[HumanName.Flavie, HumanTag.fragile_flavie_1]],
    humTagsBan: [[HumanName.Flavie, HumanTag.fragile_flavie_2]],
    effects: [new SituationEffect().removeRelTags([[[HumanName.Flavie, HumanName.Alex], RelationshipTag.dislike]])
        .changeFondness([[[HumanName.Flavie, HumanName.Alex], +1]])
        .addHumTags([[HumanName.Flavie, HumanTag.fragile_flavie_2]])
        .setDescription('Alex saw that her comment really hurt Flavie\'s feelings, and apologised. She even brought her a vegan Flapjack.')],
})

const flavieFomo1 = new Complex({    //Flavie FOMO event 1
    humReq: [HumanName.Alex, HumanName.Beatrice, HumanName.Cecil, HumanName.Dan, HumanName.Eric],
    humBan: [HumanName.Flavie],
    humTagsBan: [[HumanName.Flavie, HumanTag.flavie_angry]],
    effects: [new SituationEffect().changeFondness([
        [[HumanName.Flavie, HumanName.Alex], -1],
        [[HumanName.Flavie, HumanName.Beatrice], -1],
        [[HumanName.Flavie, HumanName.Cecil], -1],
        [[HumanName.Flavie, HumanName.Dan], -1],
        [[HumanName.Flavie, HumanName.Eric], -1],
        [[HumanName.Flavie, HumanName.You], -3],
    ]).addHumTags([[HumanName.Flavie, HumanTag.flavie_angry]])
        .setDescription('Flavie is angry that you invited everybody except her.')],
})

const flavieFomo2 = new Complex({    //Flavie FOMO event 2
    humReq: [HumanName.Alex, HumanName.Beatrice, HumanName.Cecil, HumanName.Dan, HumanName.Eric],
    humBan: [HumanName.Flavie],
    humTagsReq: [[HumanName.Flavie, HumanTag.flavie_angry]],
    effects: [new SituationEffect().changeFondness([[[HumanName.Flavie, HumanName.You], -10]])
        .setDescription('Flavie came uninvited, chewed you out, and left. Forever.')],
})
const bowlingbrawl = new Complex({
    humReq: [HumanName.Cecil, HumanName.Dan],
    allowedLocations: [LocationName.Bowling],
    relTagsBan: [[[HumanName.Cecil, HumanName.Dan], RelationshipTag.bowling_brawl]],
    effects: [new SituationEffect().changeFondness([
        [[HumanName.Cecil, HumanName.Dan], -2],
        [[HumanName.Dan, HumanName.Cecil], -2]])
        .addRelTags([[[HumanName.Cecil, HumanName.Dan], RelationshipTag.bowling_brawl]])
        .setDescription('Cecil and Dan bet who could score the most in bowling.' +
            ' Dan thought he would win easily, but Cecil did.' +
            ' So Dan accused him of cheating, and they got into a fight!')],
    processEffects: function (trip, currentState, baseEffects) {
        trip.goPeople.filter(p => (p.name != HumanName.Cecil) && (p.name != HumanName.Dan)).forEach(p => {
            baseEffects[0].changedFondness.push([[p.name, HumanName.Cecil], -2])
            baseEffects[0].changedFondness.push([[p.name, HumanName.Dan], -1])
        })
        return baseEffects
    },
})

const PRESENT_FONDNESS_CHANGE = +2
const ABSENT_FONDNESS_CHANGE = -1

const baseFondnessChanges = new Complex({
    processEffects: function (trip, currentState, baseEffects) {
        let effect = new SituationEffect()
        currentState.getAllHumanNames().forEach(hName => {
            if (!trip.goPeople.map(p => p.name).includes(hName)) {
                effect.changedFondness.push([[hName, HumanName.You], ABSENT_FONDNESS_CHANGE])
            } else {
                effect.changedFondness.push([[hName, HumanName.You], PRESENT_FONDNESS_CHANGE])
            }
        })

        return baseEffects.concat([effect])
    },
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
        flatten([
            mutualRelationship([HumanName.Alex, HumanName.Beatrice],
                [RelationshipTag.crushable, RelationshipTag.crush, RelationshipTag.disable_mutual_crush_dating]),
            mutualRelationship([HumanName.Alex, HumanName.Cecil],[RelationshipTag.crushable, RelationshipTag.crush]),
            mutualRelationship([HumanName.Eric, HumanName.Alex],[RelationshipTag.crushable, RelationshipTag.crush]),
            mutualRelationship([HumanName.Eric, HumanName.Beatrice],[RelationshipTag.crushable, RelationshipTag.crush]),
            mutualRelationship([HumanName.Dan, HumanName.Beatrice],[RelationshipTag.crushable, RelationshipTag.crush]),
            mutualRelationship([HumanName.Dan, HumanName.Flavie], [RelationshipTag.crushable, RelationshipTag.crush, RelationshipTag.like]),
        ]),
        [
            [HumanName.Cecil, HumanTag.introvert],
            [HumanName.Dan, HumanTag.extrovert],
            [HumanName.Dan, HumanTag.angry_drunk],
            [HumanName.Dan, HumanTag.promiscuous],
        ],
        [
            [[HumanName.Alex, HumanName.Beatrice], 7],
            [[HumanName.Beatrice, HumanName.Alex], 7],
            [[HumanName.Alex, HumanName.Cecil], 7],
            [[HumanName.Cecil, HumanName.Alex], 7],
            [[HumanName.Eric, HumanName.Alex], 7],
            [[HumanName.Alex, HumanName.Eric], 7],
            [[HumanName.Eric, HumanName.Beatrice], 7],
            [[HumanName.Beatrice, HumanName.Eric], 7],
            [[HumanName.Dan, HumanName.Beatrice], 7],
            [[HumanName.Beatrice, HumanName.Dan], 7],
            [[HumanName.Dan, HumanName.Flavie], 7],
            [[HumanName.Flavie, HumanName.Dan], 7],
        ],
        [
            new Sympathies(),
            new NobodyLikesAngryDrunk(),
            new MutualCrush(),
            new EternalCouple(HumanName.Dan, HumanName.Flavie),
            new BeatriceBreakups(),
            new AlexAndBeatriceGetDrunk(),

            bowlingbrawl,
            flavieFomo2, // 2 must be before 1 (else both happen simultaneously)
            flavieFomo1,
            danTwoGirlfriendsBusted,
            baseFondnessChanges,
            fragileFlavie2, // zas stejnej issue
            fragileFlavie1,

            new UpdateFondnessBasedTags(),
        ],
    ),
)        
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
    LocationName.Park,
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

const flavieFomo1 = new Complex({    //Flavie FOMO event 1
    humReq: [HumanName.Alex, HumanName.Beatrice, HumanName.Cecil, HumanName.Dan, HumanName.Eric],
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
        [[HumanName.Dan, HumanName.Cecil,], -2]])
        .addRelTags([[[HumanName.Cecil, HumanName.Dan], RelationshipTag.bowling_brawl]])
        .setDescription('Cecil and Dan bet who could score the most in bowling.' +
            ' Dan thought he would win easily, but Cecil did.' +
            ' So Dan accused him of cheating, and they got into a fight!')],
    processEffects: function(trip, currentState, baseEffects) {
        trip.goPeople.filter(p => (p.name != HumanName.Cecil) && (p.name != HumanName.Dan)).forEach(p => {
            baseEffects[0].changedFondness.push([[p.name, HumanName.Cecil], -2])
            baseEffects[0].changedFondness.push([[p.name, HumanName.Dan], -1])
        })
        return baseEffects;
    }
})

const leftOut = new Complex({    
    processEffects: function(trip, currentState, baseEffects) {
        let leftOutDislikeEffect = new SituationEffect()
        currentState.getAllHumanNames().forEach(hName =>{
            if (!trip.goPeople.map(p => p.name).includes(hName)) {
                leftOutDislikeEffect.changedFondness.push([[hName, HumanName.You], -1])
            }
        })
        baseEffects.push(leftOutDislikeEffect);

        return baseEffects
    }
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
            mutualRelationship([HumanName.Dan, HumanName.Flavie], [RelationshipTag.crush, RelationshipTag.like]),
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
            new Sympathies(),
            new UpdateFondnessBasedTags(),
            new NobodyLikesAngryDrunk(),
            new MutualCrush(),
            new EternalCouple(HumanName.Dan, HumanName.Flavie),

            bowlingbrawl,
            flavieFomo2, // 2 must be before 1 (else both happen simultaneously)
            flavieFomo1,
            danTwoGirlfriendsBusted,
            leftOut
        ],
    ),
)        
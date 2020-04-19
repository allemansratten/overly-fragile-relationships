export enum RelationshipTag {
    crush,
    lover,
    ex,
    political_dis,
    like, dislike, // sympathies
    crushable,
    // eternal couple
    eternal_couple_together_1, eternal_couple_together_2, eternal_couple_together_3,
    eternal_couple_apart_1, eternal_couple_apart_2, eternal_couple_apart_3, bowling_brawl,

}

export const relationshipTagMap: Map<RelationshipTag, string> = new Map([
    [RelationshipTag.crush, 'crush'],
    [RelationshipTag.lover, 'lover'],
    [RelationshipTag.ex, 'ex'],
    [RelationshipTag.political_dis, 'political disagreement'],
])

export const relationshipTagMapStory: Map<RelationshipTag, [string, string]> = new Map([
    [RelationshipTag.crush, ['SUBJ now has a crush on OBJ', 'SUBJ lost a crush on OBJ']],
    [RelationshipTag.lover, [`SUBJ and OBJ started dating!`, 'SUBJ and OBJ are no longer lovers']],
    [RelationshipTag.ex, [`Did you hear? SUBJ and OBJ broke up!`, 'SUBJ is not an ex of OBJ anymore']],
    [RelationshipTag.political_dis, ['SUBJ now has a political disagreement with OBJ', 'SUBJ no longer has a political disagreement with OBJ']],
])

export const relationshipTagBidirectional: Set<RelationshipTag> = new Set([
    RelationshipTag.lover,
    RelationshipTag.political_dis,
    RelationshipTag.ex,
])

// If the first item is in NEW, the second is removed from REM
export const relationshipTagShadowingNewRem: Array<[RelationshipTag, RelationshipTag]> = [
    [RelationshipTag.lover, RelationshipTag.crush],
    [RelationshipTag.ex, RelationshipTag.lover],

]

// If the first item is in REM, the second is removed from NEW
export const relationshipTagShadowingRemNew: Array<[RelationshipTag, RelationshipTag]> = [
]

export enum HumanTag {
    introvert, extrovert, angry_drunk, sad_drunk,
    good_bowler, bad_bowler, promiscuous, jealous, disagreeable,
    agreeable, supportive, attention,
    flavie_angry,
    dan_busted,
    gone
}

export const humanTagMap: Map<HumanTag, string> = new Map([
    [HumanTag.introvert, 'introvert'],
    [HumanTag.extrovert, 'extrovert'],
    [HumanTag.angry_drunk, 'angry when drunk'],
    [HumanTag.sad_drunk, 'sad when drunk'],
    [HumanTag.good_bowler, 'good bowler'],
    [HumanTag.bad_bowler, 'bad bowler'],
    [HumanTag.promiscuous, 'promiscuous'],
    [HumanTag.jealous, 'jealous'],
    [HumanTag.disagreeable, 'disagreeable'],
    [HumanTag.agreeable, 'agreeable'],
    [HumanTag.supportive, 'supportive friend'],
    [HumanTag.attention, 'attention seeker'],
])

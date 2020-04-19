export enum RelationshipTag {
    crush,
    lover,
    ex,
    political_dis,
}

export const relationshipTagMap: Map<RelationshipTag, string> = new Map([
    [RelationshipTag.crush, 'crush'],
    [RelationshipTag.lover, 'lover'],
    [RelationshipTag.ex, 'ex'],
    [RelationshipTag.political_dis, 'political disagreement'],
])

export enum HumanTag {
    introvert, extrovert, angry_drunk, sad_drunk,
    good_bowler, bad_bowler, promiscuous, jealous, disagreeable,
    agreeable, supportive, attention, flavie_angry

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
    [HumanTag.disagreeable, 'disagreeable]'],
    [HumanTag.agreeable, 'agreeable]'],
    [HumanTag.supportive, 'supportive friend]'],
    [HumanTag.attention, 'attention seeker]'],
])

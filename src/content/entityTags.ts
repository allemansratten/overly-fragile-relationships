export enum RelationshipTag {
    crush,
    dislike,
    friend_like,
    friend,
    lover,
    ex,
    political_dis,
    // eternal couple
    eternal_couple_together_1, eternal_couple_together_2, eternal_couple_together_3,
    eternal_couple_apart_1, eternal_couple_apart_2, eternal_couple_apart_3,
}

export const relationshipTagMap: Map<RelationshipTag, string> = new Map([
    [RelationshipTag.crush, 'crush'],
    [RelationshipTag.dislike, 'dislike'],
    [RelationshipTag.friend_like, 'like as a friend'],
    [RelationshipTag.friend, 'friend'],
    [RelationshipTag.lover, 'lover'],
    [RelationshipTag.ex, 'ex'],
    [RelationshipTag.political_dis, 'political disagreement'],
])

export enum HumanTag {
    introvert, extrovert, angry_drunk, sad_drunk,
    good_bowler, bad_bowler, promiscuous, jealous, disagreeable,
    agreeable, supportive, attention

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


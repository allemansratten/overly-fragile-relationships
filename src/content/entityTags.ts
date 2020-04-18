export enum RelationshipTag { crush, dislike, friend_like, friend, lover, ex, political_dis }
let RelationshipTagMap : {[key in RelationshipTag]: string} = {
    [RelationshipTag.crush]: 'crush',
    [RelationshipTag.dislike]: 'dislike',
    [RelationshipTag.friend_like]: 'like as a friend',
    [RelationshipTag.friend]: 'friend',
    [RelationshipTag.lover]: 'lover',
    [RelationshipTag.ex]: 'ex',
    [RelationshipTag.political_dis]: 'political disagreement',
}
export { RelationshipTagMap }

export enum HumanTag {
    introvert, extrovert, angry_drunk, sad_drunk,
    good_bowler, bad_bowler, promiscuous, jealous, disagreeable
}

let HumanTagMap: { [key in HumanTag]: string } = {
    [HumanTag.introvert]: 'introvert',
    [HumanTag.extrovert]: 'extrovert',
    [HumanTag.angry_drunk]: 'angry when drunk',
    [HumanTag.sad_drunk]: 'sad when drunk',
    [HumanTag.good_bowler]: 'good bowler',
    [HumanTag.bad_bowler]: 'bad bowler',
    [HumanTag.promiscuous]: 'promiscuous',
    [HumanTag.jealous]: 'jealous',
    [HumanTag.disagreeable]: 'disagreeable'
}
export { HumanTagMap }

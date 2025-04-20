
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}


export const Folk = [{
    type: Type.Super,
    label: 'Folk',
    id: 'folk',
    hard: [],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Blues',
    id: 'blues',
    hard: ['folk', 'rock'],
    soft: ['work-music']
},
{
    type: Type.Scene,
    parent: Type.Super,
    label: 'Protest Music',
    desc: 'Scene that recollects all music connected to protest about social issues and political topics.',
    id: 'Protest-music',
    hard: ['folk', 'roots-regae', 'conscious-hiphop', 'punk', 'work-music'],
    soft: []
},
]

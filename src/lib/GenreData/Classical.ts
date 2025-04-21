
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Classical = [    {
    type: Type.Super,
    label: 'Classical Music',
    id: 'classical',
    hard: [],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Poetry',
    id: 'poetry',
    desc: 'Not directly attached to classical music but a classic form of expressing emotions in a rhytmical way',
    hard: ['classical'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Spoken word',
    id: 'spoken-word',
    hard: ['poetry'],
    soft: []
}]
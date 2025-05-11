
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Dance = [{
            type: Type.Super,
            parent: Type.Super,
            label: 'Dance',
            id: 'dance',
            hard: ['folk'],
            soft: []
}
,

]
import { Ambient, AvantGarde } from "./AvantGarde"
import { Electronics } from "./Electronics"
import { Folk } from "./Folk"
import { AlternativeRock, Rock } from "./Rock"
import { WorldMusic } from "./WorldMusic"

export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export interface IGenre {
    type: Type,
    label: string,
    id: string
    hard: string[],
    soft: string[],
    parent?: Type
    sub?: string
    desc?: string
}


const Hardcore = [
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Hardcore',
        id: 'hardcore',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Post-Hardcore',
        id: 'post-hardcore',
        hard: ['hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Emo',
        id: 'emo',
        hard: ['post-hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Emocore',
        id: 'emocore',
        hard: ['emo', 'hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Emo-pop',
        id: 'emo-pop',
        hard: ['emo', 'pop'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Midwest Emo',
        id: 'midwest-emo',
        hard: ['emo', 'math-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Screamo',
        id: 'screamo',
        hard: ['emo', 'hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Emoviolence',
        id: 'emoviolence',
        hard: ['screamo', 'powerviolence'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Metalcore',
        id: 'metalcore',
        hard: ['metal', 'hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Melodic Hardcore',
        id: 'melodic-hardcore',
        hard: ['hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Thrashcore',
        id: 'trashcore',
        hard: ['hardcore', 'thrash-metal'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Beatdown Hardcore',
        id: 'beatdown-hardcore',
        hard: ['hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Grindcore',
        id: 'grindcore',
        hard: ['hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Deathgrind',
        id: 'deathgrind',
        hard: ['grindcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Goregrind',
        id: 'goregrind',
        hard: ['grindcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Gorenoise',
        id: 'gorenoise',
        hard: ['goregrind', 'noise'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Pornogrind',
        id: 'pornogrind',
        hard: ['goregrind'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Folk punk',
        id: 'folk-punk',
        hard: ['punk', 'folk'],
        soft: []
    },
]

const Metal = [{
    type: Type.Super,
    label: 'Heavy Metal',
    id: 'metal',
    hard: ['rock'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Speed Metal',
    id: 'speed-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Thrash Metal',
    id: 'thrash-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Industrial Metal',
    id: 'industrial-metal',
    hard: ['industrial', 'metal'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Alternative Metal',
    id: 'alternative-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Super,
    label: 'Nu Metal',
    id: 'nu-metal',
    hard: ['metal', 'hiphop'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Super,
    label: 'Rap Metal',
    id: 'rap-metal',
    hard: ['metal', 'hiphop'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Super,
    label: 'Avant garde Metal',
    id: 'avant-garde-metal',
    hard: ['metal', 'avant-garde'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Black Metal',
    id: 'black-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Atmospheric Black Metal',
    id: 'atmospheric-black-metal',
    hard: ['black-metal', 'noise', 'ambient'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'BlackGaze',
    id: 'blackgaze',
    hard: ['black-metal', 'shoegaze'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Death Metal',
    id: 'death-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Doom Metal',
    id: 'doom-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Death Doom Metal',
    id: 'death-doom-metal',
    hard: ['doom-metal', 'death-metal'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funeral Doom Metal',
    id: 'funeral-doom-metal',
    hard: ['doom-metal'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Drone Metal',
    id: 'drone-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Gothic Metal',
    id: 'gothic-metal',
    hard: ['metal', 'gothic'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Stoner Metal',
    id: 'stoner-metal',
    hard: ['metal', 'psychodelia'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Sludge Metal',
    id: 'sludge-metal',
    hard: ['stoner-metal', 'doom-metal'],
    soft: []
},
]


const HipHop = [
    {
        type: Type.Super,
        label: 'Hip hop',
        id: 'hiphop',
        hard: [],
        soft: []
    },
]


export const Genres: IGenre[] = [
    ...AvantGarde,
    ...Metal,
    ...Hardcore,
    ...AlternativeRock,
    ...Electronics,
    ...HipHop,
    ...Folk,
    ...WorldMusic,
]




import { Ambient, AvantGarde } from "./AvantGarde"
import { Classical } from "./Classical"
import { Dance } from "./Dance"
import { Electronics } from "./Electronics"
import { Folk } from "./Folk"
import { HipHop } from "./HipHop"
import { AlternativeRock, Hardcore, Rock } from "./Rock"
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
    hard: IGenre["id"][],
    soft: IGenre["id"][],
    parent?: Type
    sub?: string
    desc?: string
    dates?: string,
    artists?:string
}



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
    parent: Type.Genre,
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
{
    type: Type.Scene,
    parent: Type.Super,
    label: 'NWOBHM',
    id: 'nwobhm',
    hard: ['heavy-metal', 'thrash-metal'],
    soft: []
},
{
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Kawaii Metal',
    id: 'kawaii-metal',
    hard: ['alternative-metal', 'metalcore', 'j-pop'],
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
   ...Classical,
   ...Dance
]




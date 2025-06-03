import { Ambient, AvantGarde } from "./AvantGarde"
import { Classical } from "./Classical"
import { Dance } from "./Dance"
import { Electronics } from "./Electronics"
import { Folk } from "./Folk"
import { HipHop } from "./HipHop"
import { Metal } from "./Metal"
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





export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4
}

export interface IGenre {
    type: Type,
    label: string,
    id: string
    hard: string[],
    soft: string[],
    parent?: Type
    sub?: string
    desc ?:string
}

const Electronics = [
    {
        type: Type.Super,
        label: 'Electronics',
        id: 'electronics',
        hard: [],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Glitch',
        id: 'glitch',
        hard: ['electronics', 'noise', 'choppednscrewed'],
        soft: []
    },
]

const Metal = [   {
    type: Type.Super,
    label: 'Heavy Metal',
    id: 'metal',
    hard: ['rock'],
    soft: []
},
{
    type: Type.Super,
    label: 'Speed Metal',
    id: 'speed-metal',
    hard: ['metal'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Industrial Metal',
    id: 'industrial-metal',
    hard: ['industrial','metal' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Alternative Metal',
    id: 'alternative-metal',
    hard: ['metal' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Metalcore',
    id: 'metalcore',
    hard: ['metal', 'hardcore' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Black Metal',
    id: 'black-metal',
    hard: ['metal' ],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Atmospheric Black Metal',
    id: 'atmospheric-black-metal',
    hard: ['black-metal', 'noise', 'ambient' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Death Metal',
    id: 'death-metal',
    hard: ['metal' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Doom Metal',
    id: 'doom-metal',
    hard: ['metal' ],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Death Doom Metal',
    id: 'death-doom-metal',
    hard: ['doom-metal', 'death-metal' ],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funeral Doom Metal',
    id: 'funeral-doom-metal',
    hard: ['doom-metal' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Drone Metal',
    id: 'drone-metal',
    hard: ['metal' ],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Gothic Metal',
    id: 'gothic-metal',
    hard: ['metal', 'gothic' ],
    soft: []
}

]

const Rock = [
    {
        type: Type.Super,
        label: 'Rock',
        id: 'rock',
        hard: [ ],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Punk',
        id: 'punk',
        hard: ['rock' ],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Post Punk',
        id: 'post-punk',
        hard: ['punk' ],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Alternative Rock',
        id: 'alternative-rock',
        hard: ['rock' ],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Art Rock',
        id: 'art-rock',
        hard: ['rock', 'avant-garde' ],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Experimental Rock',
        id: 'experimental-rock',
        hard: ['rock', 'avant-garde' ],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'KrautRock',
        id: 'krautrock',
        hard: ['experimental-rock', 'electronics' ],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Avant-Prog',
        id: 'avantprog',
        hard: ['experimental-rock', 'electronics' ],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Gothic Rock',
        id: 'gothic-rock',
        desc: 'Towards finals of the 70s, this genre started based on a entire subculture',
        hard: ['post-punk' ],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Gothic',
        id: 'gothic',
        hard: ['gothic-rock' ],
        soft: []
    }
]

export const Genres: IGenre[] = [
    {
        type: Type.Super,
        label: 'Avant Garde',
        id: 'avant-garde',
        hard: [],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Harsh Noise',
        id: 'harsh-noise',
        hard: ['noise'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Noise',
        id: 'noise',
        hard: ['avant-garde'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'GoreNoise',
        id: 'gorenoise',
        hard: ['noise'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Harsh Noise Wall',
        id: 'harsh-noise-wall',
        hard: ['harsh-noise'],
        soft: []
    },
   ...Rock
  
    ,{
        type: Type.Genre,
        parent: Type.Super,
        label: 'Industrial',
        id: 'industrial',
        hard: ['avant-garde', 'punk' ],
        soft: [ 'musique-concrete', 'electronic', 'krautrock']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Power Industrial',
        id: 'power-industrial',
        hard: [ 'noise' ,
'industrial'],
        soft: ['electronics']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Industrial Rock',
        id: 'industrial-rock',
        hard: ['industrial', 'rock' ],
        soft: [ ]
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Ambient',
        id: 'ambient',
        hard: ['avant-garde' ],
        soft: [ ]
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dark Ambient',
        id: 'dark-ambient',
        hard: ['ambient', 'industrial' ],
        soft: [ ]
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Death Industrial',
        sub: 'Dark Noise',
        id: 'death-industrial',
        hard: ['noise', 'industrial'],
        soft: ['drone']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Post Industrial',
    //    sub: 'Dark Noise',
        id: 'post-industrial',
        hard: ['industrial'],
        soft: ['rock', 'electronics']
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Post Rock',
        id: 'post-rock',
        hard: ['rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Drone',
        id: 'drone',
        hard: ['ambient', 'industrial', 'post-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Power Noise',
        id: 'power-noise',
        hard: ['noise', 'electronics'],
        soft: []
    },
   ...Metal,
   {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Alternative',
    id: 'alternative',
    hard: ['alternative-rock','alternative-metal'],
    soft: []
   },
   ...Electronics
]



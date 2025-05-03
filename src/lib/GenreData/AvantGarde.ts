import { Rock } from "./Rock"

export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}


export  const Ambient =  [{
        type: Type.Genre,
        parent: Type.Super,
        label: 'Ambient',
        id: 'ambient',
        hard: ['avant-garde'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dark Ambient',
        id: 'dark-ambient',
        hard: ['ambient', 'industrial'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Black Ambient',
        id: 'black-ambient',
        hard: ['dark-ambient'],
        soft: []
    }
]

export const AvantGarde = [
    {
        type: Type.Super,
        label: 'Avant Garde',
        id: 'avant-garde',
        hard: [],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Electroacoustic',
        id: 'electroacoustic',
        hard: ['avant-garde'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Acousmatic Music',
        id: 'acousmatic-music',
        hard: ['electroacoustic'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'EAI',
        id: 'eai',
        hard: ['electroacoustic'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Musique concrète',
        id: 'musique-concrete',
        hard: ['electroacoustic'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Musique concrète Instrumentale',
        id: 'musique-concrete-instrumentale',
        desc: 'Acoustic, through-composed Classical Music that relies heavily on unconventional instrumental techniques.',
        hard: ['musique-concrete', 'modern-classical'],
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
        parent: Type.Sub,
        label: 'Harsh Noise Wall',
        id: 'harsh-noise-wall',
        hard: ['harsh-noise'],
        soft: []
    },

    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Industrial',
        id: 'industrial',
        hard: ['musique-concrete', 'punk'],
        soft: ['electronic', 'krautrock']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Power Industrial',
        id: 'power-industrial',
        hard: ['noise',
            'industrial'],
        soft: ['electronics']
    },
    ...Rock,
 ...Ambient, 
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
        id: 'post-industrial',
        hard: ['industrial'],
        soft: ['rock', 'electronics']
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
]
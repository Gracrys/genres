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
        soft: [],
        bands: 'Aphex Twin, Brian Eno',
        dates: 'late 1960s'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dark Ambient',
        id: 'dark-ambient',
        hard: ['ambient', 'industrial'],
        soft: [],
        bands: 'nine inch nails, uboa, the caretaker'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Dungeon Synth',
        id: 'dungeon-synth',
        hard: ['dark-ambient'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Black Ambient',
        id: 'black-ambient',
        hard: ['dark-ambient'],
        soft: [],
        bands: 'blut aus nord'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Space Ambient',
        sub: 'Space Music',
        id: 'space-ambient',
        hard: ['ambient', 'prog-electronics'],
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
        type: Type.Genre,
        parent: Type.Super,
        label: 'Noise',
        id: 'noise',
        hard: ['avant-garde'],
        soft: [],
        bands: 'Merzbow, gerogiregegege'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Harsh Noise',
        id: 'harsh-noise',
        hard: ['noise'],
        soft: [],
        bands: 'merzbow, gerogigegege, hanatarash'
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
        soft: ['electronic', 'krautrock'],
        bands: 'coil, nine inch nails, nurse with wound',
        dates: '3 September 1975',
        desc: 'Emerged out of Punk and avant-garde art movements in the mid-1970s, often characterized by a bleak, mechanical atmosphere, the use of metallic percussion as well as other unconventional instruments, and extensive use of sampling influenced by Musique concrète. divided in many styles it started first as punk sub style which consisted in more experimental sounds like using strange home made instruments, sounds and samples while reusing the same compass, another style at its first used a more ambient style but with a faster amd complex tempo than that of dark-ambient and as time went on, in 1990 a new style emerged with a more conventional and modern sound focusing more in a danceable electronic with bands like nine inch nails and kmfdm.'
    },  {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Martial Industrial',
        id: 'martial-industrial',
        hard: ['industrial'],
        soft: [],
        bands: 'Laibach',
        desc: 'Incorporates elements of traditional European military marches with Neoclassical Darkwave, Dark Ambient, Industrial, and Neofolk.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Power Electronics',
        id: 'power-electronics',
        hard: [
            'industrial','electronics','noise'],
        soft: [],
        desc: 'Waves of feedback, screeching analog synthesizers, and harsh, screamed vocals.'
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
        parent: Type.Sub,
        label: 'Death Industrial',
        sub: 'Dark Noise',
        id: 'death-industrial',
        hard: ['power-electronics','noise', 'industrial'],
        soft: ['drone'],
        bands: 'pharmakon, puce mary'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Post Industrial',
        id: 'post-industrial',
        hard: ['industrial'],
        soft: ['rock', 'electronics'],
        desc: 'Umbrella group of genres that combine the dark, mechanical aesthetic of early Industrial music with more accessible genres, such as Rock and Electronic Dance Music.',
        bands: 'nine inch nails, puscifer, yves tumor'
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Drone',
        id: 'drone',
        hard: ['ambient', 'industrial', 'post-rock', 'electronics'],
        soft: [],
        bands: 'Boris, stars of the lid',
        dates: '1960s'

    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Power Noise',
        sub: ' rhythm n noise',
        id: 'power-noise',
        hard: ['noise', 'electronics'],
        soft: ['industrial']
    },
    {
        type: Type.Scene,
        parent: Type.Genre,
        label: 'No wave',
        id: 'no-wave',
        hard: ['noise', 'industrial'],
        soft: ['post-punk'],
        desc: 'Underground, avant-garde, anti-art movement and music scene based in New York City around 1976-1980; commonly incorporates elements like dissonance, atonality, and stream-of-consciousness lyrics into various genres.',
        bands: 'swans, gerogiregege',
    },
]
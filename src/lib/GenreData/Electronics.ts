
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Bass = [
    {
        type: Type.Genre,
        label: 'Bass',
        id: 'bass',
        hard: ['electronics'],
        soft: []
    },

]


export const House = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'House',
    id: 'house',
    hard: ['electronics'],
    soft: []

}]

export const Garage = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'UK Garage',
    id: 'garage',
    hard: ['garage-house'],
    soft: [],


},
{
    type: Type.Scene,
    parent: Type.Genre,
    label: 'UK rave',
    id: 'ukrave',
    hard: ['garage'],
    soft: [],


}
]


export const Techno = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Techno',
    id: 'techno',
    hard: ['electronics'],
    soft: []

}]

export const Trance = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Trance',
    id: 'trance',
    hard: ['electronics'],
    soft: []

}]


export const Bit = [
    {
        type: Type.Genre,
        label: 'Bit Music',
        id: 'bit',
        hard: ['electronics'],
        soft: []
    },

]

export const Glitch = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Glitch',
    id: 'glitch',
    hard: ['electronics', 'noise', 'choppednscrewed'],
    soft: []
}]

export const Breakbeat = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Breakbeat',
    id: 'breakbeat',
    hard: ['electronics'],
    soft: []
}]

export const ChillOut = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Chill-Out',
    id: 'chillout',
    hard: ['electronics', 'ambient'],
    soft: []
}]

export const Disco = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Disco',
    id: 'disco',
    hard: ['electronics', 'dance', 'synth'],
    soft: []
}]

export const DnB = [{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Drum and Bass',
    id: 'dnb',
    hard: ['breakbeat', 'techno'],
    soft: ['chiptune']
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Jungle',
    id: 'jungle',
    hard: ['breakbeat', 'reggae'],
    soft: ['chiptune']
},
]

export const Step = [
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Dubstep',
    id: 'dubstep',
    hard: ['DnB', 'dub'],
    soft: []
}]

export const hardcoreElectronics = [{
            type: Type.Genre,
            parent: Type.Genre,
            label: 'Hardcore',
            id: 'hardcore-electronics',
            sub: '(electronics)',
            hard: ['breakbeat'],
            soft: ['hardcore']
        
}]

export const Electronics = [
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
        label: 'Electro',
        id: 'electro',
        hard: ['electronics'],
        soft: []
    },
   ...Bass,
   ...House,
   ...Techno,
   ...Trance,
   ...Bit,
   ...Breakbeat,
   ...ChillOut,
   ...Disco,
    ...Glitch,
    ...hardcoreElectronics
]



export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}


export const Punk = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Punk',
        id: 'punk',
        hard: ['rock', 'proto-punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Art Punk',
        id: 'art-punk',
        hard: ['punk', 'avant-garde', 'jazz', 'funk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Egg Punk',
        id: 'egg-punk',
        hard: ['art-punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Post Punk',
        id: 'post-punk',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'New Wave',
        id: 'new-wave',
        hard: ['post-punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Dark Wave',
        id: 'dark-wave',
        hard: ['post-punk', 'gothic-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Ethereal Wave',
        id: 'ethereal-wave',
        hard: ['dark-wave'],
        soft: ['ambient']
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'New Age',
        id: 'new-age',
        hard: ['ethereal-wave', 'ambient', 'psychodelia'],
        soft: ['folk']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Pop punk',
        id: 'pop-punk',
        hard: ['punk', 'pop'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Genre,
        label: 'Punk',
        id: 'punk-scene',
        hard: ['punk'],
        soft: []
    }
]
export const RocknRoll = [{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Rock & Roll',
    id: 'rocknroll',
    hard: ['rock', 'blues'],
    soft: ['pop']
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Rockabilly',
    id: 'rockabilly',
    hard: ['rocknroll', 'country', 'blues'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Psychobilly',
    id: 'psychobilly',
    hard: ['rockabilly', 'punk'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Proto-Punk',
    id: 'proto-punk',
    hard: ['rocknroll'],
    soft: []
}
]
export const Rock = [
    {
        type: Type.Super,
        label: 'Rock',
        id: 'rock',
        hard: [],
        soft: []
    },
    ...Punk,
    ...RocknRoll,
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Art Rock',
        id: 'art-rock',
        hard: ['rock', 'avant-garde'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Experimental Rock',
        id: 'experimental-rock',
        hard: ['rock', 'avant-garde'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'KrautRock',
        id: 'krautrock',
        hard: ['experimental-rock', 'electronics'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Industrial Rock',
        id: 'industrial-rock',
        hard: ['industrial', 'rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Avant-Prog',
        id: 'avantprog',
        hard: ['experimental-rock', 'electronics'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Gothic Rock',
        id: 'gothic-rock',
        desc: 'Towards finals of the 70s, this genre started based on a entire subculture',
        hard: ['post-punk'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Gothic',
        id: 'gothic',
        hard: ['gothic-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Psychodelic Rock',
        id: 'psychodelic-rock',
        hard: ['rock', 'jazz'],
        soft: ['blues']
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Acid Rock',
        id: 'acid-rock',
        hard: ['psychodelic-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Heavy Psych',
        id: 'heavy-psych',
        hard: ['psychodelic-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Space Rock',
        id: 'space-rock',
        hard: ['psychodelic-rock'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Space Rock Revival',
        id: 'space-rock-revival',
        hard: ['space-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Math rock',
        id: 'math-rock',
        hard: ['rock'],
        soft: ['jazz']
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Math pop',
        id: 'math-pop',
        hard: ['math-rock', 'pop'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Psychodelia',
        id: 'psychodelia',
        hard: ['psychodelic-rock'],
        soft: []
    },


]

export const AlternativeRock = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Alternative Rock',
        id: 'alternative-rock',
        hard: ['rock'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Alternative Dance',
        id: 'alternative-dance',
        hard: ['alternative-rock', 'dance'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Indie Rock',
        id: 'indie-rock',
        hard: ['rock', 'pop', 'jingle'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Garage Rock',
        id: 'garage-rock',
        hard: ['rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Grunge',
        id: 'grunge',
        sub: 'Seattle rock',
        hard: ['alternative-rock', 'garage-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Post Grunge',
        id: 'post-grunge',
        hard: ['grunge'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Shoegaze',
        id: 'shoegaze',
        hard: ['alternative-rock'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Grunge',
        id: 'grunge',
        hard: ['grunge'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Genre,
        label: 'Alternative',
        id: 'alternative',
        hard: ['alternative-rock', 'alternative-metal'],
        soft: []
    },

]
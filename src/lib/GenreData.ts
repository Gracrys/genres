
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

const Punk = [
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
const RocknRoll = [{
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
const Rock = [
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

const AlternativeRock = [
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

const HipHop = [
    {
        type: Type.Super,
        label: 'Hip hop',
        id: 'hiphop',
        hard: [],
        soft: []
    },
]

const Folk = [{
    type: Type.Super,
    label: 'Folk',
    id: 'folk',
    hard: [],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Blues',
    id: 'blues',
    hard: ['folk', 'rock'],
    soft: ['work-music']
},
]
const AvantGarde = [
    {
        type: Type.Super,
        label: 'Avant Garde',
        id: 'avant-garde',
        hard: [],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Electroacoustic',
        id: 'electroacoustic',
        hard: ['avant-garde'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Acousmatic Music',
        id: 'acousmatic-music',
        hard: ['electroacoustic'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'EAI',
        id: 'eai',
        hard: ['electroacoustic'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Musique concrète',
        id: 'musique-concrete',
        hard: ['electroacoustic'],
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
        type: Type.Sub,
        parent: Type.Sub,
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

    {
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
        parent: Type.Sub,
        label: 'Post Industrial',
        //    sub: 'Dark Noise',
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

export const Genres: IGenre[] = [
    ...AvantGarde,
    ...Metal,
    ...Hardcore,
    ...AlternativeRock,
    ...Electronics,
    ...Folk,
    ...HipHop
]





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
        label: 'Cowpunk',
        id: 'cowpunk',
        hard: ['punk', 'country', 'rockabilly', 'contemporary-folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Folk Punk',
        id: 'folk-punk',
        hard: ['punk', 'folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Celtic Punk',
        id: 'celtic-punk',
        hard: ['punk', 'celtic'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Gypsy Punk',
        id: 'gypsy-punk',
        hard: ['punk', 'gypsy'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Post Punk',
        id: 'post-punk',
        hard: ['punk'],
        soft: []
    },
   {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Post Punk Revival',
    id: 'post-punk-revival',
    hard: ['post-punk'],
    soft: []
},
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Coldwave',
        id: 'coldwave',
        hard: ['post-punk', 'synth'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dance-punk',
        id: 'dance-punk',
        hard: ['post-punk', 'disco', 'dance', 'funk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Dance-punk Revival',
        id: 'dance-punk',
        hard: ['dance-punk', 'post-punk-revovañ', 'electronic', 'alternative-dance'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'New Wave',
        id: 'new-wave',
        hard: ['post-punk'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Dark Wave',
        id: 'dark-wave',
        hard: ['post-punk', 'gothic-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
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
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Skate punk',
        id: 'skate-punk',
        hard: ['pop-punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Surf punk',
        id: 'surf-punk',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Vikingarock',
        id: 'vikingarock',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Easycore',
        id: 'easycore',
        hard: ['pop-punk', 'post-hardcore', 'metalcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Punk Blues',
        id: 'punk-blues',
        hard: ['punk', 'blues'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Anarcho-punk',
        id: 'anarcho-punk',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Garage Punk',
        id: 'garage-punk',
        hard: ['punk', 'garage-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Horror Punk',
        desc: 'Thematically and lyrically derived from Horror movies, typically with a nostalgic and campy attitude.',
        id: 'horror-punk',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Oi!',
        desc: 'Rejection of perceived intellectualism and elitism in Post-Punk and Art Punk, characterized by a return to a straightforward, melodic Punk Rock sound, sing-along choruses, and a lyrical focus on working class youth culture.',
        id: 'oi',
        hard: ['punk'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Könsrock',
        desc: 'Inspired by Post-Punk but with a more bizarre atmosphere with unusual or comic vocal techniques and a lyrical focus on the offensive and scatological.',
        id: 'horror-punk',
        hard: ['post-punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Synth punk',
        sub: 'Electronic punk',
        id: 'synth-punk',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Genre,
        label: 'Punk',
        id: 'punk-scene',
        hard: ['punk'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Skinhead',
        id: 'skinhead',
        hard: ['oi'],
        soft: []
    }
]

export const Hardcore = [
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
        label: 'Burning Spirits',
        id: 'burning-spirits',
        desc: 'Emphasis on delivering a very energetic and triumphant sound with flashy and soaring Metal solos, "melodramatic" or "uplifting" chord progressions, and singalong, over the top, harsh vocals, started in japan.',
        hard: ['hardcore', 'metal'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Crossover Thrash',
        id: 'crossover-thrash',
        hard: ['hardcore', 'thrash-metal'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Crust Punk',
        id: 'crust-punk',
        hard: ['hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Blackened Crust',
        id: 'blackened-crust',
        hard: ['crust-punk', 'black-metal'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'NeoCrust',
        id: 'neocrust',
        desc: 'Melodic, dark, and atmospheric style that often incorporates influences from Sludge Metal, Post-Metal, Black Metal, and Screamo.',
        hard: ['crust-punk'],
        soft: ['melodic-metal', 'sludge-metal', 'metalcore', 'post-metal', 'screamo']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Stenchcore',
        id: 'stenchcore',
        desc: 'Heavier, more metallic form of Crust Punk drawing influence from Thrash Metal as well as Death Metal and Heavy Metal.',
        hard: ['crust-punk'],
        soft: ['thrash-metal', 'death-metal', 'heavy-metal']
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'D-Beat',
        id: 'd-beat',
        desc: 'Shouted voices, Metal influences and d beat drums',
        hard: ['hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Noisecore',
        id: 'noisecore',
        hard: ['hardcore', 'noise-rock'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Post-Hardcore',
        id: 'post-hardcore',
        hard: ['hardcore'],
        soft: []
    },

    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Emo',
        id: 'emo',
        hard: ['post-hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Emocore',
        id: 'emocore',
        hard: ['emo', 'hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Emo-pop',
        id: 'emo-pop',
        hard: ['emo', 'pop'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Midwest Emo',
        id: 'midwest-emo',
        hard: ['emo', 'math-rock'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Screamo',
        id: 'screamo',
        hard: ['emo', 'hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Emoviolence',
        id: 'emoviolence',
        hard: ['screamo', 'powerviolence'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Swancore',
        id: 'swancore',
        hard: ['post-hardcore', 'math-rock', 'proggresive-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Sass',
        id: 'sass',
        hard: ['post-hardcore'],
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
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Deathcore',
        id: 'deathcore',
        hard: ['metalcore', 'death-metal'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Downtempo Deathcore',
        id: 'downtempo-deathcore',
        hard: ['deathcore'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Mathcore',
        id: 'mathcore',
        hard: ['metalcore', 'math-rock'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Thall',
        id: 'thall',
        hard: ['metalcore', 'math-rock'],
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
        label: 'Mincecore',
        id: 'mincecore',
        desc: 'Raw and simplistical with political and social tehemes',
        hard: ['hardcore'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Thrashcore',
        id: 'thrashcore',
        hard: ['hardcore', 'thrash-metal'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Powerviolence',
        id: 'powerviolence',
        hard: ['thrashcore', 'noise-rock'],
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
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Japanese Hardcore',
        id: 'japanese-hardcore',
        hard: ['burning-spirits'],
        soft: []
    },
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
        parent: Type.Genre,
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
        parent: Type.Genre,
        label: 'Gothic Rock',
        id: 'gothic-rock',
        desc: 'Towards finals of the 70s, this genre started based on a entire subculture',
        hard: ['post-punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Deathrock',
        id: 'deathrock',
        hard: ['gothic-rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Positive Punk',
        id: 'positive-punk',
        hard: ['gothic-rock', 'anarcho-punk'],
        soft: []
    },
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Gothic',
        id: 'gothic',
        hard: ['gothic-rock', 'horror-punk'],
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
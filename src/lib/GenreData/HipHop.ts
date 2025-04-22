
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const HipHop = [
    {
        type: Type.Super,
        label: 'Hip hop',
        desc: 'also known as rap, summarizes the genre of rhytmical poetry singing known as rapping as the movement and the melody and use of electronics which gave foot to their specific sound.',
        id: 'hiphop',
        hard: [],
        soft: ['poetry']
    },
    {
        type: Type.Sub,
        label: 'Abstract Hip hop',
        parent: Type.Super,
        desc: 'Uses much more abstract lyricism than what is considered conventional within the genre, typically through use of metaphors, symbolism, and cryptic meanings.',
        id: 'abstract-hiphop',
        hard: ['hiphop'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,

        label: 'Afroswing',
        desc: 'Emerged in the United Kingdom during the mid-2010s, incorporating influences from Dancehall, Afrobeats, Contemporary R&B, and a variety of West African Music.',
        id: 'afroswing',
        hard: ['hiphop', 'dancehall', 'rnb'],
        soft: ['world-music']
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Boom Bap',
        desc: 'Production style identified by an acoustic-sounding drum pattern of a kick drum on the downbeat followed by a cracking snare on the upbeat.',
        id: 'boom-bap',
        hard: ['hiphop'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Bounce',
        id: 'bounce',
        desc: 'Developed in New Orleans in the early 1990s, initially defined by a slow to midtempo beat with a double-time hi-hat on top.',
        hard: ['hiphop'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Chipmunk Soul',
        id: 'chipmunk-soul',
        desc: 'Sped-up vocal samples and slick, soulful production.',
        hard: ['hiphop'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Chopped and Screwed',
        id: 'choppednscrewed',
        desc: 'Remixing technique that consists of skipping effects ("chopping") and dropping the tempo ("screwing").',
        hard: ['hiphop' , 'electronics'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Christian Hip Hop',
        id: 'christian-hiphop',
        desc: 'Employs lyrics with a pro-Christianity message to profess the performers faith, often to attract attention from new potential converts.',
        hard: ['hiphop' ],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Cloud Rap',
        id: 'cloud-rap',
        desc: 'Emerged in the early 2010s, known for its relaxed, dream-like, and reverb-heavy production style, taking influence from Chillwave, and producers obscure sample choices.',
        hard: ['hiphop', 'chillwave' ],
        soft: []
    },
]

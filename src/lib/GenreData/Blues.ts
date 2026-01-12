
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Blues = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Blues',
        id: 'blues',
        desc: 'Originated toward the end of the 19th century in African American communities in the United States, particularly the Deep South; drew on traditional Spirituals and Work Song; highly influential to the whole of Western popular music, Mostly using electric guitars nowadays.',
        hard: ['folk', 'rock'],
        soft: ['work-music']
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Acoustic Blues',
        id: 'acoustic-blues',
        desc: 'Developed as a king of more spiritual work and blues song, prominent as an early form of blues',
        hard: ['blues'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Acoustic Chicago Blues',
        id: 'acoustic-chicago-blues',
        desc: 'Unplugged Blues made in the Chicago region, primarily during the 1930s and 1940s.',
        hard: ['acoustic-blues'],
        dates: '1930s',
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Acoustic Texas Blues',
        id: 'acoustic-texas-blues',
        desc: 'Laid-back swing rhythms and guitar ornamentation, including solos.',
        hard: ['acoustic-blues', 'country-blues'],
        dates: '',
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Jug Band',
        id: 'jug-band',
        desc: 'Usually features a jug as the bass instrument as well as other homemade (or easily affordable) instruments, such as kazoos and washboards.',
        hard: ['acoustic-blues', 'american-folk'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Piedmont Blues',
        id: 'piedmont-blues',
        desc: 'Developed in the early 20th century in the southern Appalachian foothills and characterized by a syncopated but melodic Ragtime-based finger-picking acoustic guitar style.',
        hard: ['acoustic-blues', 'country-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Boogie Woogie',
        id: 'boogie-woogie',
        desc: 'Early, upbeat form of blues, characterized by a strong rhythm played on the piano, often with a walking bass line.',
        hard: ['blues'],
        dates: '',
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Country Blues',
        id: 'country-blues',
        desc: 'Various styles of Blues originating in the rural US South, typically relying on expressive vocal delivery and featuring simple, usually acoustic instrumentation.',
        hard: ['blues', 'country'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Delta Blues',
        id: 'delta-blues',
        desc: 'One of the earliest forms of Blues, named for the Mississippi Delta region of the United States where it developed, with a highly rhythmic style and a typical 12-bar structure.',
        hard: ['country-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Hill country Blues',
        id: 'hill-country-blues',
        desc: 'Emphasizes a steady hypnotic groove, sparse percussive and highly energetic guitar riffs, and often features meandering structures with unconventional and usually fewer chord changes compared to Delta Blues.',
        hard: ['country-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Electric Blues',
        id: 'electric-blues',
        desc: 'This genre emerged in the 1940s and 1950s, characterized by the use of electric guitars, harmonicas, and a strong rhythm section, often with a more aggressive sound than traditional acoustic blues.',
        hard: ['blues'],
        dates: '1940s',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'British Blues',
        id: 'british-blues',
        desc: 'Heavily influenced by the burgeoning United States Blues scene, particularly Chicago Blues.',
        hard: ['electric-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Chicago Blues',
        id: 'chicago-blues',
        desc: 'Heavily inspired by old-time rural blues, transferring it into a small band setup, while maintaining the rough and gritty edges of its ancestry.',
        hard: ['electric-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Electric Texas Blues',
        id: 'electric-texas-blues',
        desc: 'Originating in (but not limited to) Texas; includes Jazz influences like Swing rhythms and sometimes the addition of a horn section.',
        hard: ['electric-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Swamp Blues',
        id: 'swamp-blues',
        desc: 'Originated in Baton Rouge, Louisiana in the 1950s, with a laid-back and relaxed sound that takes influence from Zydeco and Cajun Music.',
        hard: ['electric-blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Fife and Drum Blues',
        id: 'fife-dnb-blues',
        desc: 'Rooted in martial Fife and Drum Corps music, originated among Afro-American communities in Mississippi.',
        hard: ['blues'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Jump Blues',
        id: 'jump-blues',
        desc: 'Emerged in the late 1930s with influence from Jazz styles such as Swing and Big Band, featuring fast tempos and raucous performances.',
        hard: ['blues'],
        dates: '1930s',
        soft: ['jazz', 'swing', 'big-band']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Piano Blues',
        id: 'piano-blues',
        desc: 'Blues music that prominently features the piano as the lead instrument, often incorporating elements of boogie-woogie and stride piano styles with a slower tempo',
        hard: ['blues'],
        dates: '',
        soft: ['jazz', 'swing', 'big-band']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Soul Blues',
        id: 'soul-blues',
        desc: 'Combined with soul incorporates with elements of gospel music, characterized by emotive vocals and a strong emphasis on melody and groove.',
        hard: ['blues', 'soul'],
        dates: '',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Vaudeville Blues',
        id: 'vaudeville-blues',
        desc: 'Blues with vaudeville and theatrical influences.',
        hard: ['blues'],
        soft: []
    }
]

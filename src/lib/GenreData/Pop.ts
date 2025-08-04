
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Pop = [
    {
        type: Type.Super,
        label: 'Pop',
        id: 'pop',
        hard: [],
        soft: [],
        desc: 'Umbrella of popular styles closely tied to mass production and mass marketing, focusing on catchiness and accessibility through melody, rhythm, lyrics, and hooks.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Adult contemporary',
        id: 'adult-contemporary',
        hard: [],
        soft: [],
        desc: 'Slow to midtempo with a light and soothing tone, emerged as a successful radio format in the late 1970s and early 1980s.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Afrobeats',
        id: 'afrobeats',
        hard: ['dancehall, pop-rap, contemporary-rnb'],
        soft: [],
        desc: 'Originated in West Africa during the early 2010s and includes elements from Pop Rap, Contemporary R&B, and Dancehall.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Afropiano',
        id: 'afropiano',
        hard: ['afrobeats'],
        soft: [],
        desc: 'Blends the easy-going, poppy, and melodic Afrobeats sound and rhythms with major Amapiano elements, like lush, jazzy, and laid-back atmospheres often featuring light piano chords.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Alté',
        id: 'alte',
        hard: ['afrobeats'],
        soft: [],
        desc: 'More subdued, atmospheric, minimalist, and eclectic production and vocal styles compared to earlier styles, as well as more socially conscious lyrics.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Alt-Pop',
        id: 'alt-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Emerged in the late 2000s and early 2010s, combines chart Pop conventions with alternative/indie genre sensibilities sometimes on a more minimal and contemplative atmosphere, often extracted from Alternative R&B.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Arabic-Pop',
        id: 'arabic-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Synthesis of Arabic Music with Western Pop melodies, almost always sung in Arabic and typically performed with Arabic instruments, alongside some Western instruments like the guitar.'
    },+
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Al jeel',
        id: 'al-jeel',
        hard: ['arabic-pop'],
        soft: [],
        desc: 'Emerged in the 1970s as an alternative to Shaabi, taking influence from foreign Pop and incorporating rhythms of Reggae while retaining a distinctly Egyptian sound.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Art-Pop',
        id: 'art-pop',
        hard: ['pop'],
        soft: ['avant-garde'],
        desc: 'Inventive, idiosyncratic, or artistically ambitious, often experimenting with unconventional musical elements and conceptual approaches while retaining accessibility.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Balkan-pop-folk',
        id: 'balkan-pop-folk',
        hard: ['pop'],
        soft: ['folk'],
        desc: 'Balkan popular music which blends Pop, Folk, and ethnic music.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Chalga',
        id: 'chalga',
        hard: ['balkan-pop-folk'],
        soft: ['folk'],
        desc: 'Bulgarian blend of Contemporary Folk (Turkish, Bulgarian, Arabic &amp; Romani) with Dance-Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Manele',
        id: 'manele',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Mixture of Romanian Music with Turkish, Middle Eastern, Balkan, and Romani influences, usually electronic in production.'
    },   {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Modern Laika',
        id: 'modern-laika',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Laiki music mixed with popular Western music, most notably pop and dance.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Musika popullore',
        id: 'musika-popullore',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Tradition in Albania consisting of light, commercial, amplified Albanian Folk Music usually professionally arranged and manufactured in recording studios alongside video clips.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'muzica-de-mahala',
        id: 'Muzică de mahala',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Appeared in the 1980s, incorporating modern instruments and based on the model of Balkan Pop-Folk in neighboring countries.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Skiladika',
        id: 'skiladika',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Greek popular artists who used more Arabian elements; originally a derogatory term used to refer to a more decadent side of Laika..'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tallava',
        id: 'tallava',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Mixture of Romani, Greek, Turkish, Albanian, and Slavic music, which incorporates Dance-Pop elements, and is very popular in Albania and Kosovo.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Turbo Folk',
        id: 'turbo-folk',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Originated in Serbia during the 1980s, fusing traditional Western Balkan Folk Music with elements of contemporary popular music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Baroque-Pop',
        id: 'baroque-pop',
        hard: ['pop'],
        soft: ['western-classical'],
        desc: 'Incorporates elements of Western Classical Music, commonly featuring harpsichord or strings as well as the rhythmic flow and counterpoint of Baroque Music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Blue-Eyed Soul',
        id: 'blue-eyed-soul',
        hard: ['pop'],
        soft: ['western-classical'],
        desc: 'Usually refers to a Pop or Pop Rock song that contains strong Gospel-like elements, primarily popularized by white American and British singers in the 1960s through the 1980s.'
    },
]
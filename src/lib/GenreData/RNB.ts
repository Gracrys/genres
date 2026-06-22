import { type IGenre } from "./GenreData"
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const RNB:IGenre[] = [
    {
        type: Type.Super,
        label: 'Rhythm and Blues',
        id: 'rnb',
        hard: [],
        soft: [],
        desc: 'Umbrella of popular styles closely tied to mass production and mass marketing, focusing on catchiness and accessibility through melody, rhythm, lyrics, and hooks.',
        dates: '1980',
        artists: 'Amy Winehouse, Nina Simone'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Beach Music',
        id: 'beach-music',
        hard: ['rnb'],
        soft: [],
        desc: 'Danceable 4/4 "blues shuffle" rhythmic structure, vocal harmonies, and moderate tempos.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Contemporary R&B',
        id: 'contemporary-rnb',
        hard: ['rnb'],
        soft: [],
        desc: 'Soulful, passionate and melismatic vocals originally derived from popular Soul and Disco, as well as smooth, lush and often synthesized production variously influenced by Hip Hop, Funk, and related strands of Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Alternative R&B',
        id: 'alternative-randb',
        hard: ['contemporary-rnb'],
        soft: [],
        desc: 'Deviating from the traditional styles of Contemporary R&B and featuring smooth, reverberated, Electronic-influenced production with heavy bass and often reverberated vocals.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Hip Hop Soul',
        id: 'hip-hop-soul',
        hard: ['contemporary-rnb'],
        soft: [],
        desc: 'Hip Hop-oriented style that evolved out of New Jack Swing in the early 1990s.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'New Jack Swing',
        id: 'new-jack-swing',
        hard: ['contemporary-rnb'],
        soft: [],
        desc: 'Mixes light Hip Hop & Funk production techniques with Contemporary R&B vocals and melodies as well as swinging and danceable drum grooves.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Trap Soul',
        id: 'trap-soul',
        hard: ['contemporary-rnb', 'trap'],
        soft: [],
        desc: 'Mixes passionate vocals derived from Contemporary R&B with laid-back, nocturnal and atmospheric Trap production.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'UK Street Soul',
        id: 'uk-street-soul',
        hard: ['contemporary-rnb', 'soul'],
        soft: [],
        desc: 'Emerged in the late 1980s and early 1990s; combines raw basslines and breakbeats with Contemporary R&B/Soul vocals.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Funk',
        id: 'funk',
        hard: ['rnb', 'jazz', 'soul'],
        soft: [],
        desc: 'Danceable, syncopated grooves carried by bass and drums alongside percussive guitar, keyboard, and/or horn parts, with rhythmic emphasis on the downbeat.',
        artists: 'Herbie Hancock, Talking heads, Miles Davis'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Britfunk',
        id: 'britfunk',
        hard: ['funk'],
        soft: [],
        desc: 'Energetic, up-tempo style born out of late-1970s British Jazz-Funk nightclubs.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Deep Funk',
        id: 'deep-funk',
        hard: ['funk'],
        soft: [],
        desc: 'Focuses more on grooves and rhythm than songwriting.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Go-Go',
        id: 'go-go',
        hard: ['funk'],
        soft: [],
        desc: 'Dominated by drums and percussion (primarily congas) with heavily syncopated rhythms, bursts of horns, and call-and-response vocals.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bounce Beat',
        id: 'bounce-beat',
        hard: ['go-go'],
        soft: [],
        desc: 'Modernized, youth oriented form heavily utilizing rototoms, timbale and keyboards for grooves.'
    },
 
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Latin Funk',
        id: 'latin-funk',
        hard: ['funk', 'hispanic'],
        soft: [],
        desc: 'Funk combined with Hispanic American Music styles.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'P-Funk',
        id: 'p-funk',
        hard: ['funk'],
        soft: [],
        desc: 'Features a "fat", monotonic drum sound, spaced-out synthesizers, "squelchy" basslines, tight, syncopated horns, and sometimes heavy guitars.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Porn Groove',
        id: 'porn-groove',
        hard: ['funk'],
        soft: [],
        desc: 'Primarily found in the soundtracks to Pornographic films of the 1970s; characterized by a wah-wah electric guitar sound, slapped basslines, and minimal drums.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Synth Funk',
        id: 'synth-funk',
        hard: ['funk'],
        soft: [],
        desc: 'Stripped-down and futuristic, driven by synthesizer melodies and often incorporating drum machines.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Minneapolis Sound',
        id: 'minneapolis-sound',
        hard: ['synth-funk'],
        soft: [],
        desc: 'Emerged in late 1970s Minneapolis, characterized by glossy Contemporary R&B-influenced production techniques, angular New Wave-inspired rhythms, and a larger emphasis on electric guitar layers.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'New Orleans R&B',
        id: 'new-orleans-randb',
        hard: ['rnb'],
        soft: [],
        desc: 'Increased rhythmic complexity with added focus on piano and horns.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Rhythm & Blues',
        id: 'rhythm-and-blues',
        hard: ['rnb'],
        soft: [],
        desc: 'Predominantly African American style that retains the defined backbeats, Blues chord progressions/melodies and passionate singing/shouting of Jump Blues, while appealing more to an urban audience with smaller bands and reduced Jazz influence.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'British Rhythm & Blues',
        id: 'british-rhythm-and-blues',
        hard: ['rhythm-and-blues'],
        soft: [],
        desc: 'A style infusing Rock and R&B that was hugely popular in the United Kingdom between 1963 and 1966.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Doo-Wop',
        id: 'doo-wop',
        hard: ['rhythm-and-blues'],
        soft: [],
        desc: 'Heavy emphasis on male four-part harmonies and light instrumentation; peaked in popularity in the 1950s.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Swamp Pop',
        id: 'swamp-pop',
        hard: ['rhythm-and-blues'],
        soft: [],
        desc: 'Uniquely Cajun style of Rhythm & Blues distinguished by tripleted pianos and a slow Blues structure.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'West Side Sound',
        id: 'west-side-sound',
        hard: ['rhythm-and-blues'],
        soft: [],
        desc: 'Created in the 1950s by working-class Mexican-American teenagers in San Antonio, Texas, as a result of significant stylistic cross-pollination and an accommodating racial climate; features prominent tenor sax sections and Hammond organs.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Soul',
        id: 'soul',
        hard: ['rnb'],
        soft: [],
        desc: 'Originated in the African American culture of the 20th century, resulting from the combination of the ecstatic vocals of Gospel with the upbeat instrumentation of Rhythm & Blues, consisting of guitar, bass and percussion.',
        artists: 'Stevie Wonder, Sade, D\'angelo'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Chicago Soul',
        id: 'chicago-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Combination of the hard, groove-oriented rhythms of Southern Soul and the sophisticated gloss of the Motown Sound which was developed in Chicago.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Country Soul',
        id: 'country-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Combining the gritty horn-driven sound of Southern Soul with the textures and aesthetics of Country.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Deep Soul',
        id: 'deep-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Draws on the typical Southern Soul groove and accentuates the Gospel and Blues influence, particularly Chicago Blues.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Latin Soul',
        id: 'latin-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Soul combined with Hispanic American Music, such as Salsa and Mambo.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Neo-Soul',
        id: 'neo-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Emerged during the mid-to-late 1990s; defined by a combination of Soul with the rhythmic percussion and groove of Hip Hop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Philly Soul',
        id: 'philly-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Defined by lush arrangements, often borrowing upon the orchestral instrumentation seen on productions from the 1960s, with the commercial atmosphere exemplified by Pop Soul and the Motown Sound.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Progressive Soul',
        id: 'progressive-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Greater harmonic complexity, less conventional song structures, and conceptual, socially conscious or introspective lyrical themes, incorporating diverse influences and instrumentation from Jazz, Funk, Rock, and beyond.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Psychedelic Soul',
        id: 'psychedelic-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Soul which incorporates the effects and instrumentation of Psychedelic Rock.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Smooth Soul',
        id: 'smooth-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Slow tempo ballads with silky, often sensual, vocals and light, polished arrangements, creating an intimate, romantic atmosphere.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Southern Soul',
        id: 'southern-soul',
        hard: ['soul'],
        soft: [],
        desc: 'Soul primarily from the American South that was popular in the 1960s and 1970s, with a gritty and raw sound that places an emphasis on the groove, making it highly danceable.'
    },

]
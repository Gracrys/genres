

export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Metal = [{
    type: Type.Super,
    label: 'Heavy Metal',
    id: 'metal',
    hard: ['rock'],
    soft: ['blues-rock']
    ,desc: 'Heavier outgrowth of Hard Rock featuring greater distortion and intensity along with lesser Blues influences.'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Speed Metal',
    id: 'speed-metal',
    hard: ['metal'],
    soft: [],
    desc: 'Fast tempos, double-time feel, aggressive riffs, precise, often virtuosic soloing and expressive vocal styles.'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Power Metal',
    id: 'power-metal',
    hard: ['speed-metal'],
    soft: [],
    bands: 'Helloween, Galneryus, Kamelot',
    desc: 'Developed from Heavy Metal and Speed Metal; characterized by its emphasis on speed, vocal melody and harmonized lead guitars.'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Progressive Metal',
    id: 'progressive-metal',
    hard: ['metal'],
    soft: [],
    desc: 'Fuses amplified, guitar-driven sound with technical proficiency, virtuosity, complex compositions, innovative arrangements, eclecticism, and additional instrumentation.',
    bands: 'Dream theather, Tool, maudlin of the well, mastodon, opeth'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Thrash Metal',
    id: 'thrash-metal',
    hard: ['metal'],
    soft: [],
    bands: 'Metallica, megadeth, Pantera, Slayer, Sepultura'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Groove Metal',
    id: 'groove-metal',
    hard: ['thrash-metal'],
    soft: [],
    desc: 'Midtempo riffs influenced by Thrash Metal but with a greater focus on rhythmic syncopation and heaviness over speed, also involved with early electronics.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Technical Thrash Metal',
    id: 'technical-thrash-metal',
    hard: ['thrash-metal'],
    soft: [],
    desc: 'Places great emphasis on complex songwriting and demanding instrumental parts..'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Industrial Metal',
    id: 'industrial-metal',
    hard: [ 'metal', 'industrial'],
    soft: [],
    desc: 'Incorporates the abrasive and heavy sound of Industrial into Metal, using elements like synthesizers and drum machines.'
    ,bands: 'Rammstein, Fear Factory, Ministry, Godflesh, Killing Joke, White Zombie'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Cyber Metal',
    id: 'cyber-metal',
    hard: [ 'industrial-metal'],
    soft: [],
    desc: 'Originated around 1999, influenced by EBM and Aggrotech with more melodic and less repetitive riffs as well as harsh vocals',
    bands: 'Celldweller, Sybreed, Master boot record'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Neue Deutsche Härte',
    id: 'neue-deutsche-harte',
    hard: [ 'industrial-metal', 'alternative-metal'],
    soft: ['edm'],
    desc: 'Alternative Mtal and Industrial Metal that incorporates various aspects of electronic music, specifically Electronic Dance Music.',
    bands: 'Rammstein, Oomph, Megaherz, Hanzel und Gretyl, Eisbrecher'

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
    desc:'Highly distorted, treble-heavy guitars, tremolo-picked riffs, blast beats and double bass drumming, shrieked vocals, and raw, lo-fi production; often focuses on occult, dark imagery and atmosphere.',
    soft: [],
    bands: 'Agallock, Ulver, Burzum',
    dates: '1980s'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Atmospheric Black Metal',
    id: 'atmospheric-black-metal',
    hard: ['black-metal', 'noise', 'ambient'],
    soft: [],
    desc: 'Repetitive riffs and melodies, slower tempos, synthesized ambient textures, and guitar effects creating atmospheric soundscapes.',
    bands: 'Burzum, Gris'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'BlackGaze',
    id: 'blackgaze',
    hard: ['black-metal', 'shoegaze'],
    soft: [],
    dsc: 'Fuses tremolo-picked riffing, intnse drumming and harsh vocal techniques with mellow, dreamy textures, major-key melodies and extended build-ups.'
    ,bands: 'Deafheaven, Solstafir'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Black n\' roll ',
    id: 'black-roll',
    hard: ['black-metal', 'hard-rock', 'glam-rock'],
    soft: [],
    desc: 'Incorporates elements of Hard Rock, Glam Rock, and Heavy Metal.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Black Noise',
    id: 'black-noise',
    hard: ['black-metal', 'noise'],
    soft: [],
    desc: 'Incorporates unconventional sounds with overpowering or constant Noise and Black Metal elements, often being heavily texture-oriented, abrasive, dissonant, atonal, or repetitive.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dissonant Black Metal',
    id: 'dissonant-black-metal',
    hard: ['black-metal'],
    desc:'Dissonant atonal riffing, cleaner production style, and complex song structures.',
    soft: [],

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'DSBM',
    sub: 'Deppresive suicide black metal',
    id: 'dsbm',
    hard: ['black-metal', 'doom-metal'],
    desc:'Lethargic atmospheres; usually repetitive song structures and slow-mid tempos; high-pitched wailing and gruff vocals; and usage of non-distorted instruments like keyboards and acoustic guitars.',
    soft: [],
    bands: 'psychonaut 4, lifelover, forgotten tomb, gris'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melodic black metal',
    id: 'melodic-black-metal',
    hard: ['black-metal'],
    desc:'Cleaner production, more diverse arrangements, and a stronger emphasis on melody than is typical for Black Metal',
    soft: [],
    bands: 'Hollenthon, Solstafir, diabolical masquerade'

},
{
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Hellenic Black Metal',
    id: 'hellenic-black-metal',
    hard: ['black-metal'],
    desc:'Black metal scene in Greece with more mid-tempo songwriting and pronounced Heavy Metal influence',
    soft: [],
    bands:'Rotting christ'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Pagan black metal',
    id: 'pagan-black-metal',
    hard: ['black-metal'],
    desc:'Incorporates acoustic guitar and traditional instrument passages, cleanly sung vocals, folk songs&#39; melodies, and paganistic themes.',
    soft: ['celtic-folk'],
    bands: 'Negura Bunget'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Symphonic black metal',
    id: 'symphonic-black-metal',
    hard: ['black-metal', 'symphonic-metal'],
    desc:'Symphonic soundscapes, typically but not always synthesized.',
    soft: [''],
    bands: 'Cradle of filth, sigh, covenant'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'War metal',
    id: 'war-metal',
    hard: ['black-metal', 'death-metal'],
    desc:'Aggressive, chaotic, and heavily Death Metal-influenced, featuring muddy, bass-heavy production and often incorporating war-themed lyrics.',
    soft: [''],

},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Death Metal',
    id: 'death-metal',
    hard: ['metal'],
    soft: [],
    desc: 'Heavily distorted, down-tuned guitars, palm-muted, tremolo-picked riffs, double-kick and blast beat percussion, chromatic chord progressions, minor keys, abrupt changes in tempo, and guttural vocals',
    dates: '1980s',
    bands: 'death, carcass'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Brutal Death metal',
    id: 'brutal-death-metal',
    hard: ['death-metal'],
    desc:'Emphasizes abrasiveness, chunky rhythmic atonal riffs, and low guttural vocals.',
    soft: [''],
    bands: 'nile, Dying fetus'

},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Slam Death metal',
    id: 'slam-death-metal',
    hard: ['brutal-death-metal'],
    desc:'Focuses on slow or midtempo (as well as breakdown-style) sections built on chromatic, palm-muted riffs - so-called "slams"',
    soft: [''],
    bands: 'nile, Dying fetus'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Death n\' metal',
    id: 'death-roll',
    hard: ['death-metal'],
    desc:'Incorporates a groove-oriented, Hard Rock-influenced approach while retaining heavily distorted rhythm guitars and gruff or occasionally growled vocals.',
    soft: [''],

},{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Deathgrind',
    id: 'deathgrind',
    hard: ['death-metal', 'grindcore'],
    desc:'Combines the intensity and high-pitched screams of Grindcore with the technicality and low guttural vocals of Death Metal.',
    soft: [''],

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Technical Death Metal',
    id: 'technical-death-metal',
    hard: ['death-metal'],
    desc:'Focuses on challenging, demanding songwriting and instrumental skill.',
    soft: [''],

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dissonant Death Metal',
    id: 'dissonant-death-metal',
    hard: ['technical-death-metal'],
    desc:'Emphasizes discordant, dense songwriting and utilizes pinch harmonics, scratchy guitar leads, and atonality.',
    soft: [''],

},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Djent',
    id: 'djent',
    hard: ['metal'],
    soft: [],
    desc: 'Groovy polymeters, syncopated power chord chugs, palm-muted, distorted guitars, and significant focus on production and tone.'
    , bands: 'Meshuggah, periphery, tesseract'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Doom Metal',
    id: 'doom-metal',
    hard: ['metal'],
    soft: [],
    desc: 'Plodding tempos, repeated chords, and thick, distorted, down-tuned guitars in a style focused on foreboding, atmosphere, and tension.',
    bands: 'Black Sabbath, Sleep, Katatonia'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Death Doom Metal',
    id: 'death-doom-metal',
    hard: ['doom-metal', 'death-metal'],
    soft: [],
    desc: 'Fuses down-tuned guitars, growled vocals, and aggressive, often double-kick drumming with a mournful, somber atmosphere and plodding tempos.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funeral Doom Metal',
    id: 'funeral-doom-metal',
    hard: ['doom-metal'],
    soft: [],
    desc: 'Features exceptionally slow, funeral dirge-like tempos, heavily distorted, sluggish guitars, mournful atmosphere, and distant, hushed growls and grunts.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Traditional Doom Metal',
    id: 'traditional-doom-metal',
    hard: ['doom-metal'],
    soft: ['psychodelic-rock','blues-rock'],
    desc: 'Monotonous and heavy playing style; repetitive, rough, and sometimes atonal guitar riffs; a "rocking to sleep bass; and influences from both Blues Rock and Psychedelic Rock..',
    bands: 'Pentagram'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Epic Doom Metal',
    id: 'epic-doom-metal',
    hard: ['traditional-doom-metal'],
    soft: ['psychodelic-rock','blues-rock'],
    desc: 'Emphasizes Heavy Metal influence and theatrical vocals.',
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Doomgaze',
    id: 'doomgaze',
    hard: ['doom-metal', 'shoegaze'],
    soft: [],
    desc: 'Gloomy and sombre atmosphere, amplified by the slow tempo and melancholy of Doom Metal, combined with the effects, washes of sound, and vocals found within Shoegaze.',
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Drone Metal',
    id: 'drone-metal',
    hard: ['metal', 'drone'],
    soft: [],
    desc: 'Extremely slow tempos, highly sustained, repetitive guitar notes, and minimalist song structures often omitting a traditional rhythm section and vocals.',
    bands: 'Boris, Sunn o))'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Folk Metal',
    id: 'folk-metal',
    hard: ['metal', 'folk'],
    soft: [],
    desc: 'Features influences from various types of Traditional Folk Music expressed through melodies and/or traditional instrumentation, notably having a large scene in Europe.',
    bands: 'Agalloch, Thy Catafalque, moonsorrow'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Celtic Metal',
    id: 'celtic-metal',
    hard: ['folk-metal', 'celtic-folk'],
    soft: [],
    desc: 'Features Celtic Folk Music elements.',
    bands: 'Eluveitie, Elvenking, Mago de Oz, Alestorm'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Mittelalter Metal',
    id: 'mittelalter-metal',
    hard: ['folk-metal'],
    soft: [],
    desc: 'Emerged as a metallic style in the mid-to-late 1990s from the German Neo-Medieval movement.',
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Gothic Metal',
    id: 'gothic-metal',
    hard: ['metal', 'gothic'],
    soft: ['symphonic-metal'],
    desc: 'Features heavy, low-mid tempo riffs, somber, gloomy atmosphere accentuated by ethereal keyboards and synthesizer layers, and vocal styles ranging from raspy growls to female operatic singing.'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'NeoClassical Metal',
    id: 'neoclassical-metal',
    hard: ['metal', 'western-classical'],
    soft: [],
    desc: 'Greatly influenced by Western Classical Music in its style of playing and composing',
    bands: 'Haggard'
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Stoner Metal',
    id: 'stoner-metal',
    hard: ['metal', 'psychodelia'],
    soft: ['doom-metal'],
    desc: 'Combines elements of Doom Metal with elements of Psychedelic Rock and Blues Rock to create a melodic yet heavy sound.',
    bands: 'Electric Wizard, sleep, down, high on fire, kyuss, kylesa'
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Sludge Metal',
    id: 'sludge-metal',
    hard: ['stoner-metal', 'doom-metal'],
    soft: ['hardcore'],
    desc: 'Mixes Doom Metal\'s slow pacing, down-tuned riffing style and dark atmosphere with Hardcore Punk&#39;s aggression, abrasiveness and harsh vocals.' ,
    bands: 'Kylesa, Sigh, Neurosis, cult of luna '
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Atmospheric Sludge Metal',
    id: 'atmospheric-sludge-metal',
    hard: ['sludge-metal'],
    soft: [],
    bands: 'Isis, cult of luna, rosetta, amenra',
    desc: 'Combines slow, churning guitar riffs and thunderous percussion with dark, extensive otherworldly sonic landscapes.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Trance Metal',
    id: 'trance-metal',
    hard: ['metal', 'trance'],
    soft: [],
    desc: 'Tempo between 130 and 160 BPM, played with keyboards and metal instrumentation, sung with harsh and aggressive vocals including many clean melodic styles; regularly uses elements of Melodic Death Metal, Symphonic Metal, and Electronic Dance Music.' ,
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Viking Metal',
    id: 'viking-metal',
    hard: ['metal'],
    soft: [],
    desc: 'Developed out of Black Metal and embodies an epic, Viking-like aesthetic.' ,
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Symphonic Metal',
    id: 'symphonic-metal',
    hard: ['metal'],
    soft: [],
    desc: 'Incorporates elements of symphonic and Orchestral Music.' ,
},
{
    type: Type.Scene,
    parent: Type.Super,
    label: 'NWOBHM',
    id: 'nwobhm',
    hard: ['heavy-metal', 'thrash-metal'],
    soft: []
},
{
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Kawaii Metal',
    id: 'kawaii-metal',
    hard: ['alternative-metal', 'metalcore', 'j-pop'],
    soft: [],

    desc: 'Fuses various Metal substyles with J-Pop&#39;s upbeat melodicism and song structures, utilizing kawaii lyricism and an idol music aesthetic.'
},
]


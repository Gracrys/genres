import { findRepeatingElements } from "$lib/Utils/CheckDuplicates"

export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Step = [
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Techstep',
        id: 'techstep',
    desc: 'Futuristic, dark, and gritty sound; quantized and compressed drum breaks, distorted bass lines, and a focus on a sci-fi atmosphere and sampling sources.',
        hard: ['dnb'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Trancestep',
        id: 'trancestep',
    desc: 'Combination of Trance melodies and structure with the breakbeats, fast tempos, and rolling basslines of Drum and Bass.',
        hard: ['dnb', 'trance'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Darkstep',
        id: 'darkstep',
    desc: 'Hard, uptempo and uses heavy breakbeats, Post-Industrial-influenced sound design, and horror movie samples to create a sinister, claustrophobic atmosphere.',
        hard: ['dnb'],
        soft: ['post-industrial']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Crossbreed',
        id: 'crossbreed',
    desc: 'Harsh and dense mixture of Darkstep with Hardcore [EDM] developed in the late 2000s.',
        hard: ['darkstep', 'hardcore-electronics'],
        soft: [],
        artists: 'enduser'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Skullstep',
        id: 'skullstep',
    desc: 'Repetitious, aggressive, off-beat rhythms often programmed using distorted, harsh, and noisy percussion that usually resembles clangy "pots and pans", machine gun-like snares.',
        hard: ['darkstep'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Drumfunk',
        id: 'drumfunk',
    desc: 'Focuses on complex drum beats made to emulate live recordings.',
        hard: ['dnb'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Drumstep',
        id: 'drumstep',
    desc: 'Dancefloor-friendly, loud, and heavy combination of the drum programming of Jump-Up with the half-time tempo and midrange LFO wobble of Brostep.',
        hard: ['dnb', 'brostep'],
        artists: 'Excision, Bassnectar, modestep',
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Harstep',
        id: 'hardstep',
    desc: 'Very compressed and sparse drumming, extensive use of kick drums and gritty, minimalistic production style with emphasis on simple, deep, modulated bass patterns.',
        hard: ['dnb'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Jazzstep',
        id: 'jazzstep',
    desc: 'Very compressed and sparse drumming, extensive use of kick drums and gritty, minimalistic production style with emphasis on simple, deep, modulated bass patterns.',
        hard: ['dnb', 'jazz'],
        soft: []
    },
    
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Dubstep',
    id: 'dubstep',
    dates: '1998',
    hard: ['dnb', 'dub'],
    soft: [],
    desc: 'Half-time syncopated and sparse beats set around 140 BPM with heavy sub-basses; emerged in South London in the early 2000s.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Brostep',
    id: 'brostep',
    hard: ['dubstep'],
    soft: [],
    desc: 'Offshoot of Dubstep which replaces its sub-bass-oriented sound with an emphasis on catchy or aggressive mid-range melodies, more of a pop style.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Briddim',
    id: 'briddim',
    hard: ['brostep'],
    soft: [],
    desc: 'Combining the kick-clap rhythms and syncopation of Riddim with Brostep sound design.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Colour Bass',
    id: 'colour-bass',
    hard: ['brostep', 'future-bass'],
    soft: [],
    desc: 'Combines aggressive wobbling basses with the euphoric drops of Melodic Dubstep and Future Bass.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Deathstep',
    id: 'deathstep',
    hard: ['brostep'],
    soft: ['metalcore', 'death-metal'],
    desc: 'Darker, heavier form of Brostep that uses "machine gun" basses, atonal synths, and elements from genres like Death Metal and Metalcore.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Minatory',
    id: 'minatory',
    hard: ['brostep'],
    soft: [],
    desc: 'Extreme, experimental style of Deathstep, with a harsh sound and sudden BPM changes.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Tearout',
    sub: '(brostep)',
    id: 'tearout',
    hard: ['brostep', 'deathstep'],
    soft: [],
    desc: 'Heavy and distorted, closely affiliated with Deathstep and other styles of Brostep.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Chillstep',
    id: 'chillstep',
    hard: ['dubstep'],
    soft: ['downtempo', 'ambient'],
    desc: 'Relaxed Dubstep influenced by Downtempo and Ambient.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dungeon Sound',
    id: 'dungeon-sound',
    hard: ['dubstep'],
    soft: [],
    desc: 'Relaxed Dubstep influenced by Downtempo and Ambient.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melodic Dubstep',
    id: 'melodic-dubstep',
    hard: ['dubstep'],
    soft: [],
    desc: 'Melodious, tuneful drops, rich, lush synth leads, powerful stretched chords, and light and harmonious sound design.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Purple Sound',
    id: 'purple-sound',
    hard: ['dubstep', 'grime'],
    soft: ['synth-funk'],
    desc: 'Emerged in the late 2000s out of the Dubstep scene of the time, incorporating synth leads and basslines inspired by 1980s Synth Funk and 1990s G-Funk, and Video Game Music, into a rhythmic palette mostly derived from dubstep and Grime.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Riddim',
    id: 'riddim',
    hard: ['dubstep', 'grime'],
    soft: ['synth-funk'],
    desc: 'Repetitive and relatively simplistic style inspired by mid-to-late-2000s UK Dubstep, often using robotic and/or squishy sound design along with bouncy square basses and less prominent buildups.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Future Riddim',
    id: 'future-riddim',
    hard: ['riddim'],
    soft: [],
    desc: 'Melodic and futuristic style inspired by Future Bass, and to a lesser extent Colour Bass and Melodic Dubstep.'
},

]

export const DnB = [{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Drum and Bass',
    id: 'dnb',
    sub: 'DnB',
    desc: 'Fast, syncopated breakbeat patterns (often sampled or programmed) with prominent basslines, commonly within the 160-180 BPM range.',
    hard: ['breakbeat', 'techno'],
    artists: 'noisia, squarepusher, pendulum',
    soft: ['chiptune']
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Atmospheric Drum and bass',
    id: 'atmospheric-dnb',
desc: 'Prominent in the mid-1990s, uses faster, de-emphasized breakbeats, and places a greater focus on melodic elements such as slow, warm basslines and atmospheric melodies inspired by Ambient and Ambient House.',
    hard: ['dnb'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dancefloor Drum and bass',
    id: 'dancefloor-dnb',
desc: 'Emerged in the late 2000s as a more accessible and polished style with melodic, prominent synth leads derived from Jump-Up and punchy, often synthesized drums.',
    hard: ['dnb'],
    soft: []
},

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dubwise Drum and bass',
    id: 'dubwise-dnb',
desc: 'Implementing Reggae and Dub influences, usually vocal dubs, delay effects, and reggae instrumentation, with the clean production and rhythms of post-2000s styles..',
    hard: ['dnb', 'dub'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Footwork Jungle',
    id: 'footwork-jungle',
desc: 'Combining Footwork\'s archetypal percussion, skittering drum fills, handclaps, and syncopated rhythms, with Drum and Bass drum programming and breakbeats, merging the two into unconventional, frantic drumming and dense, off-kilter rhythms.',
    hard: ['dnb', 'dub'],
    soft: ['jungle']
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Halftime',
    id: 'halftime',
desc: 'Offshoot of Drum and Bass (mainly Neurofunk) characterized by off-kilter rhythms playing at around 80-85 BPM (half of normal DnB pace), influenced by Dubstep, Wonky, Trap [EDM], and Hip Hop.',
    hard: ['dnb', 'neurofunk'],
    soft: ['dubstep']
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Jump-up',
    id: 'jump-up',
desc: 'Emerged in the mid-1990s, characterized by loud "wobbling" basslines, simpler drum loops, and a light-hearted and warm sound.',
    hard: ['dnb', 'jazz'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Liquid Drum and bass',
    id: 'liquid-dnb',
desc: 'Atmospheric and melodic genre that developed in the early 2000s; utilizes polished and smooth production, simpler structures, and originally sampled Funk and Soul.',
    hard: ['dnb', 'funk'],
    artists: 'pendulum',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Sambass',
    id: 'sambass',
desc: 'Combines Drum and Bass tempos and drum patterns, in addition to its Funk and Soul influences, with various styles of Brazilian Music.',
    hard: ['dnb', 'funk'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Minimal Drum and bass',
    id: 'minimal-dnb',
desc: 'Drum and Bass which strips down the sound as far as it can go without wholly ceasing to be drum and bass.',
    hard: ['dnb'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Neurofunk',
    id: 'neurofunk',
desc: 'Focuses on technical songwriting with warped, complex bass sounds, distorted and modulated synths (often with repeated stabs over the basslines), and dark but clean production.',
    hard: ['dnb'],
    soft: []
},
...Step
]

export const Breakbeat = [{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Breakbeat',
    id: 'breakbeat',
    hard: ['edm', 'hiphop'],
    soft: ['funk'],
    desc: 'Umbrella of affiliated Electronic Dance Music styles broadly featuring prominent syncopated drum patterns (called breakbeats) that emerged from Breakbeat Hardcore\'s initial influence, not including styles directly related to Drum and Bass and Jungle.',   
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Acid Breaks',
    id: 'acid-breaks',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Incorporates prominent "squelching", resonant low pass filter sounds typical to Acid House, and often other "trippy" effects into intense, syncopated, broken rhythms in the tempos of 110-150 BPM.',    
},{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Baltimore Club',
    id: 'baltimore-club',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Drew on the "booty bass" syncopation of Miami Bass, combined with Breakbeat rhythms around 130 BPM and chopped up vocal samples as found in Ghetto House.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Big Beat',
    id: 'big-beat',
    hard: ['breakbeat'],
    artists: 'The prodigy',
    soft: [],
    desc: 'Popular in Britain during the late 1990s, driven by edited breakbeats and prominent basslines.',    
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Breakbeat Hardcore',
    id: 'breakbeat-hardcore',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Originated from the combination of sampled breakbeats and energetic rhythms with the "rave" influences set by early-1990s Techno and Acid House, including upbeat "stab" riffing and sample-based production.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Darkside',
    id: 'darkside',
    hard: ['breakbeat-hardcore'],
    soft: [],
    desc: 'Dark atmosphere and fast rhythms; served as a forerunner of Drum and Bass.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Hardcore Breaks',
    id: 'hardcore-breaks',
    hard: ['breakbeat-hardcore'],
    soft: [],
    desc: 'Revival of Breakbeat Hardcore which emerged in the 2000s, bringing in modern influences and production techniques.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Florida Breaks',
    id: 'florida-breaks',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Developed during the mid-1990s, combining major influences of Hip Hop derivatives such as Miami Bass and Electro along with elements of 1990s Electronic Dance Music genres like House or Techno.',    
},

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funky Breaks',
    id: 'funky-breaks',
    hard: ['breakbeat', 'funk'],
    soft: [],
    desc: 'Merging popular 1990s breaks styles like Big Beat with major Funk and Soul elements.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Nu School Breaks',
    id: 'nu-school-breaks',
    hard: ['breakbeat', 'dnb', 'techno', 'uk-garage'],
    soft: [],
    desc: 'Developed in the late 1990s and early 2000s; takes elements from Drum and Bass, UK Garage, and Techno.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Progressive Breaks',
    id: 'prog-breaks',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Derivative of Progressive House that incorporates its lush, melodic synth leads and atmospheres into Breakbeat\'s syncopated and broken rhythms.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'PsyBreaks',
    id: 'psybreaks',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Uses Psytrance-derived sound design, such as squelchy sounds and psychedelic effects.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'West Coast Breaks',
    id: 'west-coast-breaks',
    hard: ['breakbeat'],
    soft: ['hiphop', 'trance', 'techno'],
    desc: 'Combines the earlier breakbeats of Hip Hop and early Breakbeat or even Miami Bass, with various 1990s Electronic Dance Music genres like Trance and Techno.',    
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Broken Beat',
    id: 'broken-beat',
    dates: '1997',
    hard: ['edm', 'jazz'],
    soft: ['hiphop', 'trance', 'triphop', 'dnb'],
    artists: 'Nightmares on wax, faithless',
    desc: 'Combines the earlier breakbeats of Hip Hop and early Breakbeat or even Miami Bass, with various 1990s Electronic Dance Music genres like Trance and Techno.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Bubblegum Bass',
    id: 'bubblegum-bass',
    hard: ['edm'],
    soft: ['pop'],
    desc: 'Originated in the early 2010s, exaggerating the cutest and most feminine parts of 2000s Pop and combining them with bouncy, plastic synths over rhythms and sounds derived from a variety of contemporary club styles.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Bubbling',
    id: 'bubbling',
    hard: ['edm'],
    soft: ['dancehall'],
    desc: 'Originated in the early 2010s, exaggerating the cutest and most feminine parts of 2000s Pop and combining them with bouncy, plastic synths over rhythms and sounds derived from a variety of contemporary club styles.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Budots',
    id: 'budots',
    hard: ['edm'],
    soft: [''],
    desc: 'Originated from the southern Philippines; notable for its distinct high-pitched synth hooks.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Coupé-décalé',
    id: 'coupe-decale',
    hard: ['edm'],
    soft: [''],
    desc: 'Bass-heavy and minimal style of Ivorian popular dance music, drawing heavily from Zouglou and Congolese rhythms..',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Cruise',
    id: 'cruise',
    hard: ['edm'],
    soft: ['chopped'],
    desc: 'Fast-paced Nigerian dance music, utilising chopped, often humorous, samples.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dariacore',
    id: 'dariacore',
    hard: ['edm'],
    soft: ['future-bass', 'nightcore'],
    desc: 'Focused on prominent vocal samples, chaotic and distorted production, hard and noisy basslines reminiscent of Future Bass, elements of Mashup, Nightcore and Jersey Club, and humorous meme clips.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Deconstructed Club',
    id: 'deconstructed-club',
    hard: ['edm', 'post-industrial'],
    soft: [],
    desc: 'Emerged in the 2010s as the hybridization of diverse Electronic Dance Music genres with an abrasive Post-Industrial sound',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Digital Cumbia',
    id: 'digital-cumbia',
    hard: ['edm', 'cumbia'],
    soft: [],
    desc: 'Mixes an Electronic sound into traditional Cumbia through influences from House, Dancehall, Hyphy, and Dubstep.',    
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Jungle',
    id: 'jungle',
    hard: ['breakbeat-hardcore'],
    soft: [],
    desc: 'Developed in the early 1990s from Breakbeat Hardcore, featuring rapid, chaotic-sounding breakbeats and strong basslines; known as the forerunner of most Drum and Bass styles.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ragga Jungle',
    id: 'ragga-jungle',
    hard: ['breakbeat-hardcore', 'ragga'],
    soft: [],
    desc: 'Developed in the early 1990s in London, combining Jungle breakbeats with heavy influence from Ragga.'
},
...DnB,


{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Breakcore',
    id: 'breakcore',
    hard: ['breakbeat', 'hardcore-electronics', 'dnb', 'industrial', 'glitch'],
    soft: [],
    artists: 'Igorr, shoebill, sewerslvt, venetian Snares',
    desc: 'Mixes Hardcore [EDM] with cut-up, complex, and frequently noisy breakbeats at very high tempos inspired by Jungle and Drum and Bass, often with heavy use of sampling.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'lolicore',
    id: 'lolicore',
    hard: ['breakcore'],
    soft: ['nightcore'],
    artists: 'sewerslvt, cynthoni, goreshit',
    desc: 'Heavily distorted or high-pitched anime vocal samples and complex cut-up breakbeats with extreme tempos. Uses anime loli aesthetic, voices and nightcore influences',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Mashcore',
    id: 'mashcore',
    hard: ['breakcore'],
    soft: ['pop'],
    desc: 'Sampling, particularly from Pop and Electronic Dance Music, as well as playful melodies, hard kicks, and the typical breakcore breakbeats.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Raggacore',
    id: 'raggacore',
    hard: ['breakcore','ragga', 'dancehall'],
    soft: ['jungle', 'dub'],
    desc: 'Prominently incorporates samples from Ragga and Dancehall, typically through shouted vocal lines and Reggae-influenced instrumentals.',    
},

{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Darkcore',
    id: 'darkcore',
    hard: ['breakcore','industrial hardcore'],
    soft: [],
    desc: 'Prominently incorporates samples from Ragga and Dancehall, typically through shouted vocal lines and Reggae-influenced instrumentals.',    
},

]

export const EDM = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'EDM',
        sub: 'Electronic dance Music',
        id: 'edm',
        hard: ['electronics'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'IDM',
        sub: 'Intelligent dance Music',
        id: 'idm',
        hard: ['edm'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Artcore',
        id: 'artcore',
        hard: ['edm', 'epic-music', 'avant-garde'],
        soft: ['trance', 'ambient', 'classical']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Balani Show',
        id: 'balani-show',
        hard: ['edm'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Balearic Beat',
        id: 'balearic-beat',
        hard: ['edm'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Bérite Club',
        id: 'berite-club',
        hard: ['edm'],
        soft: []
    },
    ...Breakbeat,
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Electronic Body Music',
        sub: 'EBM',
        id: 'ebm',
        hard: ['edm'],
        soft: ['post-industrial'],
        desc: 'Melodic and dancefloor-friendly take on Post-Industrial music that developed in the early 1980s.'
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Futurepop',
        id: 'futurepop',
        hard: ['edm', 'synthpop'],
        soft: [],
        desc: 'Derivative of EBM, retaining its apocalyptic worldview but incorporating heavy influence from the melodic style of Synthpop.'
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'New Beat',
        id: 'new-beat',
        hard: ['edm', 'synthpop'],
        soft: [],
        desc: 'Emerged in the mid-1980s in Belgium; characterized by dark basslines, hard-hitting grooves and a slow tempo.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Hard Drum',
        id: 'hard-drum',
        hard: ['edm'],
        soft: [],
        desc: 'Highly percussive, syncopated rhythms, influences from global contemporary genres, and lack of melodic elements, with a tempo lingering around 130 BPM'
    },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Hardvapour',
    id: 'hardvapour',
    hard: ['edm', 'techno'],
    soft: [],
    desc: 'Influenced by Hardcore [EDM] and Techno and made in response to the Vaporwave movement.'
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Hardvawe',
    id: 'hardvawe',
    hard: ['edm', 'trance', 'hardstyle', 'wave'],
    soft: [],
    desc: 'Harder, festival-oriented offshoot of Wave, combining its &#34;reese&#34; basses and icy synths with Trap [EDM] drum patterns, build-up-drop structures, and fuller sound influenced by Trance and Hardstyle.'
},

    {
        type: Type.Scene,
        parent: Type.Genre,
        label: 'Anime music',
        id: 'dojin',
        sub: 'Dōjin',
        hard: ['artcore', 'lolicore', 'kawaii-future-bass'],
        desc: 'Refers to a scene of people with alike tastes in literature, anime and media, in this context refers to japanese western culture movement which captures mostly anime and manga.',
        soft: []
    },
]

export const Hardstyle = [
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Hard Dance',
        id: 'hard-dance',
        hard: ['edm','trance', 'hard-house'],
        soft: [],
        desc: 'Umbrella term for EDM mainly developed out of Hard Trance and UK Hard House; usually characterized by fast tempos, hard kick drums and a &#34;bouncy&#34; syncopated groove.',    
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Hardstyle',
        id: 'hardstyle',
        hard: ['hard-dance'],
        soft: [],
        desc: 'Hard, four-on-the-floor kick drums, fast tempo around 150 BPM, reverse bass and harsh, distorted synths.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dubstyle',
        id: 'dubstyle',
        hard: ['hardstyle', 'dubstep'],
        soft: [],
        desc: 'Characterized by the incorporation of the half-time rhythms and wobbly basslines of Dubstep.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Psystyle',
        id: 'psystyle',
        hard: ['hardstyle', 'psytrance'],
        soft: [],
        desc: 'Prominent Psytrance influences, especially the basslines and energy of mainstream psytrance.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Rawstyle',
        id: 'rawstyle',
        hard: ['hardstyle'],
        soft: ['hardcore-electronics'],
        desc: 'Incorporates earlier Hardstyle and Hardcore [EDM] influences into the sound of 2010s hardstyle, creating a distinctly harsh, simplistic, raw, and dark sound, with fast BPM.',    
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rawphoric',
        id: 'rawphoric',
        hard: ['rawstyle'],
        soft: [],
        desc: 'Combines raw harsh kicks with the uplifting melodies of Euphoric Hardstyle.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Hard Trance',
        id: 'hard-trance',
        hard: ['hard-dance', 'trance'],
        soft: [],
        desc: 'Rave-oriented form of Trance infusing its atmospheres with faster, thumping rhythms and strong melodic / bassline sections, initially spawning out of the first wave in early-1990s Western Europe.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Jumpstyle',
        id: 'jumpstyle',
        hard: ['hard-dance'],
        soft: [],
        desc: 'Features a heavy 909 kick drum, four-on-the-floor beat, and a tempo between 140 and 150 BPM.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Lento Violento',
        id: 'lento-violento',
        hard: ['hard-dance', 'hardcore-electronics', 'hardstyle'],
        soft: [],
        desc: 'Features a &#34;slow and violent&#34; sound between 70-120 BPM with hard kicks inspired by Hardcore [EDM] and Hardstyle.',    
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'NRG',
        id: 'nrg',
        hard: ['hard-dance', 'uk-hard-house'],
        soft: [],
        desc: 'Derived from UK Hard House; featuring darker, more anthemic Trance beats and a tempo of 155-165 BPM.',    
    },

]

export const Bass = [
    {
        parent: Type.Genre,
        type: Type.Genre,
        label: 'Bass',
        sub: 'Bass EDM',
        id: 'bass',
        hard: ['edm'],
        soft: []
    },

]


export const House = [{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'House',
    id: 'house',
    hard: ['edm'],
    soft: []

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'UK Hard House',
    id: 'uk-hard-house',
    hard: ['house', 'hard-dance'],
    soft: [],
    desc: "Defined by offbeat bass patterns, compressed 909-style drums, buildup-drop structures, hoover sounds, and tempos between 120 and 155 BPM.",
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Scouse House',
    id: 'scouse-house',
    desc: 'Features an upbeat and energetic sound often described as being bouncy, influenced somewhat by Happy Hardcore.',
    hard: ['uk-hard-house'],
    soft: ['happy-hardcore']

},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Hardbass',
    id: 'hardbass',
    desc: 'Bouncy hard bass beats, fast tempo, usually 150-175 BPM, and occasional lyrics or rapping.',
    hard: ['scouse-house'],
    soft: []

},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Speed House',
    id: 'speed-house',
    desc: 'Mixes busy, dirty sound design and intense drums derived from Bass House with fast tempos from 140-160 BPM, pumping basslines, and other UK Hard House influences.',
    hard: ['uk-hard-house'],
    soft: ['bass-house']

},
]

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





export const HardcoreElectronics = [{
            type: Type.Genre,
            parent: Type.Genre,
            label: 'Hardcore',
            id: 'hardcore-electronics',
            sub: '(electronics)',
            desc: 'Umbrella term for a wide variety of extremely fast-paced, energetic Electronic Dance Music styles that have been developed since the early 1990s.',
            hard: ['breakbeat'],
            soft: ['hardcore']
        
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Acidcore',
    desc: 'Developed out of the 1990s Acid Techno scene utilizing its prominence of &#34;acid&#34; TB-303 bassline sequences into more intense rhythms derived from earlier Hardcore [EDM], Gabber and Trance music.',
    id: 'acidcore',
    sub: '(electronics)',
    hard: ['hardcore-electronics','gabber', 'trance'],
    soft: []

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Deathchant Hardcore',
    id: 'deathchant-hardcore',
    hard: ['hardcore-electronics'],
    soft: ['gabber', 'hiphop'],
    desc: 'Took shape in the UK in the late 1990s and early 2000s, characterized by rapid rhythms with Gabber-influenced kicks, frequent use of breakbeats and Hip Hop-inspired sampling.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Digital Hardcore',
    id: 'digital-hardcore',
    hard: ['hardcore-electronics','hardcore'],
    soft: [],
    desc: 'High-tempo fusion of Hardcore Punk and Electronic, combining harsh vocals and electric guitars of the former with electronic instruments.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Freeform Hardcore',
    id: 'freeform-hardcore',
    hard: ['hardcore-electronics', 'trance'],
    soft: [],
    desc: 'Emerged in the mid-1990s, combining fast and hard-hitting rhythms with heavy influence from the synthesizers of Trance.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Frenchcore',
    id: 'frenchcore',
    hard: ['hardcore-electronics'],
    soft: [],
    desc: 'Off-beat, bouncy rhythmic patterns and tempos around the 200 BPM range.',    
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Gabber',
    id: 'gabber',
    hard: ['hardcore-electronics'],
    soft: [],
    bands:'Coakira',
    desc: 'Fast-paced and energetic, often in the 160-220 BPM range, with a hallmark of a distinctive distorted kick sound.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Nu Style Gabber',
    id: 'nu-style-gabber',
    hard: ['gabber'],
    soft: [],
    desc: 'Emerged near the end of the 1990s; deeper, more harmonic bassdrums with constant use of supersaw melodies, breakdown sections and slower tempos closer to the 150-180 BPM range.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Happy Hardcore',
    id: 'happy-hardcore',
    hard: ['hardcore-electronics'],
    soft: [],
    desc: 'Emerged in the 1990s from the UK Breakbeat Hardcore scene; characterized by saccharine vocals, uplifting piano riffs and spacey effects, gradually developing to emphasize extremely fast-paced four-on-the-floor beats.',    
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Bouncy Techno',
    id: 'bouncy-techno',
    hard: ['happy-hardcore'],
    soft: [],
    desc: 'Average tempo of 160 to 180 BPM, four-on-the-floor beats, melodic and repetitive synth melodies, drums with hard kicks, short breaks, progressive stomping rhythms, and offbeat notes.',    
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'UK Hardcore',
    id: 'uk-hardcore',
    hard: ['happy-hardcore', 'hard-dance'],
    soft: [],
    desc: 'Four-on-the-floor beat around 175 BPM, thick, prominent basslines, and uplifting synth leads, with a cleaner and more accessible sound than other forms of Hardcore [EDM].',    
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Powerstomp',
    id: 'powerstomp',
    hard: ['uk-hardcore'],
    soft: [],
    desc: 'Prominent, stomping, and slightly distorted kick, relentless, repetitive reverse basses on the offbeats (borrowed from Hardstyle) that drive the tracks, giving the genre its distinct energetic sound, and cacophonous, noisy riffs and synth leads.',    
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Hardtek',
    id: 'hardtek',
    hard: ['hardcore-electronics', 'hard-dance'],
    soft: [],
    desc: 'Modern version of the tribecore sound featuring deep alternating basses and festival EDM-influenced drops.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Raggatek',
    id: 'raggatek',
    hard: ['hardtek', 'reggae', 'ragga', 'dancehall'],
    soft: [],
    desc: 'Influenced by Reggae, Ragga and Dancehall, combining half-time instrumental sections with Hardtek&#39;s fast four-on-the-floor rhythms, as well as vocal samples, clean basslines and skank rhythms.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Industrial Hardcore',
    id: 'industrial-hardcore',
    hard: ['hardcore-electronics', 'industrial'],
    soft: ['gabber', 'doomcore', 'speedcore'],
    desc: 'Fuses the sonic palettes and aesthetics of Industrial with the intense rhythms of Gabber, Speedcore, Doomcore and other subsequent styles.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Speedcore',
    id: 'speedcore',
    hard: ['hardcore-electronics'],
    soft: [],
    desc: 'Exceedingly fast tempos, frequently above 300 BPM, and often aggressive themes and samples.',    
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Extratone',
    id: 'extratone',
    hard: ['speedcore'],
    soft: [],
    desc: 'Often sounds like a buzz or hum due to being set to at least 1000 BPM.',    
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Splittercore',
    id: 'splittercore',
    hard: ['speedcore'],
    soft: [],
    desc: 'Faster version of Speedcore with BPM ranging from around 600 to 1000.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Terrorcore',
    id: 'terrorcore',
    hard: ['hardcore-electronics'],
    soft: [],
    desc: 'Utilizes rhythms from earlier Gabber with a faster BPM (usually no more than 300) and darker approach.',    
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Uptempo Hardcore',
    id: 'uptempo-hardcore',
    hard: ['hardcore-electronics'],
    soft: ['rawstyle'],
    desc: 'Utilizes lo-fi production, harsh kicks, and elements borrowed from Rawstyle and other gritty Hardcore [EDM] styles while usually sitting at around 185-220 BPM.',    
},

]

export const Electronics = [
    {
        type: Type.Super,
        label: 'Electronics',
        id: 'electronics',
        hard: [],
        soft: ['electroacoustic']
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Electro',
        id: 'electro',
        hard: ['electronics'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Electro Industrial',
        id: 'electro-industrial',
        hard: ['electro', 'industrial'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Dark Electro',
        id: 'dark-electro',
        hard: ['electro-industrial', 'ebm'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Aggrotech',
        id: 'aggrotech',
        hard: ['dark-electro'],
        soft: ['hardcore']
    },
...EDM,
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Electro-Disco',
    id: 'electro-disco',
    hard: ['edm', 'disco'],
    desc: 'Disco instrumentation is largely - if not entirely - replaced by synthesizers and augmented with futuristic elements such as the vocoder.',
    soft: ['electro']
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Hi-NRG',
    id: 'hi-nrg',
    hard: ['electro-disco', 'nrg'],
    desc: 'Emerged in the late 1970s and quickly became the most popular form of Electronic Dance Music in the LGBT club scenes of San Francisco and New York, characterized by its uptempo, high-energy sound.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Italo-Disco',
    id: 'italo-disco',
    hard: ['electro-disco'],
    desc: 'Produced primarily in Italy and is characterized by the use of synthesizers, drum machines, and sometimes vocoders to create a mechanical, Electronic version of Disco with futuristic atmosphere.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Spacesynth',
    id: 'spacesynth',
    hard: ['italo-disco'],
    desc: 'Highly melodic, often instrumental futuristic strain, formed under the heavy influence of Space Disco, Progressive Electronic and, later, early Eurobeat.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Doskpop',
    id: 'doskpop',
    hard: ['spacesynth'],
    desc: 'Grew out of the Amiga Demoscene in the late 1980s with the imitation of Spacesynth in the context of the restrictions and aesthetics of Demostyle.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Red Disco',
    id: 'red-disco',
    hard: ['electro-disco'],
    desc: 'Continuum of various eclectic forms, derived mainly from late Euro-Disco, but also Italo-Disco, Hi-NRG and Eurobeat, and developed in the Soviet Union in the mid-to-late 1980s.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Space Disco',
    id: 'space-disco',
    hard: ['electro-disco'],
    desc: 'Emerged in Europe in the mid-to-late 1970s, characterized by layers of oscillating synth, space-oriented sound effects, and a futuristic sound inspired by contemporary sci-fi media.',
    soft: []
},{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Electro Latino',
    id: 'electro-latino',
    hard: ['edm', 'pop-latino'],
    desc: 'Mixes elements of Merengue and Reggaetón with polished production from mainstream House subgenres; often shares traits with Latin Pop, having anthemic melodies and verse-chorus structures.',
    soft: []
},{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Electro Swing',
    id: 'electro-swing',
    hard: ['edm', 'swing'],
    desc: 'Upbeat, energetic style that splices Swing with Electronic Dance Music, looking to recapture the atmosphere of late 1920s to mid-1940s Jazz within a more updated club-friendly medium.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Eurobeat',
    id: 'eurobeat',
    hard: ['edm'],
    desc: 'Fast-paced with roots in Hi-NRG and Italo-Disco; became mainly popular in Japan in the 1990s.',
    soft: ['hi-nrg', 'italo-disco']
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'J-Euro',
    id: 'j-euro',
    hard: ['eurobeat'],
    desc: 'Italian-oriented Japanese scene of Eurobeat, which emerged with Japanese-language covers of Italian songs in the early-to-mid-1990s.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Eurodance',
    id: 'eurodance',
    hard: ['edm'],
    desc: 'Takes elements of Euro-Disco, House, Techno, and Hi-NRG while featuring on-beat kick, hi-hat and snare sounds at around 110 to 150 bpm.',
    soft: ['hi-nrg', 'house', 'euro-disco', 'techno']
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Electroclash',
    id: 'electroclash',
    hard: ['edm'],
    desc: 'Draws from 1980s styles such as Electro, New Wave, and Electro-Disco combined with Techno, resulting in minimal, throbbing beats and basslines, buzzing synthesizer parts, vocoders and often monotone, half-spoken, half-sung vocals.',
    soft: ['electro', 'new-wave', 'electro-disco']
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Bubblegum-dance',
    id: 'bubblegum-dance',
    hard: ['eurodance'],
    desc: 'Playful, childlike style with a Bubblegum-like atmosphere that often incorporates high-pitched, light-hearted, and usually female-fronted vocals.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Italo-dance',
    id: 'italo-dance',
    hard: ['eurodance'],
    desc: 'Appeared in the 1990s after the decline of Italo-Disco, featuring rhythmic influence from that genre.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Flex Dance Music',
    id: 'flex-dance',
    hard: ['edm'],
    desc: 'Largely instrumental; infused with Electronic Dance Music elements.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Footwork',
    id: 'footwork',
    hard: ['edm'],
    desc: 'Extensive use of drum fills, tom drums, handclaps, and snares within fast-paced, highly syncopated beats not bound to a 4/4 kick rhythm.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Freestyle',
    id: 'freestyle',
    hard: ['edm'],
    desc: 'Electro-influenced; developed in Latino communities in New York and Miami in the 1980s, especially dominated by Latin Freestyle and its Latin influences',
    soft: ['electro']
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Latin Freestyle',
    id: 'latin-freestyle',
    hard: ['freestyle'],
    desc: 'Displays a heavy influence of Hispanic American Music alongside the Disco, Hip Hop, and Electro influences of Freestyle.',
    soft: ['disco', 'hiphop','electro']
},

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funk mandelão',
    id: 'funk-mandelao',
    hard: ['edm'],
    desc: '"Simple lyricism, raw and minimalistic production, and distinct drops with bursting bass.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Beat Bruxaria',
    id: 'beat-bruxaria',
    hard: ['funk-mandelao'],
    desc: 'São Paulo-originated Funk brasileiro with aggressive, distorted and high-pitched beats featuring minimalistic percussion and diversified sampling.',
    soft: []
},

{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Brazilian Phonk',
    id: 'brazilian-phonk',
    hard: ['funk-mandelao', 'funk', 'phonk'],
    desc: 'Merges Funk automotivo\'s rhythms, vocals, and energy, with the energetic and nocturnal production typical of the Drift Phonk scene, and Phonk House.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Funk Automotivo',
    id: 'funk-automotivo',
    hard: ['funk-mandelao'],
    desc: 'Catchy, repetitive synths accompanied by a strong four-on-the-floor kick and loud, reverberated vocals.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Ritmada',
    id: 'ritmada',
    hard: ['funk-mandelao'],
    desc: 'Short, repetitive and resonant beats with more danceable, immersive grooves drawn out of Afro-Brazilian instrumentation, a cleaner, more radio-friendly sound and greater focus on lyrics.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funkot',
    id: 'funkot',
    hard: ['edm'],
    desc: 'Fast-paced Indonesian form of Electronic Dance Music that combines Eurodance and Trance synths with the syncopated rhythm from Dangdut koplo.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Breakbeat Kota',
    id: 'breakbeat-kota',
    hard: ['funkot', 'breakbeat'],
    desc: 'Indonesian style that slows down the syncopated rhythms of Funkot to moderate tempos around 130 BPM.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Jungle Dutch',
    id: 'jungle-dutch',
    hard: ['breakbeat-kota'],
    desc: 'Combines the high-pitched synth leads of Dutch House with the frantic &#34;tribal&#34; rhythms of Jungle Terror.',
    soft: []
}, 
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Future Bass',
    id: 'future-bass ',
    hard: ['edm'],
    desc: 'Woozy, detuned synthesizers, 7th chords, harsh basslines, syncopated percussion with fast-paced hi-hats and a melodic, carefree atmosphere.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Kawaii Future Bass',
    id: 'kawaii-future-bass',
    hard: ['edm'],
    desc: 'Woozy, detuned synthesizers, 7th chords, harsh basslines, syncopated percussion with fast-paced hi-hats and a melodic, carefree atmosphere.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Future Core',
    id: 'future-core',
    hard: ['kawaii-future-bass', 'uk-hardcore'],
    desc: 'Blends the speed, basslines, and rhythms of UK Hardcore (mostly coming from the J-core sphere) with euphoric, woozy synths, 7th chords and arpeggios, and vocal chops of Future Bass, particularly Kawaii Future Bass',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Future Rave',
    id: 'future-rave',
    hard: ['edm'],
    desc: 'Emerged in the late 2010s by combining the mainstage EDM approach with influences from then-popular forms of Techno and old-school Trance/rave-inspired grooves and atmospheres.',
    soft: ['techno']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ghettotech',
    id: 'ghettotech',
    hard: ['edm'],
    desc: 'Fuses the syncopation and synthesized sounds of Electro and Detroit Techno with the cut-up samples of Ghetto House and fast rhythms of Miami Bass.',
    soft: ['techno']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Glitch Hop',
    id: 'glitch-hop',
    hard: ['edm', 'glitch'],
    desc: 'Tempos around 100-110 BPM, swung, bouncy drum patterns, and a focus on upbeat, danceable drops and buildups.',
    soft: []

}, 

{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Ghetto Funk',
    id: 'ghetto-funk',
    hard: ['glitch-hop'],
    desc: 'Rich sampling, drawing from classic Hip Hop as well as from Funk and Soul, and strong midtempo break grooves.',
    soft: ['funk', 'soul']
}, 

{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Neurohop',
    id: 'neurohop',
    hard: ['glitch-hop', 'neurofunk'],
    desc: 'Features the complex bass of Neurofunk and a frantic and mechanical sound design.',
    soft: []
}, 
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Grime',
    id: 'grime',
    hard: ['edm', 'neurofunk'],
    desc: 'UK Garage-derived production style characterized by dark, fast-paced, often aggressive beats that commonly features fast-paced MCing.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Neo-Grime',
    id: 'neo-grime',
    hard: ['grime'],
    desc: 'Mixes Wave with Grime and other forms of UK Electronic music..',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Weightless',
    id: 'weightless',
    hard: ['grime'],
    desc: 'Typically instrumental, leftfield Grime style characterized by sparse, weightless percussion and spectral, atmospheric production.',
    soft: []
}, 

   ...House,
   ...Techno,
   ...Trance,
   ...Bit,
   ...ChillOut,
   ...Disco,
    ...Glitch,
    ...HardcoreElectronics,
    ...Hardstyle,

]


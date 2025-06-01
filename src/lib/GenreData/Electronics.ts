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
    hard: ['breakbeat', 'house'],
    soft: [],
desc: 'Drew on the booty basss syncopation of Miami Bass, combined with Breakbeat rhythms around 130 BPM and chopped up vocal samples as found in Ghetto House.'
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
        dates: 'mid 1970s',
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
        , dates: '1980'
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
    label: 'Hardwave',
    id: 'hardwave',
    hard: ['edm', 'trance', 'hardstyle', 'wave'],
    soft: [],
    desc: 'Harder, festival-oriented offshoot of Wave, combining its &#34;reese&#34; basses and icy synths with Trap [EDM] drum patterns, build-up-drop structures, and fuller sound influenced by Trance and Hardstyle.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Jungle-Terror',
    id: 'jungle-terror',
    hard: ['edm'],
    soft: ['dutch-house', 'tribal-house'],
    desc: 'Emerging mostly from Dutch House and Big Room House, incorporates Tribal House-influenced percussion, hard kicks, and animal sounds resulting in a wild, jungle-resembling atmosphere in a festival EDM-oriented context.'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Krushclub',
    id: 'krushclub',
    hard: ['edm'],
    soft: ['jersey-club'],
    desc: 'Bitcrushed synths and occasionally bitcrushed vocals, energetic Jersey Club-derived beats, and elements of Sigilkore\'s dark production style.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Kuduro',
    id: 'kuduro',
    hard: ['edm', 'techno', ' house'],
    soft: ['kilapanga', 'semba'],
    desc: 'Angolan music combining traditional Kilapanga and Semba with Techno and House.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Batida',
    id: 'batida',
    hard: ['kuduro'],
    soft: [],
    desc: 'Initially developed in the late 80s in Luanda, Angola, as a mixture of Soca- and Zouk-based percussion samples.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Makina',
    id: 'makina',
    hard: ['edm', 'new-beat'],
    soft: [],
    desc: 'Spanish Techno developed in the early 1990s; strongly influenced by New Beat and EBM, but aiming for a lighter sound.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Manyao',
    id: 'manyao',
    hard: ['edm'],
    soft: [],
    desc: 'Asian Electronic Dance Music that mixes vocals and melodies from Mandopop with fairly hard, melodic EDM.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Midtempo Bass',
    id: 'midtempo-bass',
    hard: ['edm'],
    soft: [],
    desc: 'Harsh synth leads and a usual tempo of around 90-110 BPM.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Moombahcore',
    id: 'moomnbahcore',
    hard: ['edm'],
    soft: [],
    desc: 'High-pitched synth leads, gritty percussion, a kick-snare pattern, aggressive bass drops, and around 110 BPM while often paralleling Complextro or Brostep.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Moombahton',
    id: 'moomnbahton',
    hard: ['edm'],
    soft: [],
    desc: 'Offshoot of Dutch House characterized by tempos in the 100-110 BPM range, Reggaetón-influenced rhythms, bass-heavy kicks and high-pitched synths.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Nerdcore Techno',
    id: 'nerdcore-techno',
    hard: ['edm'],
    soft: [],
    desc: 'Stylistically diverse form of underground Japanese Electronic Dance Music utilizing energetic beats built around samples from pop and/or nerd culture.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Nu Disco',
    id: 'nu-disco',
    hard: ['edm'],
    soft: [],
    desc: 'Stylistically diverse form of underground Japanese Electronic Dance Music utilizing energetic beats built around samples from pop and/or nerd culture.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ori Deck',
    id: 'ori-deck',
    hard: ['edm'],
    soft: ['moombahton', 'dubstep'],
    desc: 'Incorporates elements of Moombahton and Dubstep to create a style characterized by sluggish, kick-heavy dembow rhythms.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Post-Dubstep',
    id: 'post-dubstep',
    hard: ['edm'],
    soft: ['dubstep'],
    desc: 'Minimalistic, atmospheric sound design and eclectic drum patterns, derived from but not fitting Dubstep.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Skwee',
    id: 'skwee',
    hard: ['edm'],
    soft: ['dubstep'],
    desc: 'Mid-2000s offshoot of the Nordic Electro scene which uses simple, analogue or Chiptune-inspired synthesizer leads and basslines to create stripped-down, midtempo grooves drawing on Synth Funk and Hip Hop.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Shangaan Electro',
    id: 'shangaan-electro',
    hard: ['edm'],
    soft: [],
    desc: 'South African genre with very fast BPM (around 180) featuring MIDI keyboard sounds and marimba.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Singeli',
    id: 'singeli',
    hard: ['edm'],
    soft: ['dubstep'],
    desc: 'Developed in Tanzania in the mid-2000s; fuses incredibly rapid beats, usually between 180-300BPM, with MCing and musical influences from older Tanzanian genres.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Slimepunk',
    id: 'slimepunk',
    hard: ['edm'],
    soft: ['dubstep'],
    desc: 'Loud synth leads with a distorted, gritty, and &#34;slimy&#34; sound design, usually laid on top of production inspired by or taken directly from genres such as Halftime, Trap [EDM], Brostep, and other forms of 2010s EDM'
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
    soft: [],
    desc: 'Large, hugely popular group of related Electronic Dance Music styles, initially developing from Disco in the early 1980s.'
    ,dates: '1983',
    bands: 'Daft Punk, David guetta'
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Acid House',
    id: 'acid-house',
    hard: ['house'],
    soft: [],
    dates: 'mid 1980s',
desc: 'Emerged in the mid-1980s, characterised by repetitive basslines created with the distinctive modulated squelching sound of the Roland TB-303 synthesiser.'
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Deep House',
    id: 'deep-house',
    hard: ['house'],
    soft: [],
    dates: '1985',
desc: 'Emerged in the United States during the mid-1980s, featuring a relaxed tempo and influences from Jazz, Funk, and Soul.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Lo-fi House',
    id: 'lo-fi-house',
    hard: ['deep-house', 'outsider-house'],
    soft: [],
desc: 'Primarily distinguished from earlier styles of outsider house by its stricter reliance on deep house elements, cranky, nocturnal, and nostalgic atmospheres, and a distinct dreamy, lo-fi aesthetic'
},
{
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Afro House',
    id: 'afro-house',
    hard: ['house'],
    soft: ['deep-house'],
desc: 'Emerged by fusing Deep House with Southern African Music, characterized by hypnotizing drum patterns of shakers and congas, often sampled African vocals or soulful original features, and spiritual, organic, melodic atmosphere.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Amapiano',
    id: 'amapiano',
    hard: ['house'],
    soft: ['deep-house'],
desc: 'House from South Africa deriving from previous popular genres including Gqom, Kwaito, and Deep House..'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Afropiano',
    id: 'afropiano',
    hard: ['amapiano', 'afrobeats'],
    soft: [],
desc: 'Blends the easy-going, poppy, and melodic Afrobeats sound and rhythms with major Amapiano elements, like lush, jazzy, and laid-back atmospheres often featuring light piano chords.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ambient House',
    id: 'ambient-house',
    hard: ['house', 'ambient'],
    soft: [],
desc: 'Primarily British genre developed in the 1990s with beats, synthesizers, and vocals in styles similar to House, treated with effects that are often described as dream-like or chilled'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ballroom',
    id: 'ballroom',
    hard: ['house'],
    soft: [],
desc: 'Emerging from the predominantly Black and LGBT Harlem ballroom culture, it is characterized by hard-hitting rhythms, generally improvised chanting by MCs known as commentators, and a distinctive crash sample.'
},

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Bass House',
    id: 'bass-house',
    hard: ['house'],
    soft: ['tech house', 'brostep'],
desc: 'Busy, punchy percussion, prominent basslines and dirty, distorted synths resembling other bass music genres, with influences including Brostep, Fidget House, Bassline, Speed Garage, and Tech House.'
},


{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Bassline',
    id: 'bassline',
    hard: ['house'],
    soft: [],
desc: 'Strong emphasis on intricate basslines as well as four-on-the-floor beat patterns.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Big Room House',
    id: 'big-room-house',
    hard: ['house'],
    soft: [],
desc: 'Energetic, festival-oriented style characterized by heavy reverb, intense build-ups, strong kicks, minimalistic drop melodies, and sparse, raw breakdowns.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Brazilian Bass',
    id: 'brazilian-bass',
    hard: ['house'],
    soft: ['deep-house','tech-house'],
desc: 'Originated in the 2010s in Brazil, taking influences from Deep House and Tech House, characterized by deep, punchy basslines making use of detuning and filtering effects.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Slap House',
    id: 'slap-house',
    hard: ['brazilian-bass', 'future-house'],
    soft: [],
desc: 'Taking influences from Brazilian Bass and Future House, characterized by prominent, bouncy bassline and simple, upbeat melodies.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Mega Funk',
    id: 'mega-funk',
    hard: ['brazilian-bass', 'slap-house'],
    soft: [],
desc: 'Blends funk vocal performances with production derived from mainstage 2010s House genres like Brazilian Bass and Slap House.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Bubbling House',
    id: 'bubbling-house',
    hard: ['house'],
    soft: ['dutch-house'],
desc: 'Developed in the Netherlands in the 2000s, combining the older style of Bubbling with more modern House, especially Dutch House.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Changa Tuki',
    id: 'changa-tuki',
    hard: ['house'],
    soft: ['techno', 'tribal-house'],
desc: 'Emerged in Caracas; highly influenced by 1990s Techno and Tribal House, featuring fast tempos, strident synthesizers, hard-thumping percussion lines, and plenty of breakbeats.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Chicago hard house',
    id: 'chicago-hard-house',
    hard: ['house'],
    soft: ['ghetto-house'],
desc: 'Originated from Chicago around the mid-1990s as a development of Ghetto House, emphasizing hard-hitting, off-beat drum patterns, fast tempos, and lack of melodies.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'La Hard House',
    id: 'la-hard-house',
    hard: ['chicago-hard-house'],
    soft: [],
desc: 'Distorted, minimalistic TR-909 derived rhythms, basic climaxing structures and heavy reliance on high-pitched synthesizer / hoover sounds.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Chicago house',
    id: 'chicago-house',
    hard: ['house'],
    soft: [],
desc: 'Umbrella term for a broad variety of House that originated from Chicago in the (mostly mid-to-late) 1980s and early 90s.',
dates: '1983'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Diva house',
    id: 'diva-house',
    hard: ['house'],
    soft: [],
desc: 'Dominant, anthemic female vocals, common use of piano stabs, and energetic, driving four-on-the-floor rhythms.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Hardbag',
    id: 'hardbage',
    hard: ['diva-house', 'euro-house'],
    soft: ['hard-dance'],
desc: 'Development of handbag / Diva House characterized by heavier, hard hitting percussion, more pronounced rave and early Hard Dance elements, and fewer vocals.'
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
    parent: Type.Genre,
    label: 'Techno',
    id: 'techno',
    hard: ['edm'],
    bands: 'Aphex Twin, Underworld',
    soft: [],


},
{
    
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Hypertechno',
    id: 'hypertechno',
    hard: ['techno'],
    soft: [],
    desc: 'Emerged in the 2020s by mixing fast tempos, prominent basslines, and hard-hitting drums derived from popular Techno with simplistic, catchy melodies and vocals, often influenced by 2000s Hard Dance, Eurodance and Electropop.'
    ,dates: 'mid 1980s'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Hyper-Techno',
    id: 'hyper-techno',
    hard: ['techno'],
    soft: ['belgian-techno'],
    desc: 'Exaggerated fast form of Belgian Techno for the Japanese market, focusing mainly on synth sounds and samples typical of 1990s dance music.'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Acid Techno',
    id: 'acid-techno',
    hard: ['techno'],
    soft: [],
    bands: 'Autechre',
    desc: 'Incorporates \"squelching\" synths from [Genre464] into a mechanical and usually more energetic Acid house context.'

},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ambient Techno',
    id: 'ambient-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Blends the mechanical, repetitive beats of Techno with atmospheres and textures inspired by Ambient music, resulting in slower tempos and more understated rhythms.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Belgian Techno',
    id: 'belgian-techno',
    hard: ['techno', 'ebm'],
    soft: ['hardcore-electronics'],
    desc: 'Early form of Hardcore [EDM], resulting from the further evolution of New Beat due to the strong influence of Techno and EBM.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Bleep Techno',
    id: 'bleep-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Established in the late 1980s in the breakdancing and early rave scene of Yorkshire in the North of England, notable for its "bleepy" synth lines and heavy sub-bass.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Detroit Techno',
    id: 'detroit-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Established in the late 1980s in the breakdancing and early rave scene of Yorkshire in the North of England, notable for its "bleepy" synth lines and heavy sub-bass.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'FreeTechno',
    id: 'freetechno',
    hard: ['techno'],
    soft: [],
    desc: 'Originated in the early 1990s, commonly played at free parties in Europe, and features a repetitive pounding kick drum at tempos of 170 BPM or above..'
    ,dates: '1990s'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Hardgroove Techno',
    id: 'hardgroove-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Features shuffling grooves with heavy emphasis on layered percussive elements; often includes a mix of samples and drum machines played at a range of 135-140 BPM.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Hard Techno',
    id: 'hard-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Typically rave-oriented form characterized by hard, prominent kick drums, pounding rhythms, fast tempos around 140-160 BPM, and aggressive, often distorted sounds.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Schranz',
    id: 'schranz',
    hard: ['hard-techno'],
    soft: [],
    desc: 'Characterised by fast tempos, aggressive &#34;whooshing&#34; beat patterns, heavy compression and straightforward song structures.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Industrial Techno',
    id: 'industrial-techno',
    hard: ['techno', 'industrial'],
    soft: [],
    desc: 'Cold, mechanical, and hypnotic tracks, typically lacking the harsher and noisier elements of later Industrial Techno.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Birmingham Sound',
    id: 'birmingham-sound',
    hard: ['industrial-techno'],
    soft: [],
    desc: 'Cold, mechanical, and hypnotic tracks, typically lacking the harsher and noisier elements of later Industrial Techno..'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melodic Techno',
    id: 'melodic-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Trance-influenced subgenre that was established in the mid-to-late 2010s, characterized by gradually progressing structure, and hypnotizing, atmospheric sound with arpeggiated, minor melodies, playing at around 120-125 BPM..'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melodic Techno',
    id: 'melodic-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Trance-influenced subgenre that was established in the mid-to-late 2010s, characterized by gradually progressing structure, and hypnotizing, atmospheric sound with arpeggiated, minor melodies, playing at around 120-125 BPM..'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Minimal Techno',
    id: 'minimal-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Stripped-down and sparse, often featuring a dark sound and a slow, steady development through the track.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Dub Techno',
    id: 'dub-techno',
    hard: ['minimal-techno', 'dub'],
    soft: [],
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Peak Time Techno',
    id: 'peak-time-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Hard, dynamic, energetic and accessible subgenre featuring strong kicks, massive dirty synths, tempos around 130 BPM, more suspenseful structures with breaks and build-ups, and big, modern, festival-oriented sound; rose to high popularity in the late 2010s.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Wonky Techno',
    id: 'wonky-techno',
    hard: ['techno'],
    soft: [],
    desc: 'Strays from the standard beat of Techno, opting for a more fractured sound',
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Techno Bass',
    id: 'techno-bass',
    hard: ['techno'],
    soft: [],
    desc: 'Minimal, stripped-down with an emphasis on low-frequency bass partitions.'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Car Audio Bass',
    id: 'car-audio-bass',
    hard: ['techno-bass'],
    soft: [],
    desc: 'Slow and minimalistic extreme form, focused on ultra-low frequency sine wave notes and mainly intended for stress testing subwoofer sound systems.'
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Tecnorumba',
    id: 'tecnorumba',
    hard: ['techno'],
    soft: ['makina', 'house'],
    desc: 'Blend of the themes and singing style of Rumba flamenca with the most commercial forms of House, Techno, and Makina.'
},
{
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Rave',
    id: 'rave',
    hard: ['techno', 'hard-techno', 'industrial-techno', 'hardtek'],
    soft: [],
    desc: 'Type of clubs where fast electronic music is played'
},
]

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
    {
        parent: Type.Genre,
        type: Type.Genre,
        label: 'Chiptune',
        id: 'chiptune',
        hard: ['bit'],
        soft: [],
        dates: 'late 1970s'

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
        soft: [],
        dates: '1980s'
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
    soft: [],
    dates: 'late 1970s',
    bands: 'Dead or alive'
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Italo-Disco',
    id: 'italo-disco',
    hard: ['electro-disco'],
    desc: 'Produced primarily in Italy and is characterized by the use of synthesizers, drum machines, and sometimes vocoders to create a mechanical, Electronic version of Disco with futuristic atmosphere.',
    soft: [],
    dates: 'late 1970s'
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
   {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Electro House',
    id: 'electro-house',
    hard: ['electro', 'house'],
    desc: 'Typically instrumental, leftfield Grime style characterized by sparse, weightless percussion and spectral, atmospheric production.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Fidget House',
    id: 'fidget-house',
    hard: ['electro-house','breakbeat-hardcore'],
    desc: 'Makes heavy use of Breakbeat hardcore-esque synth stabs, pitch bending of basslines, and cut-up vocal samples, as well as glitchy, or \"choppy\", 4/4 rhythms.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Complextro',
    id: 'complextro',
    hard: ['electro-house', 'brostep', 'fidget-house'],
    desc: 'Features densely-layered sound design, fast-paced cut-up sections, aggressive stabs, and common crossover with Brostep and Fidget House.',
    soft: []
}, 

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dutch House',
    id: 'dutch-house',
    hard: ['electro-house', 'fidget-house'],
    desc: 'High-pitched wonky synth melodies and heavy influence from Fidget House which developed in the Netherlands around 2007-08.',
    soft: []
}, 

{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Noiadance',
    id: 'noiadance',
    hard: ['dutch-house', 'moombahton'],
    desc: 'Blends Dutch House production with Funk brasileiro vocals and drumming on top of Moombahton rhythms.',
    soft: []
}, 

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'French electro',
    id: 'french-electro',
    hard: ['electro-house'],
    desc: 'Mixes Electro House with major elements of genres such as Electroclash, Nu-Disco, Synth Funk, and even Electro-Industrial, resulting in a harsh, punchy, and funky midtempo sound.',
    soft: [ 'electroclash', 'electro-industrial', 'nu-disco', 'synth-funk']
}, 

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melbourne Bounce',
    id: 'melbourne-bounce',
    hard: ['electro-house'],
    desc: 'Offbeat basslines giving it a \"bouncy\" groove, and minimalistic, side-chained melodies often making use of [Genre29430]-influenced synths, horns or vocal chops, resulting in a flippant, party-oriented atmosphere',
    soft: [ 'dutch-house']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Electrofunk',
    id: 'electrofunk',
    hard: ['house'],
    desc: 'Blends Funk brasileiro vocals with production from popular late 2000s and early 2010s House.',
    soft: [ 'funk-brasileiro']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Euro House',
    id: 'euro-house',
    hard: ['house'],
    desc: 'Vocal-focused style emerging in the late 1980s in Europe, developing in parallel with Eurodance.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Festival Progressive House',
    id: 'festival-progressive-house',
    hard: ['house', 'electro-house'],
    desc: 'Uplifting, melodic, energetic but clean drops, featuring modern supersaws and pianos, taking influences from Progressive House, Uplifting Trance, but applying them to a form structurally closer to Big Room House and Electro House.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Funky House',
    id: 'funky-house',
    hard: ['house'],
    desc: 'Funky, warm, catchy basslines on top of looped Funk or Disco samples, resulting in an upbeat, bouncy, and pacy groove.',
    soft: ['funk', 'disco']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Future Funk',
    id: 'future-funk',
    hard: ['house', 'vaporwave'],
    desc: 'Sample-based form of House which formed out of Vaporwave in the early 2010s.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Future House',
    id: 'future-house',
    hard: ['house', 'electro-house'],
    desc: 'Features distinctive metallic-sounding drops and frequency-modulated basslines at around 120-130 BPM.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Future Bounce',
    id: 'future-bounce',
    hard: ['future-house', 'melbourne-dance'],
    desc: 'Fusion of Melbourne Dance and [Genre37063] that combines the former\'s basslines and bouncy, upbeat drops with the latter\'s metallic, pronounced synth leads.',
    soft: []
}, 

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Garage House',
    id: 'garage-house',
    hard: ['house', 'disco'],
    desc: 'Disco-influenced style of House that developed in the 1980s, incorporating elements of Gospel, Soul, and Dub, before evolving into a more upbeat style that prominently features crisp syncopated hi-hats and synth stabs.',
    soft: [],
    dates: '1983'
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Gospel House',
    id: 'gospel-house',
    hard: ['garage-house', 'gospel'],
    desc: 'Incorporates heavy Gospel elements and singing borrowed from classic and contemporary gospel, usually in the form of choir vocals and call-and-response chants.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Jersey Sound',
    id: 'jersey-sound',
    hard: ['garage-house', 'gospel'],
    desc: 'Soulful, melodic, Gospel-infused House music developed in Newark, NJ in the late 1980s and early 1990s with an emphasis on songcraft.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ghetto House',
    id: 'ghetto-house',
    hard: ['house'],
    desc: 'Rough sound based around minimal drum machine-driven tracks and heavy usage of vocal samples.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Juke',
    id: 'juke',
    hard: ['ghetto-house'],
    desc: 'Faster than Ghetto House, playing at 160bpm, and makes striking use of unconventional drum patterns which differ wildly from other House styles.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Kwaito',
    id: 'kwaito',
    hard: ['house'],
    desc: 'Emerged from South Africa in the early 1990s, taking influence from Disco and Hip Hop.',
    soft: ['disco', 'hip-hop']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'G-House',
    id: 'g-house',
    hard: ['house'],
    desc: 'Deep, dark form of House music that primarily incorporates rap samples or original rapping on top of minimal, bassy beats.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Gqom',
    id: 'gqom',
    hard: ['house', 'kwaito'],
    desc: 'Evolved from South African House, specifically Kwaito; often described as a more minimal and raw version.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Hip House',
    id: 'hip-house',
    hard: ['house', 'hip-hop'],
    desc: 'Incorporates production elements of early Hip Hop and usually rapping into 1980s House.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Italo House',
    id: 'italo-house',
    hard: ['house'],
    desc: 'Originated in Italy during the late 1980s, making use of anthemic pianos, diva vocals, and Dance-Pop song structures.',
    soft: ['dance-pop']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Jackin House',
    id: 'jackin-house',
    hard: ['house'],
    desc: 'Punchy, \'shuffly\' percussion, strong grooves, funky basslines, and chopped-up samples.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Latin House',
    id: 'latin-house',
    hard: ['house'],
    desc: 'Emerged in the second half of the 1980s, blending four-on-the-floor beats with Hispanic American Music influences from Puerto Rico, Mexico, Cuba, Dominica, and Colombia.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melodic House',
    id: 'melodic-house',
    hard: ['house'],
    desc: 'Arpeggiated synth lines, focus on a chilled and laid-back atmosphere, and influence from genres such as Progressive House and Deep House.',
    soft: ['progressive-house', 'deep-house']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'MicroHouse',
    id: 'microhouse',
    hard: ['house'],
    desc: 'Stripped-down, minimal form of House, originating in the late 90s, which takes influence from Minimal Techno, Glitch and IDM.',
    soft: ['minimal-techno', 'glitch', 'idm']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Organic House',
    id: 'organic-house',
    hard: ['house'],
    desc: 'Subtle drums and grooves, slow tempos, and acoustic, traditional instrumentation, resulting in an organic, warm sound and spiritual atmosphere.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Outsider House',
    id: 'outsider-house',
    hard: ['house'],
    desc: 'Mostly derived from Deep House; intentional use of rough, lo-fi production, often utilizing a mix of analog/analog-like and digital instrumentation.',
    soft: ['deep-house']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Phonk House',
    id: 'phonk-house',
    hard: ['house', 'drift-phonk'],
    desc: 'Merges Drift phonk\'s nocturnal atmospheres, cowbell melodies, vocal samples, and energetic production, with [genre463] rhythms and tempos, characterized by a banging and upbeat sound.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Progressive House',
    id: 'progressive-house',
    hard: ['house', 'trance'],
    desc: 'Trance-influenced strain of House that grew to prominence in the early 1990s, using polished production and gradual progressions..',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Romanian Popcorn',
    id: 'romanian-popcorn',
    hard: ['house'],
    desc: 'Emerged in the second half of the 2000s in Romania, often featuring brass melodies and \"staccato\" pluck grooves.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Speed Garage',
    id: 'speed-garage',
    hard: ['house'],
    desc: 'Primarily British style that paved the way for UK Garage, combining cut-up vocal samples and sped up four-on-the-floor Garage House rhythms with Jungle-esque basslines.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Stutter House',
    id: 'stutter-house',
    hard: ['house'],
    desc: 'Emerged in the 2020s taking influences from Melodic House, Trance, and Future Garage; features distinctive chopping of vocal samples and pads.',
    soft: ['melodic-house', 'trance', 'future-garage',]
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Tech House',
    id: 'tech-house',
    hard: ['house'],
    desc: 'Emerged in the mid-1990s taking influences from Techno, broadly characterized by minimalistic and repetitive melodies, focus on the bassline, and constant groove recognizable by prominent off-beat hi-hats.',
    soft: ['techno',]
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Deep Tech',
    id: 'deep-tech',
    hard: ['tech-house', 'uk-garage'],
    desc: 'Incorporates UK Garage rhythms and synths stabs, influences from British rave music, UK Bass and UK Deep House, resulting in an urban, subdued, but danceable sound with deep, muted basslines.',
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Rominimal',
    id: 'rominimal',
    hard: ['tech-house'],
    desc: 'Hypnotic, minimal, and \"dubby\" loops, featuring subtle and intricate synth pads, cranky, clicky percussion, and bouncy, pulsing basslines.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Tribal House',
    id: 'tribal-house',
    hard: ['house'],
    desc: 'Prominent, syncopated rhythms of tribal drums such as toms and bongos on top of a House beat, usually resulting in a percussive, energetic sound, while ranging in mood.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Guaracha [EDM]',
    id: 'guaracha-edm',
    hard: ['tribal-house'],
    desc: 'Originated in Colombia, featuring &#34;fluttering&#34; trumpets, accordion, and tambora drums.',
    soft: []
}, 

{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Tropical House',
    id: 'tropical-house',
    hard: ['house'],
    desc: 'Offshoot of Deep House featuring slow tempos around 100-115 BPM, light percussion and acoustic instrumentation, setting out to create a relaxed, summery, beach-like atmosphere.',
    soft: ['deep-house']
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'UK Jackin',
    id: 'uk-jackin',
    hard: ['house'],
    desc: 'Successor to British Bassline, characterized by strong basslines, dark atmospheres, and dominant grooves.',
    soft: []
}, 
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Vinahouse',
    id: 'vinahouse',
    hard: ['house'],
    desc: 'Fast-paced House popular in Vietnam, remixing Vietnamese melodies.',
    soft: []
}, 

   ...Techno,
   ...Trance,
   //...Bit,
   ...ChillOut,
   ...Disco,
    ...Glitch,
    ...HardcoreElectronics,
    ...Hardstyle,

]


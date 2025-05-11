
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
    label: 'Breakbeat Kota',
    id: 'breakbeat-kota',
    hard: ['breakbeat'],
    soft: [],
    desc: 'Indonesian style that slows down the syncopated rhythms of Funkot to moderate tempos around 130 BPM.',    
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Jungle Dutch',
    id: 'jungle-dutch',
    hard: ['breakbeat-kota'],
    soft: [],
    desc: 'Indonesian style that slows down the syncopated rhythms of Funkot to moderate tempos around 130 BPM.',    
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
    soft: ['hiphop', 'trance', 'triphop'],
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
}
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
        type: Type.Scene,
        parent: Type.Genre,
        label: 'Anime music',
        id: 'dojin',
        sub: 'Dōjin',
        hard: ['artcore', 'lolicore'],
        desc: 'Refers to a scene of people with alike tastes in literature, anime and media, in this context refers to japanese western culture movement which captures mostly anime and manga.',
        soft: []
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
    parent: Type.Super,
    label: 'House',
    id: 'house',
    hard: ['electronics'],
    soft: []

}]

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





export const hardcoreElectronics = [{
            type: Type.Genre,
            parent: Type.Genre,
            label: 'Hardcore',
            id: 'hardcore-electronics',
            sub: '(electronics)',
            hard: ['breakbeat'],
            soft: ['hardcore']
        
}]

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
   ...House,
   ...Techno,
   ...Trance,
   ...Bit,
   ...ChillOut,
   ...Disco,
    ...Glitch,
    ...hardcoreElectronics
]


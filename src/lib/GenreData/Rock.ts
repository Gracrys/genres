
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
    soft: [],
    desc: 'Originated in the mid-1970s as a reaction against the perceived excesses of mainstream 1970s rock music, with a DIY ethic and a raw, aggressive sound characterized by short songs, fast tempos, and simple chord progressions.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Art Punk',
    sub: 'Avant-garde Punk',
    id: 'art-punk',
    hard: ['punk', 'avant-garde', 'jazz', 'funk'],
    soft: [],
    desc: 'Experimental and unconventional approach to Punk Rock, incorporating elements from various genres such as art rock, avant-garde, jazz, and funk, often with a more intellectual or artistic sensibility.'
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Egg Punk',
    id: 'egg-punk',
    hard: ['art-punk'],
    soft: [],
    desc: 'Originated in the early 2010s; features lo-fi production, eccentric lyrics, quick tempos, nasally vocals, and cheap keyboard sounds.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Cowpunk',
    id: 'cowpunk',
    hard: ['punk', 'country', 'rockabilly', 'contemporary-folk'],
    soft: [],
    desc: 'Combines the raw energy and attitude of Punk Rock with the twangy guitars, storytelling lyrics, and themes of country music; emerged in the 1980s as a reaction against the polished sound of mainstream country music.',
    bands: 'The meat puppets, Jason and the scorchers, The beat farmers'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Folk Punk',
    id: 'folk-punk',
    hard: ['punk', 'folk'],
    soft: [],
    artists: '',
    desc: 'Combines the raw energy and attitude of Punk Rock with the acoustic instrumentation, storytelling lyrics, and themes of folk music; emerged in the 1980s as a reaction against the polished sound of mainstream folk music.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Celtic Punk',
    id: 'celtic-punk',
    hard: ['punk', 'celtic'],
    soft: [],
    desc: 'Combines the raw energy and attitude of Punk Rock with the traditional instrumentation, melodies, and themes of Celtic music; emerged in the 1980s as a reaction against the polished sound of mainstream Celtic music.',
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Gypsy Punk',
    id: 'gypsy-punk',
    hard: ['punk', 'gypsy'],
    soft: [],
    desc: 'Gypsy punk is a style of Punk Rock music with strong Eastern European music influences, especially various kinds of Romani Folk Music and Balkan Folk Music as well as Klezmer. The name was coined by Eugene Hütz, the leader of New York based Gogol Bordello, founded in 1998 by immigrants from several countries from different parts of the world. At about the same time Balkan film director Emir Kusturica (and his band, The No Smoking Orchestra) made a smooth transition from Balkan music (popularized by Goran Bregović, who had been writing music for Kusturicas films since the late 1980s) to a more punkier and less traditional sound, giving a strong impact on the development of the genre as well. Other notable and influential Gypsy punk artists include Kultur Shock, Norwegian Kaizers Orchestra and Moldavian Zdob și Zdub, but aside from a few bands the genre remains an underground phenomenon. '
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Post Punk',
    id: 'post-punk',
    hard: ['punk'],
    soft: [],
    artists: 'Joy division, The cure, Siouxsie and the banshees, Gang of four, Public image ltd',
    desc: 'Emerged in the late 1970s as a reaction against the perceived limitations of Punk Rock, with a more experimental and artistic approach that incorporated elements from various genres such as art rock, funk, dub, and electronic music.'},
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Post Punk Revival',
    id: 'post-punk-revival',
    hard: ['post-punk'],
    soft: [],
    artists: 'Interpol, Editors, The Strokes, Franz Ferdinand',
    desc: 'Incorporating the sounds and aesthetics of Post-Punk into Indie Rock, with jagged guitarwork, a dominant and danceable rhythm section, clean production, and poppy song structures.'
  },

  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Coldwave',
    id: 'coldwave',
    hard: ['post-punk', 'synth'],
    soft: [],
    artists: 'The Chameleons',
    desc: 'A subgenre of Post-Punk that incorporates synthesizers and electronic elements, often with a dark, atmospheric sound.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dance-punk',
    id: 'dance-punk',
    hard: ['post-punk', 'disco', 'dance', 'funk'],
    soft: [],
    artists: 'Talking heads, The Rapture, !!!',
    desc: 'Combines the raw energy and attitude of Punk Rock with the rhythms and grooves of dance music, often featuring prominent basslines, danceable beats, and a more polished production style.'
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Dance-punk Revival',
    id: 'dance-punk-revival',
    hard: ['dance-punk', 'post-punk-revival', 'electronic', 'alternative-dance'],
    soft: [],
    artists: 'LCD Soundsystem',
    desc: 'A revival of the Dance-punk genre, incorporating modern electronic elements and production techniques.'
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'New Wave',
    id: 'new-wave',
    hard: ['post-punk'],
    soft: [],
    artists: 'New Order, Depeche Mode',
    dates: 'mid 1970s',
    desc: 'Originated in the late 1970s as a reaction against the perceived limitations of Punk Rock, with a more polished and pop-oriented sound that incorporated elements from various genres such as pop, electronic music, and disco.' 
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Dark Wave',
    id: 'dark-wave',
    hard: ['post-punk', 'gothic-rock'],
    soft: ['new-wave'],
    artists: 'Bauhaus, Sisters of mercy, Clan of Xymox',
    desc: 'Originated in the late 1970s as a reaction against the perceived limitations of Punk Rock, with a darker and more atmospheric sound that incorporated elements from various genres such as post-punk, gothic rock, and synth-pop.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Ethereal Wave',
    id: 'ethereal-wave',
    hard: ['dark-wave'],
    soft: ['ambient'],
    artists: 'Cocteau Twins, This mortal coil',
    desc: 'A subgenre of Dark Wave that incorporates ambient and ethereal elements, often with a dreamy and atmospheric sound and ethereal like vocals.'
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'New Age',
    id: 'new-age',
    hard: ['ethereal-wave', 'ambient', 'psychodelia'],
    soft: ['folk'],
    artists: 'Enya, Vangelis',
    desc: 'Incorporates elements from various genres such as ambient, folk, and psychodelia, often with a focus on creating a relaxing and meditative atmosphere.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: '2-Tone',
    id: '2-tone',
    desc: 'Combines 1960s Jamaican Ska with Punk Rock and New Wave to create tracks played at faster tempos and with a harder edge than the original Jamaican records.',
    hard: ['new-wave'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Pop punk',
    id: 'pop-punk',
    hard: ['punk', 'pop'],
    soft: [],
    artists: 'Green day, Blink 182, Sum 41',
    desc: 'Uses the fast tempos and power chords of Punk Rock with the catchy melodies and lyrical themes of pop music, often with a more polished production style and more catchy, yopung sound.'
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Skate punk',
    id: 'skate-punk',
    hard: ['pop-punk', 'post-hardcore'],
    soft: [],
    artists: 'descendents',
    desc: 'A subgenre of Pop Punk that incorporates elements from Skateboarding culture and features faster, more aggressive tempos. Combines the speed of Melodic Hardcore with the catchiness of Pop Punk, finding a middle ground between the two.'
  },

  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Vikingarock',
    id: 'vikingarock',
    hard: ['punk'],
    soft: [],
    desc: 'Incorporates influences from Nordic Folk Music and the imagery of Viking romanticism and Norse mythology.'
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Easycore',
    id: 'easycore',
    hard: ['pop-punk', 'post-hardcore', 'metalcore'],
    soft: [],
    artists: 'A day to remember, Four year strong',
    desc: 'Combines the radio-friendly stylings of second-wave Pop Punk with Metalcore-inspired breakdowns, lower guitar tunings, and occasional unclean vocals.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Punk Blues',
    id: 'punk-blues',
    hard: ['punk', 'blues'],
    soft: [],
    desc: 'Punk blues fuses the instrumentation and scales of Blues Rock with the rawness and attitude of Punk Rock, while not necessarily adhering to its traditional sound. The merge of Punk’s rowdy energy with Blues can be traced back to the Proto-Punk and Garage Rock bands of the 1960s and 1970s, with artists such as Captain Beefheart, The Velvet Underground, The Stooges and The Modern Lovers all having experimented with pushing the kinetic boundaries of blues rock',
    artists: 'Nick Cave'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Anarcho-punk',
    id: 'anarcho-punk',
    hard: ['punk'],
    soft: [],
    desc: 'A subgenre of Punk Rock that promotes anarchism and other anti-authoritarian ideologies, often with politically charged lyrics and a DIY ethic.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Garage Punk',
    id: 'garage-punk',
    hard: ['punk', 'garage-rock'],
    soft: [],
    desc: 'combination of the garage rock fuzziness and diy vibe with punk rock’s raw energy and attitude, often with a lo-fi production style and a focus on catchy melodies and simple song structures.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Horror Punk',
    desc: 'Thematically and lyrically derived from Horror movies, typically with a nostalgic and campy attitude.',
    id: 'horror-punk',
    hard: ['punk'],
    soft: [],
    artists: 'Misfits, Murderdolls'
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
    id: 'konsrock',
    hard: ['post-punk'],
    soft: [],
    artists: 'Onkel Kånkel'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Synth punk',
    sub: 'Electronic punk',
    id: 'synth-punk',
    hard: ['punk', 'electronics'],
    soft: [],
    desc: 'Combines the raw energy and attitude of Punk Rock with the use of synthesizers and electronic instruments, often with a more futuristic and experimental sound.',
    artists: 'Suicide'
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
  },
  {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Riot grrl',
    id: 'riot',
    desc: 'Underground feminist Punk movement originating in the United States in the early 1990s.',
    hard: ['punk', 'post-hardcore', 'hardcore'],
    soft: [],
    artists: 'Le tigre, Petrol girls, Skating polly, grlwood'
  }
]

export const Hardcore = [
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Hardcore',
    id: 'hardcore',
    hard: ['punk'],
    soft: [],
    artists: 'Black flag, Minor threat, Bad Brains, Gorilla biscuits',
    desc: 'Originated in the late 1970s  with a faster, heavier, and more aggressive sound that often featured shouted vocals, political or socially conscious lyrics, and a DIY ethic.'
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
    soft: [],
    desc: 'Focuses on emotional lyrics, expressive vocals, melodic songwriting, and dynamic song structures.',
    artists: 'My chemical Romance'

  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Emocore',
    id: 'emocore',
    hard: ['emo', 'hardcore'],
    soft: [],
    desc: 'Emerged primarily in Washington D.C. in 1985 as a reaction to the stagnant Hardcore Punk scene, with a less aggressive style that was more melodic and often featured emotional, introspective lyrics.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Emo-pop',
    id: 'emo-pop',
    hard: ['emo', 'pop'],
    soft: ['alternative-rock', 'pop-punk'],
    desc: 'Mainstream derivative of Emo, puts more emphasis on the poppy sensibilities of Alternative Rock and Pop Punk.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Mall Screamo',
    id: 'mall-screamo',
    hard: ['emo'],
    soft: [],
    desc: 'Heavy instrumentation, melodic verse-chorus songwriting, and expressive singing contrasted with screaming vocals.'

  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Midwest Emo',
    id: 'midwest-emo',
    hard: ['emo', 'math-rock', 'indie-rock'],
    soft: [],
    desc: 'Characterized by shifts between loud and soft dynamics, off-key, strained and emotional vocals, sometimes with intricate instrumental arrangements and layered arpeggiated guitar parts.',
    artists: 'Brand new, Modest Mouse, Jimmy eat world'
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Screamo',
    id: 'screamo',
    hard: ['emo', 'hardcore'],
    soft: [],
    desc: 'Intense, aggressive and complex approach to Emo featuring higher levels of abrasiveness and dissonance, accompanied by guitar-focused melodicism and harsh vocals.'
    , artists: 'Touche Amore, Orchid, Saetia'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Emoviolence',
    id: 'emoviolence',
    hard: ['screamo', 'powerviolence'],
    soft: [],
    artists: 'orchid', desc: 'Shorter length and volatile song structures, while borrowing techniques from Powerviolence such as blast beats, unconventional screaming and noisier sounds.'

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
    soft: [],
    desc:'Sub style of post-hardcore that incorporates a dissonant style with more chaotic styles',
    artists: 'The blood brothers, the plot in you'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Metalcore',
    id: 'metalcore',
    hard: ['metal', 'hardcore'],
    soft: [],

    dates: '1990s',
    artists: 'Converge, Knocked loose, poison the well',
    desc: 'Drop-tuned guitar riffs, constant double kick drumming with varying tempos and techniques, breakdown sections, and screaming or shouting vocals.'
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
    soft: [],
    artists: 'Poison the well',
    desc: 'Rhythmically complex, features unconventional time signatures, syncopated and dissonant riffs and erratic metric shifts.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Melodic Metalcore',
    id: 'melodic-metalcore',
    hard: ['metalcore'],
    soft: [],
    desc: 'Originated in the late 1990s when some metalcore bands infused elements of Melodic Death Metal into their sound to create a more metallic and melodic style.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Thall',
    id: 'thall',
    hard: ['metalcore', 'math-rock', 'djent'],
    soft: [],
    desc: 'Utilizes rapid release bends and a precise playstyle while contrasting pitch-shifted high and low notes, with ambient sections for atmosphere and buildup'

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
    label: 'Goregrind',
    id: 'goregrind',
    hard: ['grindcore'],
    soft: [],
    desc: 'Goregrind deviates from typical Grindcore in three aspects: the persistent use of very low pitch-shifted vocals; the willingness to employ more mid-tempo rhythms rather than rampant full-throttle speed; and an almost exclusive lyrical obsession with medical terminology, pathological conditions, and violence upon the human body. These themes are chosen largely for shock value, and are often conveyed in a purposely over-the-top fashion. Due to Death Metals influence on the genre, some see this as the predecessor to Deathgrind.'
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
    hard: ['burning-spirits', 'crust-punk'],
    soft: []
  },
  {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Queercore',
    id: 'queercore',
    desc: 'Movement mainly distinguished by its lyrical content expressing the viewpoints of the LGBTQ+ community, as well as promoting queer pride and unity.',
    hard: ['hardcore', 'post-harcore', 'punk'],
    soft: []
  },
  {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Emo',
    id: 'emo-scene',
    hard: ['emo', 'screamo', 'emo-pop', 'skate-rock', 'pop-punk'],
    soft: []
  },
]


export const RocknRoll = [{
  type: Type.Genre,
  parent: Type.Super,
  label: 'Rock & Roll',
  id: 'rocknroll',
  hard: ['rock', 'blues'],
  soft: ['pop'],
  dates: '1950',
  desc: 'Developed in the United States and popularized in the 1950s, featuring prominent Blues scales, poppy structures, and strong rhythms.'
  , artists: 'Little Richard, Buddy Holly, Johnny cash'
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
  label: 'Twist',
  id: 'twist',
  hard: ['rocknroll'],
  soft: []
},
{
  type: Type.Sub,
  parent: Type.Genre,
  label: 'Proto-Punk',
  id: 'proto-punk',
  hard: ['rocknroll'],
  soft: []
},
{
  type: Type.Genre,
  parent: Type.Super,
  label: 'Surf Music',
  id: 'surf',
  hard: ['rock'],
  soft: ['rocknroll'],
  dates: '1950',
  desc: 'Evolved from late 1950s instrumental Rock & Roll in the USA, particularly associated with the surfing culture in Southern California.'
},
{
  type: Type.Sub,
  parent: Type.Genre,
  label: 'Indie Surf',
  id: 'indie-surf',
  hard: ['surf'],
  soft: ['indie-rock'],
  desc: 'Reverb-drenched, nostalgic, and often lo-fi, with influences from Surf Rock and Vocal Surf; rose to popularity around 2009.',
},
{
  type: Type.Sub,
  parent: Type.Genre,
  label: 'Surf Rock',
  id: 'surf-rock',
  hard: ['surf'],
  soft: ['rock'],
  dates: '1950',
  desc: 'Short instrumental songs with Rock & Roll rhythms overlaid with cheerful melodies played on reverb-drenched tremolo guitar.',
  artists: 'beach boys'
},
{
  type: Type.Sub,
  parent: Type.Genre,
  label: 'Surf Punk',
  id: 'surf-punk',
  hard: ['surf'],
  soft: ['punk'],
  desc: 'Punk Rock that incorporates elements of Surf Rock.',
  artists: 'beach boys'
},
{
  type: Type.Sub,
  parent: Type.Genre,
  label: 'Vocal Surf',
  id: 'vocal-punk',
  hard: ['surf'],
  soft: [],
  desc: 'Appropriates the sounds of instrumental Surf Rock, combining surfing- and car-themed lyrics with a style that draws primarily from Doo-Wop and Rock & Roll.',
},
]
export const Rock = [
  {
    type: Type.Super,
    label: 'Rock',
    id: 'rock',
    hard: [],
    soft: [],
    desc: 'Typically uses a verse-chorus structure with a backbeat rhythm and the electric guitar at the forefront; generally heavier and/or faster than its predecessors.'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Symphonic Rock',
    id: 'symphonic-rock',
    hard: ['rock'],
    soft: [],
    desc: 'Incorporates elements resembling Orchestral Music.',
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Hard Rock',
    id: 'hard-rock',
    hard: ['rock'],
    soft: [],
    dates: '1960',
    desc: 'Originated in the mid-to-late 1960s from Psychedelic Rock and Blues Rock with a heavy sound characterized by distorted guitars and power chords.'
    , artists: 'Black Sabbath, Led Zepellin, The who, Deep purple'
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Glam Metal',
    id: 'glam-metal',
    sub: 'hair metal',
    hard: ['hard-rock', 'glam-rock', 'metal'],
    soft: [],
    desc: 'Very catchy hooks and guitar riffs, sing-along choruses, and lyrics often glamorizing the sex, drugs and rock and roll lifestyle. was also a scenenic genre with long hair styles, and queer like outfits, also named hair metal for that reason'
    , artists: 'Guns and roses, W.A.S.P.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Sleaze Rock',
    id: 'sleaze-rock',
    hard: ['glam-metal'],
    soft: [],
    desc: 'Raw and lurid form of Glam Metal with influences from Glam Punk and Blues Rock and back-to-basics songwriting; emerged to counter Pop influences in Hard Rock in the mid-to-late 1980s.'
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Heavy Psych',
    id: 'heavy-psych',
    hard: ['hard-rock', 'glam-rock', 'metal', 'psychodelic-rock'],
    soft: [],
    desc: 'Developed in the late 1960s with influence from Blues Rock, such as heavy dependence on riffs and willingness to improvise, adding crushing levels of heaviness with thick fuzzy guitars to create a doomy and morose atmosphere.',
    artists: 'Guns and roses, W.A.S.P.'
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Occult Rock',
    id: 'occult-rock',
    hard: ['hard-rock'],
    soft: ['metal'],
    desc: 'Dark and psychedelic atmosphere with lyrical references to esoteric subjects such as occultism, Satanism, fantasy, and horror; closely associated sonically and culturally with Heavy Metal and its offshoots.',
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Stoner rock',
    id: 'stoner-rock',
    hard: ['hard-rock', 'doom-metal', 'psychodelia', 'heavy-psych'],
    soft: [],
    artists: 'Queens of the stone age, kyuss, boris, ',
    desc: 'Stoner rock is a subgenre of Hard Rock that is characterized by its psychedelic timbres and songwriting as influence from Psychedelic Rock, as well as a bass-heavy sound and slow riffing, typically attributed as influence from Doom Metal and early Heavy Metal like Black Sabbath, and melodic influence from Blues Rock. The production is often raw and loud, and the songwriting often takes significant influence from rougher styles of Alternative Rock whilst combining it with the aforementioned Metal influences. ',
  },
  {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Heartland rock',
    id: 'haertland-rock',
    hard: ['rock', 'doom-metal', 'psychodelia', 'heavy-psych'],
    soft: [],
    desc: 'Psychedelic timbres, raw production, and stylistic influence from Doom Metal and Heavy Psych.',
  },
  {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Latin rock',
    id: 'latin-rock',
    hard: ['rock'],
    soft: [],
    desc: 'Fusion of Rock, often Psychedelic Rock, with Latin American rhythms, especially Afro-Latin genres.',
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
    type: Type.Sub,
    parent: Type.Super,
    label: 'Acoustic Rock',
    id: 'acoustic-rock',
    hard: ['rock'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Afro Rock',
    id: 'afro-rock',
    hard: ['rock'],
    soft: [],
    desc: 'Incorporates West African influences; initially emerged in the early 1970s.'
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
    label: 'Avant Prog',
    id: 'avant-prog',
    hard: ['experimental-rock', 'avant-garde'],
    soft: [],
    desc: 'Focuses on highly complex, dense arrangements often featuring high amounts of dissonance and uncommon time signatures, sometimes extending towards atonality, free time, improvisation, and other avant-garde techniques.'

  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Brutal Prog',
    id: 'brutal-prog',
    hard: ['avant-prog'],
    soft: [],
    desc: 'Highly intense and visceral songwriting, usually featuring substantial reliance on dissonance, odd time signatures, blistering tempos, angular and mercurial rhythms, and Punk\'s DIY attitude.'

  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Zeuhl',
    id: 'zeuhl',
    hard: ['avant-prog', 'jazz', 'modern-classical'],
    soft: [],
    desc: 'Epic, operatic sound fusing Jazz, Progressive Rock and Modern Classical music.'

  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'KrautRock',
    id: 'krautrock',
    hard: ['experimental-rock', 'electronics'],
    soft: [],
    artists: 'Kraftwerk, wire',
    dates: 'late 1960s'

  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Industrial Rock',
    id: 'industrial-rock',
    hard: ['industrial', 'rock'],
    soft: [],
    dates: 'late 1970s',
    artists: 'Stabbing Westward, God lives underwater, Marylin manson',
    desc: 'Incorporates abrasive guitars and synthesizers inspired by Industrial and various Post-Industrial styles.'
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
    soft: ['blues'],
    desc: 'Originated in the mid-1960s, characterized by the use of new recording techniques and effects, extended instrumental solos, and a general attempt to evoke or enhance the experience of altered states of consciousness.',
    artists: 'Pink Floyd, The doors, Jimi Hendrix'
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
    soft: ['jazz'],
    desc: 'Typified by complex rhythmic patterns, angular chords and melodic structures, often featuring odd time signatures, resulting in a  mathematical sound.'
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
    soft: [],
    desc: '"Performed with a less commercial sensibility, utilizing more eccentric, Punk-influenced sounds, moodier or quirkier lyricism, and sometimes ample amounts of distortion, often paired with Pop-influenced songwriting.',
    artists: 'Radiohead, Nirvana, Sonic youth'
  },

  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Alternative Dance',
    id: 'alternative-dance',
    hard: ['alternative-rock', 'dance'],
    soft: [],
    desc: 'Incorporates rhythms and synthesizers from Electronic Dance Music within the context of Alternative Rock and related styles; predominantly popular in the 1990s.'
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Grebo',
    id: 'grebo',
    hard: ['alternative-dance'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Sub,
    label: 'New Rave',
    id: 'new-rave',
    hard: ['alternative-dance', 'indie-pop'],
    soft: ['electroclash', 'electro-house'],
    desc: 'High energy mid-2000s style combining the tight and punchy grooves of Dance-Punk Revival with synths and four-on-the-floor rhythms from genres like Electroclash and Electro House.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Baggy',
    id: 'baggy',
    hard: ['alternative-rock'],
    soft: [],
    desc: 'Blends Dance and Funk-based grooves with a laid-back, psychedelic atmosphere; frequently features jangly guitars, looping basslines, four-bar drum patterns, and a hypnotic, carefree feel that originated in the Madchester scene of the late 1980s'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Indie Rock',
    id: 'indie-rock',
    hard: ['rock', 'pop', 'jingle'],
    soft: [],
    desc: 'Associated with a less mainstream-oriented and a DIY approach while often dabbling in Pop-informed melodic songwriting, eclecticism, and adopting an &#34;authentic&#34; or raw style.',
    artists: 'Arctic monkeys, The strokes'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Slacker Rock',
    id: 'slacker-rock',
    hard: ['indie-rock'],
    soft: [],
    desc: 'Raw, noisy, and melodic, with a loose, blasé approach to performances and typically low-fidelity production'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Garage Rock',
    id: 'garage-rock',
    hard: ['rock'],
    soft: [],
    desc: 'Raw and energetic, generally employing simple, sloppy, and fuzzbox-distorted guitar melodies in addition to frequent shouting or screaming.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Frat Rock',
    id: 'frat-rock',
    hard: ['garage-rock'],
    soft: [],
    desc: 'Early form of Garage Rock with hard Rhythm & Blues grooves, catchy melodies, and a fratty focus on partying and girls.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Freakbeat',
    id: 'freakbeat',
    hard: ['garage-rock'],
    soft: [],
    desc: 'Outgrowth of the Mod movement which combines elements of British Rhythm & Blues and Beat with studio effects common in Psychedelia such as fuzztones, flanging and chorus; often seen as a British relative of the American garage-psych scene.'
  },
  {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Garage Rock Revival',
    id: 'garage-rock-revival',
    hard: ['rock'],
    soft: [],
    desc: 'Incorporated the raucous spirit of &#39;60s Garage Rock into the sensibilities of Alternative Rock and Indie Rock; predominant in the 2000s.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Grunge',
    id: 'grunge',
    sub: 'Seattle rock',
    hard: ['alternative-rock', 'garage-rock'],
    soft: [],
    desc: 'Mixes Punk and Metal sensibilities into a mid-tempo approach featuring a heavy,sludgy guitar sound, raspy vocals and angsty lyricism.'
    , artists: 'Alice in chains, Nirvana, Pearl jam, soundgarden, Stone temple pilots'
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
    soft: [],
    desc: 'Characterized by a dense, layered sound with heavy use of guitar effects, indistinct vocals, and an overall ethereal atmosphere. The name shoegaze was coined by the British music press to describe the genre musicians tendency to stare at their effects pedals during live performances whch added a tone of melancholy.',
    artists: 'My bloody valentine, slowdive'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Glam Rock',
    id: 'glam-rock',
    hard: ['rock'],
    soft: ['pop-rock'],
    artists: 'T. Rex, David Bowie, Lou Reed, ',
    desc: 'Incorporates elements of Rock & Roll and Blues Rock into catchy Pop Rock melodies, usually accompanied with a strong sense of theatricality.'
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Glam Punk',
    id: 'glam-punk',
    hard: ['glam-rock', 'punk'],
    soft: [],
    artists: '',
    desc: 'Contrasts a snotty, nihilistic, and combative attitude of punk with theatrics and flamboyance.'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Electronic Rock',
    id: 'electronic-rock',
    hard: ['rock', 'electronics'],
    soft: [],
    artists: '',
    dates: 'late 1960s'
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Funk Rock',
    id: 'funk-rock',
    hard: ['rock', 'funk'],
    soft: [],
    artists: 'Funkadelic, Primus, Talking heads',
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Noise Rock',
    id: 'noise-rock',
    hard: ['rock', 'noise'],
    soft: [],
    desc: 'Incorporates high amounts of distortion and varying levels of dissonance, lo-fi production, and feedback.',
    artists: 'Sonic Youth, Blur',
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Pigfuck',
    id: 'pigfuck',
    hard: ['noise-rock', 'post-punk'],
    soft: ['post-hardcore', 'industrial' ],
    desc: 'Sloppy, abrasive and feedback-laden riffing with vulgar and edgy lyricism, informed by Post-Hardcore&#39;s aggression and Post-Punks rhythm section.',
    artists: 'Chat pile, Big black',
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Shitgaze',
    id: 'shitgaze',
    hard: ['noise-rock'],
    soft: ['shoegaze', 'garage-rock'],
    desc: 'Blends extremely raw and lo-fi aesthetics, abrasive guitar tones, and typically, the ethos of raucous Garage Rock, to create a sonic wall of deafening distortion evocative of Shoegaze.',
    artists: 'Chat pile',
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Shimokita kei',
    id: 'shimokita-kei',
    hard: ['alternative-rock', 'noise-rock', 'indie-rock'],
    soft: ['post-hardcore'],
    desc: 'Movement of the japanese indie rock scene based in the shimokita area of tokyo, characterized by a noisy and lo-fi sound with a strong emphasis on melody and catchy songwriting. in a more hard style, even using influecne from punk and post hardcore',
    artists: 'mass of the fermenting dregs, the pillows, ling tosite sigure',
  },
  {
    type: Type.Scene,
    parent: Type.Genre,
    desc: 'Movement of the brit bands for a soft rock sound',
    artists: 'pulp, coldplay, the verve, oasis',
    label: 'Britpop',
    id: 'britpop-scene',
    hard: ['alternative-rock', 'britpop', 'indie-rock', 'grunge'],
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
 {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Rock Sonico',
    id: 'rock-sonico',
    hard: ['alternative-rock', 'indie-rock', 'shoegaze'],
    desc: 'Movement located in argentina based around the local style of alternative rock bands',
    artists: 'Soda stereo, fito paez, Sumo, la renga',
    soft: []
  },
 {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'Maidcore',
    id: 'maidcore',
    hard: ['alternative-rock','post-rock',  'post-hardcore','heavy-metal'],
    desc: 'Maidcore Music - a variety of genres of electronic music, characterized by hard guitar riffs and solos washed down, 8-16 bit parts from ancient tape recorders and old-time segovod toys, screaming women (both in the base and on the backs), depressive-aggressive melody, which is achieved with the help of synth voices and ONIMEE bullshit for beauty, also characteristic breakbeat parts with growling 808 basses in 3 roads :) and of course vicious hats in a pile with lo-fi effects of idm styles.',
    artists: 'Yakui, futaba, chikoi, iotai,m ozoi',
    soft: []
  },
 {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'J rock',
    id: 'j-rock',
    hard: ['alternative-rock',  'post-hardcore','indie-rock', 'shimokita-kei'],
    desc: 'Movement of the japanese rock scene, with a wide variety of styles but with a general emphasis on catchy melodies and a more polished sound than the typical indie rock style. in a more hard style, even using influecne from punk and post hardcore',
    artists: 'ling tosite sigure, the pillows,  one ok rock',
    soft: ['j-pop', 'visual-kei']
  },
 {
    type: Type.Scene,
    parent: Type.Genre,
    label: 'visual kei',
    id: 'visual-kei',
    hard: ['alternative-rock',  'alternative-metal', 'symphonic-rock',  'shimokita-kei', 'gothic-rock', 'dark-cabaret',],
    desc: 'Movement of the japanese rock scene, with a wide variety of styles with a strong emphasis on theatrics and visual presentation, often incorporating elaborate costumes, makeup, and hairstyles, influenced by gothic styles and giving place to a more dark cabaret dressing, the music and sound is using heavy melodic and symphonic voices, heavy metal influences.',
    artists: 'X Japan, Dir en grey, Versailles, malice mizer, buck-tick',
    soft: []
  },


]

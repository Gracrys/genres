
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}


export const SpokenWord = [
    {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Spoken word',
    id: 'spoken-word',
    hard: ['poetry'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Fairy Tale',
    id: 'fairy-tale',
    desc: 'Traditional stories passed down throughout many generations.',
    hard: ['spoken-word'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Guided Meditation',
    id: 'guided-meditation',
    desc:'Practice wherein an instructor guides the listener through the process of meditation throughout a session.',
    hard: ['spoken-word'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Interview',
    id: 'interview',
    desc:'Recording of a specific person/s during a formal conversation arranged for historical archiving or media broadcast, often in a question and answer format in which the interviewee shares their views and personal anecdotes with the audience.',
    hard: ['spoken-word'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Lectures',
    id: 'lectures',
    desc:'Oral presentation with the intention to educate the audience on a specific topic.',
    hard: ['spoken-word'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Radio Drama',
    id: 'radio-drama',
    desc:'Narrative storytelling performed by voice actors and produced for radio broadcasting or published on audio media such as tapes or CDs.',
    hard: ['spoken-word'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Speeches',
    id: 'speeches',
    desc:'Rhetorical acts performed publicly wherein a speaker typically monologues around a particular topic.',
    hard: ['spoken-word'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Sub,
    label: 'Sermons',
    id: 'sermons',
    desc:'Religious oral addresses delivered with the intent to uplift or educate an audience.',
    hard: ['speeches'],
    soft: []
},

]

export const Poetry =[
    {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Poetry',
    id: 'poetry',
    desc: 'Not directly attached to classical music but a classic form of expressing emotions in a rhytmical way',
    hard: ['classical'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Beat Poetry',
    id: 'beat-poetry',
    desc: 'Stream-of-consciousness Poetry originating with the Beats in the 1950s.',
    hard: ['poetry'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Cowboy Poetry',
    id: 'cowboy-poetry',
    desc: 'Descended from the oral traditions of cowboys and ranchers, written with traditional use of rhyme and meter, using humor and slang, and primarily concerning the cowboy profession, lifestyle, and legacy.',
    hard: ['poetry'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Dub Poetry',
    id: 'dub-poetry',
    desc: 'Poetry with Dub and Reggae backing rhythms, originating in Jamaica in the 1970s.',
    hard: ['poetry','roots-reggae', 'dub'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Punk Poetry',
    id: 'punk-poetry',
    desc: 'Fast and rhythmic vocal delivery of political or satirical themes; frequently backed by Post-Punk or Minimal Wave instrumentation.',
    hard: ['poetry'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Slam Poetry',
    id: 'slam-poetry',
    desc: 'Developed in the US during the late 1980s and early 1990s with the growing popularity of poetry slams, a form of poetry competition in which competing performers recite poems in front of a crowd.',
    hard: ['poetry'],
    soft: []
},
{
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Sound Poetry',
    id: 'sound-poetry',
    desc: 'Emphasis is placed upon phonetics and the sounds of syllables rather than the meaning of the words themselves.',
    hard: ['poetry'],
    soft: []
},

...SpokenWord
]

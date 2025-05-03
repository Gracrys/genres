
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Classical = [    {
    type: Type.Super,
    label: 'Classical Music',
    id: 'classical',
    hard: [],
    desc: 'Known in complexity in its musical form and harmonic organization, with aspects like polyphony and harmony. This super genre encompasses all classical and complexity of sophisticated classical music.',
    soft: [],
    dates: '800 - 888 AC'
},
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
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Spoken word',
    id: 'spoken-word',
    hard: ['poetry'],
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'Western Classical Music',
    id: 'western-classical',
      dates: '800 - 888 AC',
    hard: ['classical'],
    desc: 'Known in complexity in its musical form and harmonic organization, with aspects like polyphony and harmony. This super genre encompasses all classical and complexity of sophisticated classical music, associated with aristocracy.',
    soft: []
},
{
    type: Type.Genre,
    parent: Type.Genre,

    label: 'Art Song',
    id: 'art-song',
      dates: '1500 - 1700 AC',
    hard: ['western-classical', 'poetry'],
    desc: 'Vocal music with text often set to Poetry, typically for single vocalist with instrumental accompaniment, distinguished by its design for concert recital and high artistic demands requiring classically trained musicians.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Elizabethan Song',
    id: 'elizabethan-song',
      dates: '1525 - 1625 AC',
    hard: ['art-song'],
    desc: 'Monophonic style developed in Renaissance England that is typically composed in strophic form for one to several vocalists with instrumental accompaniment ranging from solo lute to chamber ensemble.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Lied',
    id: 'lied',
      dates: '1800 AC',
    hard: ['art-song'],
    desc: 'Form of song arising from 19th century German Romanticism, usually for solo vocalist & piano with a text derived from poetry.',
    soft: []
},
{

    parent: Type.Genre,
    type: Type.Sub,
    label: 'Mélodie',
    id: 'melodie',
      dates: '1840 AC',
    hard: ['art-song'],
    desc: 'French form typically with a greater emphasis on emotional restraint, refinement, subtlety, and concision.',
    soft: []
},
{

    parent: Type.Genre,
    type: Type.Sub,
    label: 'Orchestral Song',
    id: 'orchestral-song',
      dates: '1840 AC',
    hard: ['art-song'],
    desc: 'Classical song for solo voice or voices with orchestral accompaniment.',
    soft: []
},
{

    parent: Type.Genre,
    type: Type.Sub,
    label: 'Bagatelle',
    id: 'bagatelle',
      dates: '1710 AC',
    hard: ['western-classical'],
    desc: 'Brief composition with an unpretentious, mostly accompanied by piano, with a playful sound.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Ballet',
    id: 'ballet',
      dates: '1500 AC',
    hard: ['western-classical'],
    desc: 'Western art music, often Orchestral Music, Danceable music, written to accompany classical dance productions of the same name.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Ballet de cour',
    id: 'ballet-cour',
      dates: '1520 AC',
    hard: ['ballet' , 'baroque-music'],
    desc: 'Earliest form developed by the French royal court and characterized by its artistic diversity, regimented structure, grand spectacle, and overt political elements.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Comédie-ballet',
    id: 'comedie-ballet',
      dates: '1650 AC',
    hard: ['ballet', 'baroque-music'],
    desc: 'French form of musical drama from the 17th century that combines operatic singing, classical dance, and theater.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Opéra-ballet',
    id: 'opera-ballet',
      dates: '1690 AC',
    hard: ['ballet', 'opera', 'baroque-music'],
    desc: 'Principally French style of musical drama that combines operatic singing with classical dance, usually with small Orchestral Music accompaniment.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Baroque Music',
    id: 'baroque-music',
      dates: '1600 AC',
    hard: ['western-classical'],
    desc: 'Constant rhythmic flow, or a steady motion throughout, generally focusing on a single melodic idea and including some form of counterpoint.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Zarzuela Barroca',
    id: 'zarzuela-barroca',
      dates: '1690 AC',
    hard: ['baroque-music'],
    desc: 'Earliest form that draws from a broad range of artistic sources, including theater, operatic singing, instrumental music, dance, popular music, poetry, and comedy.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Baroque Suite',
    id: 'baroque-suite',
      dates: '1600 AC',
    hard: ['western-classical'],
    desc: 'Collection of varied dance pieces, usually in the same key, structured on the music of European courtly dances.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Brazilian Classical Music',
    id: 'brazilian-classical',
      dates: '1700 AC',
    hard: ['western-classical', 'brazilian-music'],
    desc: 'Originated in the late 19th century, taking the European music that had been brought to the country by colonists and brought in parts of Brazilian Music.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Brazilian Valsa',
    id: 'brazilian-valsa',
      dates: '',
    hard: ['brazilian-classical'],
    desc: 'Brazillian Waltz characterized by its slow rhythms and romantic sound.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Byzantine Music',
    id: 'byzantine-music',
      dates: '300 AC',
    hard: ['western-classical'],
    desc: 'Byzantine classical music inspired by christianism',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Byzantine Chant',
    id: 'byzantine-chant',
      dates: '300 AC',
    hard: ['byzantine-music'],
    desc: 'Liturgical chant of Christian churches following the Orthodox rite.',
    soft: []
},{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Cantata',
    id: 'cantata',
      dates: '1600 AC',
    hard: ['western-classical'],
    desc: 'Vocal style for solo singers with instrumental & Choral accompaniment comparable to Oratorio, though often smaller in scale, more songlike, and with less focus on dramatic narrative.',
    soft: []
}
,{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Canzona',
    id: 'canzona',
    sub: 'chanson',
      dates: '1570 AC',
    hard: ['western-classical'],
    desc: 'Song-like structures and a contrapuntal texture technique known as imitation.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Capriccio',
    id: 'capriccio',
      dates: '1570 AC',
    hard: ['western-classical'],
    desc: 'Typically short and loosely structured, characterized by spontaneity, humor, fun, and technicality.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Chamber Music',
    id: 'chamber-music',
      dates: '1500 AC',
    hard: ['western-classical'],
    desc: 'Western Classical Music performed by a small ensemble, usually only a few performers.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Character Piece',
    id: 'character-piece',
      dates: '1700 AC',
    hard: ['western-classical'],
    desc: 'Broad instrumental genre, usually for solo piano, written to evoke an extramusical concept or mood.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Choral',
    id: 'choral',
      dates: '1500 AC',
    hard: ['western-classical'],
    desc: 'Choir-sung classical works covering periods from medieval music (an early form being Gregorian Chant) up to present day.',
    soft: ['gregorian-chant']
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Choral Concerto',
    id: 'choral-concerto',
      dates: '1500 AC',
    hard: ['choral'],
    desc: 'Composition for unaccompanied choir, set to sacred texts of Eastern Orthodox tradition.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Choral Symphony',
    id: 'choral-symphony',
      dates: '1700 AC',
    hard: ['choral'],
    desc: 'Combines symphonic Orchestral Music forces & structure with vocal parts for choir.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Mass',
    id: 'mass',
      dates: '1700 AC',
    hard: ['choral'],
    desc: 'Composition for choir, with or without instrumental accompaniment, that sets to music text from the liturgy of the Eucharist, principally from the Latin rites of the Roman Catholic Church.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Requiem',
    id: 'requiem',
      dates: '1200 AC',
    hard: ['mass'],
    desc: 'Musical setting commemorating the deceased with text usually derived from the Roman Catholic mass of the dead.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Cinematic Classical',
    id: 'cinematic-classical',
      dates: '1900 AC',
    hard: ['western-classical'],
    desc: 'Orchestral compositions generally associated with soundtracks to modern high-budget films, games, and other non-live media.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Epic Music',
    id: 'epic-music',
    sub:'epicore',
      dates: '1993',
    hard: ['cinematic-classical', 'electronics'],
    desc: 'Often associated with Electronic production, heavy percussion such as taiko drums, Choral vocals, and orchestral instrumentation to create a bombastic style commonly linked to movie trailers.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Spaghetti Western',
    sub: 'Wild west music',
    id: 'spaghetti-western',
      dates: '1960s',
    hard: ['cinematic-classical', 'surf-rock'],
    desc: 'Epic, cinematic sound evoking imagery of the Wild West, featuring a Surf Rock-inspired guitar tone while taking inspiration from the melodies and harmonies of traditional Mexican Music.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Classical Period',
    id: 'classical-period',
      dates: '1750',
    hard: ['western-classical'],
    desc: 'Refers to the phase in Western Classical Music history occurring from roughly 1750 to 1820, characterized by its emphasis on clarity, simplicity, and balance.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Divertissement',
    id: 'divertissement',
      dates: '1700s',
    hard: ['western-classical'],
    desc: 'Straightforward tuneful music historically written to serve as light entertainment for events or as interstitial movements within larger theatrical works.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Étude',
    id: 'etude',
      dates: '1800s',
    hard: ['western-classical'],
    desc: 'Composition written to both showcase & sharpen a particular playing or compositional technique, often requiring great skill from its performers.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Fantasia',
    id: 'fantasia',
      dates: '1520',
    hard: ['western-classical'],
    desc: 'Free-form, improvisational, and with contrasting sectional writing, sometimes based on preexisting melodies and generally meant to evoke a sense of imaginative exploration.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Fugue',
    id: 'fugue',
      dates: '1600s',
    hard: ['western-classical'],
    desc: 'Contrapuntal composition and technique for a fixed numbers of musical voices; following the imitations of one main theme.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Impromptu',
    id: 'impromptu',
      dates: '1800s',
    hard: ['western-classical'],
    desc: 'Composition written to sound like a spur-of-the-moment improvisation.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Latin American Classical Music',
    id: 'latin-american-classical',
      dates: '1500s',
    hard: ['western-classical', 'hispanic-music'],
    desc: 'Western Classical Music with influences from Hispanic American Music.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Light Music',
    id: 'light-music',
      dates: '1950s',
    hard: ['western-classical'],
    desc: 'Instrumental, typically through-composed style performed by an orchestra or small ensemble, with simpler arrangements and an emphasis on strong melodies.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Madrigal',
    id: 'madrigal',
      dates: '1950s',
    hard: ['western-classical'],
    desc: 'Secular polyphonic music based around poetry and generally performed by unaccompanied vocal ensembles of two to eight persons.',
    soft: ['canzona']
}, 
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Medieval Classical Music',
    id: 'medieval-classical',
      dates: '400s - 1400s',
    hard: ['western-classical'],
    desc: 'Composed during the Medieval period lasted approximately from the 5th to the late 15th centuries.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Ars Antique',
    id: 'ars-antique',
      dates: '1170s - 1310 ',
    hard: ['medieval-classical'],
    desc: 'Mainly sacred European medieval music from the period of 1170 to 1310, featuring the birth of measuring time in music and the use of polyphonies for four voices.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Ars Nova',
    id: 'ars-nova',
      dates: '1310 - 1377',
    hard: ['medieval-classical'],
    desc: 'Period (around 1310-1380) that succeeded Ars antiqua, mixing the sacred with the secular.',
    soft: []
}, 

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Ars Subtitlor',
    id: 'ars-subtitlor',
      dates: '1380 - 1420',
    hard: ['medieval-classical'],
    desc: 'Emerged in the final period of late medieval music (around 1380-1420) and continued to use the technique of isorhythms but with added complexity.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Contenance Angloise',
    id: 'contenante-angloise',
      dates: '1400s',
    hard: ['medieval-classical'],
    desc: 'Distinct style of Polyphonic Chant developed in fifteenth-century England.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Medieval Lyric Poetry',
    id: 'medieval-lyric-poetry',
      dates: '1000 - 1300',
    hard: ['medieval-classical', 'poetry'],
    desc: 'Lyric poetry from Medieval Europe, roughly from the 11th to the 14th century, most prominently the troubadours of southern France.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Plainsong',
    id: 'plainsong',
      dates: '600s',
    hard: ['medieval-classical'],
    desc: 'Monophonic chanting in the context of Roman Catholic and modern Anglican liturgy.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Ambrosian Chant',
    id: 'ambrosian-chant',
      dates: '300s',
    hard: ['plainsong'],
    desc: 'Liturgical chant practiced in parts of Italy and Switzerland, characterized by stepped melodic progression.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Canto Beneventano',
    id: 'canto-beneventano',
      dates: '1000s',
    hard: ['plainsong'],
    desc: 'Extinct plainchant tradition of Southern Italy characterized by lengthy melodies, extensive use of repetition, and a steady, undulating progression.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Canto Mozárabe',
    id: 'canto-mozarabe',
      dates: '700s',
    hard: ['plainsong'],
    desc: 'Iberian form of plainchant that flourished roughly 550-1085 AD.',
    soft: []
}, 
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Celtic Chant',
    id: 'celtic-chant',
      dates: '500 - 600',
    hard: ['plainsong'],
    desc: 'Extinct tradition of Catholic liturgical chant developed by the Celtic Christians of Britain, Ireland, and Brittany.',
    soft: []
}, {
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Gallican Chant',
    id: 'galican-chant',
      dates: '400 - 900',
    hard: ['plainsong'],
    desc: 'Extinct plainchant tradition originating from the region of Gaul (now modern-day France).',
    soft: []
}, 

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Gregorian Chant',
    id: 'gregorian-chant',
      dates: '1300',
    hard: ['plainsong'],
    desc: 'Liturgical, monophonic chant that accompanied Mass and other rituals in Western Christianity.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Sarum Chant',
    id: 'sarum-chant',
      dates: '1300',
    hard: ['gregorian-chant'],
    desc: 'Liturgical, monophonic chant that accompanied Mass and other rituals in Western Christianity.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Old Roman chant',
    id: 'old-roman-chant',
      dates: '1000s - 1300s',
    hard: ['plainsong'],
    desc: 'Plainchant tradition of Medieval Rome that was closely related to Gregorian Chant, though often more musically ornate.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Modern Classical',
    id: 'modern-classical',
      dates: '1900s',
    hard: ['western-classical'],
    desc: 'Multitude of different compositional approaches beginning in the 20th century that deviate significantly from the previously-held tenets',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Expresionism',
    id: 'expressionism',
      dates: '1918',
    hard: [ 'modern-classical'],
    desc: 'Originating between the abandonment of tonality at the conclusion of the period of Romanticism and the creation of twelve-tone composition.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Futurism',
    id: 'futurism',
      dates: '1909',
    hard: [ 'modern-classical'],
    desc: 'Radical and militant attitude, rejection of Western Classical Music and traditional criteria of craft, non-conformity, and a fascination with machines. Included dissonance elements',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Impressionism',
    id: 'impressionism',
      dates: 'late 1800s',
    hard: [ 'modern-classical'],
    desc: 'Originated in late 19th to early 20th century France as a reaction to Romanticism, placing a greater focus on depicting atmosphere and mood rather than fixed concepts.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Indeterminacy',
    id: 'indeterminacy',
      dates: 'late 1930s',
    hard: [ 'modern-classical'],
    desc: 'Leaves elements of composition, performance, or both up to chance.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Microtonal Classical',
    id: 'microtonal-classical',
      dates: ' 1930s',
    hard: [ 'modern-classical'],
    desc: 'Eschews the traditional twelve-tone scale of Western Classical Music, utilizing intervals outside of its bounds.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Minimalism',
    id: 'minimalism',
      dates: '1960s',
    hard: [ 'modern-classical'],
    desc: 'Developed in the United States in the 1960s; recognized for its repetitive nature and use of static harmony.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Holy Minimalism',
    id: 'holy-minimalism',
      dates: '1970s',
    hard: [ 'minimalism'],
    desc: 'Style informed by Christian Liturgical Music that emphasizes slow sustained rhythmic values, soft dynamics, and silence to produce a contemplative and reverential atmosphere.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'New Complexity',
    id: 'new-complexity',
      dates: '1980s',
      hard: [ 'modern-classical'],
    desc: 'Dense, difficult, and rigorously academic approach to Modern Classical composition which emerged in the 1980s.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Post-Minimalism',
    id: 'post-minimalism',
      dates: '1980s',
      hard: ['minimalism', 'modern-classical', 'avant-garde'],
    desc: 'Seeks to push Minimalisms linear composition style forward, and takes in influences from genres such as Jazz, Traditional Folk Music, and others..',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Totalism',
    id: 'totalism',
      dates: '1971s',
      hard: ['post-minimalism'],
    desc: 'Adds complex rhythmic structures and emphasis on surface energy to Minimalism.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Process Music',
    id: 'process-music',
      dates: '1960',
      hard: ['modern-classical'],
    desc: 'Compositions centering musical processes, both audible and inaudible.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Serialism',
    id: 'serialism',
      dates: '1947',
      hard: ['modern-classical'],
    desc: 'Compositional method in which pitches are grouped into sets (tone rows) to determine the order and frequency of their use.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Integral Serialism',
    id: 'integral-serialism',
      dates: '1947',
      hard: ['serialism'],
    desc: 'Application of twelve-tone technique in early Serialism to as many compositional factors as possible (in an attempt to apply total serial control).',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Sonorism',
    id: 'sonorism',
      dates: '1950',
      hard: ['modern-classical'],
    desc: 'Techniques and forms that emphasize texture and timbre.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Spectralism',
    id: 'spectralism',
      dates: '1950',
      hard: ['modern-classical'],
    desc: 'Compositional practice involving analysis, manipulation, and transformation of sound spectra.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Stochastic Music',
    id: 'stochastic-music',
      dates: '1950',
      hard: ['modern-classical'],
    desc: 'Composition featuring guided indeterminism, where the following state is only partially determined by the preceding state.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Motet',
    id: 'motet',
      dates: '1200s',
      hard: ['western-classical'],
    desc: 'Extremely diverse form of vocal music, usually written as a style of Polyphonic Chant for A cappella soloists or choir.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Neoclassicism',
    id: 'neoclassicism',
      dates: '1860s',
      hard: ['western-classical'],
    desc: 'Return to the more formal and less expansive structures and forms, beginning shortly after World War I as a reaction to what some composers perceived as excesses of Romanticism.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Nocturne',
    id: 'nocturne',
      //dates: '1200s',
      hard: ['western-classical'],
    desc: 'Intimate character piece meant to evoke associations with the night, usually written for solo piano.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Opera',
    id: 'opera',
      dates: '1597',
      hard: ['western-classical'],
    desc: 'European tradition which combines drama and distinctive vocal style in the context of Western Classical Music, usually performed as a theatrical work on stage.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Ballad Opera',
    id: 'ballad-opera',
      dates: '1700s',
      hard: ['opera'],
    desc: 'English reaction to the Italian Opera styles with a satirical sense of humor and scores borrowing from Traditional Folk Music and popular music.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Grand opéra',
    id: 'grand-opera',
      dates: '1828',
      hard: ['opera'],
    desc: 'French style characterized by its enlarged scope and sense of grandeur, with bigger orchestras and casts, and ornate sceneries and costumes.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Monodrama',
    id: 'monodrama',
      //dates: '1200s',
      hard: ['opera'],
    desc: 'Mostly modern style written for a single virtuoso singer with accompaniment, often shorter in length and with a more philosophically introspective or abstract libretto.',
    soft: []
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Opéra buffa',
    id: 'opera-buffa',
      dates: '1816',
      hard: ['opera'],
    desc: 'Lighthearted and amusing counterpart to Opera seria; developed in Naples in the first half of the 18th century.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Opéra-Comique',
    id: 'opera-comique',
      dates: '1700s',
      hard: ['opera'],
    desc: 'French style of Opera characterized by the use of some spoken dialogues to connect major arias and sung parts, as well as a more restrained approach to recitatives.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Opéra Seria',
    id: 'opera-seria',
      dates: '1700s',
      hard: ['opera'],
    desc: 'Italian Opera popular among European nobility and royalty throughout most of the 18th century, typified by its exaggerated dramatic flair and interspersed with dry recitative.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Opera Semiseria',
    id: 'opera-semiseria',
      dates: '1800s',
      hard: ['opera'],
    desc: 'Popular in the early and middle 19th century, containing appeals to emotion of Opera seria as well as some comedy elements present in Opera buffa.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Operetta',
    id: 'operetta',
      dates: '1800s',
      hard: ['opera'],
    desc: 'Light opera interspersed with spoken dialogues, being usually satirical and/or humorous in nature and centered around romantic plots and dancing scenes.',
    soft: []
},
{
    parent: Type.Sub,
    type: Type.Sub,
    label: 'Kalon\'ny fahiny',
    id: 'kalonny-fahiny',
      dates: '1920',
      hard: ['operetta'],
    desc: 'Light opera interspersed with spoken dialogues, being usually satirical and/or humorous in nature and centered around romantic plots and dancing scenes.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Romantische Oper',
    id: 'romantische oper',
      dates: '1800s',
      hard: ['opera'],
    desc: 'Early 19th century Germanic style of Opera influenced by German Folk Music and legends with a focus on fantasy, emotivity, heroic figures, and nationalism.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Singspiel',
    id: 'singspiel',
      dates: '1700s',
      hard: ['opera'],
    desc: 'German form of Opera distinguished by the prominent usage of spoken dialogues mixed with lyrical or folklore arias/ballads.',
    soft: ['opera-comique', 'zarzuela']
},

{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Tragédie en musique',
    id: 'tragedie-musique',
      dates: '1700s',
      hard: ['opera'],
    desc: 'French Opera genre developed by Jean-Baptiste Lully and Philippe Quinault in the second half of the 17th century, consisting of alterations made to the coeval Italian format to better fit the French language and please an audience more accustomed to the ballet de cour.',
    soft: ['ballet-cour']
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Verismo',
    id: 'verismo',
      dates: '1900s',
      hard: ['opera'],
    desc: 'Developed in Italy around the turn of the 20th century and favored melodramatic realism, a rejection of bel canto standards, and declamatory singing.',
    soft: ['ballet-cour']
},
{
    parent: Type.Genre,
    type: Type.Genre,
    label: 'Zarzuela',
    id: 'zarzuela',
      dates: '1900s',
      hard: ['opera'],
    desc: 'Spanish dramatic genre where spoken scenes are mixed with passages sung in operatic or popular styles.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Zeitoper',
    id: 'zeitoper',
    sub: 'German opera',
      dates: '1528',
      hard: ['opera'],
    desc: 'Short-lived scene in Weimar Germany, often having satirical plots and allusions to popular music.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Oratorio',
    id: 'oratorio',
      dates: '1600s',
      hard: ['western-classical'],
    desc: 'Composition for vocal soloists, choir, and orchestra, often making use of a comprehensive textbook of contemplative nature.',
    soft: []
},
{
    parent: Type.Genre,
    type: Type.Sub,
    label: 'Orchestral Music',
    id: 'orchestral-music',
      dates: '1700s',
      hard: ['western-classical'],
    desc: 'Western Classical Music performed by an orchestra.',
    soft: ['opera', 'ballet']
},
{
    parent: Type.Sub,
    type: Type.Scene,
    label: 'Christian Music',
    id: 'christian-music',
    hard: ['requiem','mass',  'old-roman-chant'],
    desc: 'Scene that encircles all religious christians rites around music',
    soft: []
},
]
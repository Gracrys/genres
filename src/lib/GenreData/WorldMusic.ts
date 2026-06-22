
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Jamaican = [
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Jamaican Music',
        id: 'jamaican',
        desc: 'Regional music of Jamaica ranges from its cultural origins in traditional and religious folk of the late 19th and early 20th centuries as superset to cultural root music.',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Dancehall',
        id: 'dancehall',
        desc: 'Regional music of Jamaica going for a more media spread with dance elements and reggae.',
        hard: ['jamaican', 'dance'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Digital Dancehall',
        id: 'digital-dancehall',
        desc: 'First, pre-Ragga style of Dancehall to popularize Electronic rhythms that arose in the mid-1980s.',
        hard: ['dancehall', 'electronics', 'reggae'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Ska',
        id: 'ska',
        desc: 'Originated in Jamaica in the late 1950s, characterized by a signature off-beat rhythm (referred to as the ‘skank’ rhythm), chop-style guitar work, busy bass lines and a use of horn sections.',
        hard: ['jamaican', 'jazz', 'rnb'],
        soft: ['calypso', 'mento']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Jamaican Ska',
        id: 'jamaican-ska',
        desc: 'Originated in Jamaica with groups who combined Jazz and Rhythm & Blues with rhythms of traditional Caribbean Music like Mento and Calypso.',
        hard: ['ska', 'jamaican'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Rocksteady',
        id: 'rocksteady',
        desc: 'Jamaican popular music that blossomed briefly between 1966 and 1968 as an evolution of Ska, being slower, more relaxed, and soulful.',
        hard: ['ska', 'rnb', 'soul'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: '2 tone',
        id: '2tone',
        desc: 'Fast paced ska with punk elements',
        hard: ['ska', 'new-wave', 'punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Third Wave Ska',
        id: 'third-wave-ska',
        desc: 'Expanded on 2 tone style and period for a more heavy sound',
        hard: ['2tone', 'rock'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Ska Punk',
        id: 'ska-punk',
        hard: ['third-wave-ska', 'punk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Skacore',
        id: 'skacore',
        hard: ['ska-punk', 'hardcore'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Crack Rock Steady',
        id: 'crack-rock-steady',
        hard: ['skacore', 'crust-punk'],
        soft: ['metal']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Mento',
        id: 'mento',
        desc: 'Jamaican folk originating in the late 19th century which brought together African and European elements, going on to influence the rhythm in Reggae.',
        hard: ['jamaican','caribbean-folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Nyahbinghi',
        id: 'nyahbinghi',
        desc: 'Performed at Rastafari religious ceremonies, consisting of tripartite hand-drumming and often accompanied by vocal chants.',
        hard: ['jamaican', 'chant'],
        soft: []
    },
    
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Reggae',
        id: 'reggae',
        desc: 'Developed in the 1960s; shuffling "bubble" and offbeat rhythms played on an organ, and staccato guitar and piano chords known as "skank."',
        hard: ['rocksteady', 'jazz', 'dancehall'],
        soft: ['calypso', 'mento']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Ragga',
        id: 'ragga',
        sub: 'Ragga Muffin',
        desc: 'Reggae genre with heavy hip hop elements, with a more fast paced style, it encircles from electronic hip hop danceable music to reggae rap substyles',
        hard: ['reggae', 'hiphop', 'electronics'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Deejay',
        id: 'deejay',
        desc: 'Sub genre in which a dj mixes electronics beats to a jamaican sound, precursor of mixing styles on clubs',
        hard: ['reggae', 'electronics'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dub',
        id: 'dub',
        desc: 'Primarily instrumental Reggae which developed from the extensive use of studio techniques and effects like reverb and delay and use of fast paced rhytmn plus some dissonant elements.',
        hard: ['reggae'],
        soft: [],
        dates: '1960s'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Lovers rock',
        id: 'lovers-rock',
        desc: 'Smooth, quiet Reggae beats with lyrics focusing on romance and love.',
        hard: ['reggae', 'caribbean', 'rock'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Pacific reggae',
        id: 'pacific-reggae',
        desc: 'Developed in Pacific island communities, incorporating elements from local Oceanian Music styles.',
        hard: ['reggae', 'oceanian-music'],
        soft: []
    },
  
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Pop reggae',
        id: 'pop-reggae',
        hard: ['reggae', 'pop'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Roots reggae',
        id: 'roots-reggae',
        hard: ['reggae'],
        soft: []
    },
   
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Seggae',
        id: 'seggae',
        desc: 'Fusion of Séga and Reggae, popular on Mauritius and other Mascarene Islands.',
        hard: ['reggae', 'sega'],
        soft: []
    },

    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Skinhead Reggae',
        id: 'skinhead-reggae',
        hard: ['reggae', 'skinhead'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Reggaeton',
        sub:'Regueton',
        id: 'reggaeton',
        hard: ['reggae', 'dancehall', 'hiphop', 'latin-music'],
        soft: [],
        desc: 'Genre that emerged in Puerto Rico during the late 1990s, influenced by Reggae and Dancehall from Jamaica, as well as hip hop and Latin American music, characterized by its use of dembow rhythm, rapped or sung vocals, and often explicit lyrics.  ',
        artists: 'Daddy Yankee, Don Omar, Nicky Jam, Bad Bunny'
    },
    {
        type: Type.Fusion,
        parent: Type.Genre,
        label: 'Reggae-fusion',
        id: 'reggae-fusion',
        hard: ['reggae'],
        soft: []
    },
]

export const Caribbean = [
      {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Caribbean Music',
        id: 'caribbean',
        hard: ['world-music'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Aleke',
        id: 'aleke',
        hard: ['caribbean','kawina'],
        soft: []
    },
  
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Brukdown',
        id: 'brukdown',
        desc: 'Belizean Creole genre typified by the use of accordion, banjo, and a distinctive percussion section.',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bullerengue',
        id: 'bullerengue',
        desc: 'Afro-Colombian popular genre which features a strong emphasis on rhythm and improvisation and a call-and-response format.',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Calypso',
        id: 'calypso',
        desc: 'Genre from Trinidad and Tobago featuring a brass section and percussion.',
        hard: ['caribbean'],
        soft: ['kaiso']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Calypso Venezolano',
        id: 'calypso-venezolano',
        desc: 'Derived from Trinidadian Calypso, popular in the eastern region of Venezuela and associated with Carnival.',
        hard: ['calypso'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Spouge',
        id: 'spouge',
        desc: 'Fusion of Calypso and Ska originating in Barbados during the 1960s and 70s.',
        hard: ['calypso', 'ska'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Caribbean Folk Music',
        id: 'caribbean-folk',
        hard: ['caribbean','folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bele',
        id: 'bele',
        desc: 'Drum-based folkdance with a strong Afro-influence, conducted by duos of dancers and accompanied by call-and-response singing, particularly popular in Martinique, Dominica and Trinidad and Tobago.',
        hard: ['caribbean-folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Benna',
        id: 'benna',
        desc: 'Drum-based folkdance with a strong Afro-influence, conducted by duos of dancers and accompanied by call-and-response singing, particularly popular in Martinique, Dominica and Trinidad and Tobago.',
        hard: ['caribbean-folk'],
        soft: []
    },
   
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Fungi',
        id: 'fungi',
        desc: 'Traditional Folk Music native to the Virgin Islands, named after a local dish which features a "mixed-up" flavor that can be compared to the style that combines Western instruments with local ones.',
        hard: ['caribbean-folk'],
        soft: []
    } ,   {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Garifuna Folk Music',
        id: 'garifuna',
        desc: 'Folk of Garifunas, Caribbean people born from escaped African slaves and local Caribbean natives.',
        hard: ['caribbean-folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Haitian Vodoo Drumming',
        id: 'haitian-vodoo-drumming',
        desc: 'Form of rhythmic performance by Haitian Vodou practitioners, played at associated ceremonies.',
        hard: ['caribbean-folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Kaiso',
        id: 'kaiso',
        desc: 'Trinidadian folk considered to be the precursor of Calypso, led by "griot" storytellers who sing derogatory lyrics to the sound of drums and guitars in a call-and-response manner in order to rebel against slaveowners.',
        hard: ['caribbean-folk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Kitchen Dance Music',
        id: 'kitchen-dance-music',
        desc: 'Cayman Islands music played during kitchen dance parties, centered around fiddle and percussion (handmade or kitchen grater) playing.',
        hard: ['caribbean-folk'],
        soft: []
    },
 ...Jamaican,
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Méringue',
        id: 'meringue',
        desc: 'Haitian genre that dates back to the early 19th century; the roots of Compas.',
        hard: ['caribbean-folk'],
        soft: []
    },
 
        {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Ripsaw',
        id: 'ripsaw',
        desc: 'Haitian genre that dates back to the early 19th century; the roots of Compas.',
        hard: ['caribbean-folk'],
        soft: []
    },
      {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tumba',
        id: 'tumba',
        desc: 'Haitian genre that dates back to the early 19th century; the roots of Compas.',
        hard: ['caribbean-folk'],
        soft: []
    },
      {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Virgin Islander Cariso',
        id: 'virgin-islander-cariso',
        desc: 'Haitian genre that dates back to the early 19th century; the roots of Compas.',
        hard: ['caribbean-folk'],
        soft: []
    },
        {
        type: Type.Sub,
        parent: Type.Genre,
        desc: 'Suriname root music, indigenous on nature, based on indo-caribbean styles',
        label: 'Kawina',
        id: 'kawina',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        desc: 'Derived from coast, caribbean and african roots and folk music',
        label: 'Kaseko',
        id: 'kaseko',
        hard: ['kawina','caribbean', 'calypso'],
        soft: ['jazz']
    },
{
        type: Type.Sub,
        parent: Type.Genre,
        desc: 'Colombian genre heavily influenced by the traditional music of San Basilio de Palenque as well as modern Caribbean and African sensibilities.',
        label: 'Champeta',
        id: 'champeta',
        hard: ['caribbean'],
        soft: ['african']
    },
{
        type: Type.Sub,
        parent: Type.Genre,
        desc: 'Encompasses the wide variety of traditions from the island of Cuba.',
        label: 'Cuban Music',
        id: 'cuban-music',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Abakuá Music',
        id: 'abakua-music',
        desc: 'Ritual music associated with the Abakuá religious fraternity of Cuba, descending from the Ékpè tradition of West Africa.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Chachachá',
        id: 'chachacha',
        desc: 'Ballroom dance music derived from Danzón.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Changüí',
        id: 'changui',
        desc: 'One of the oldest popular Cuban styles, originating in the 19th century with slaves that worked in sugar refineries near Baracoa who combined elements of Spanish popular songs with Bantu traditions.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Conga',
        id: 'conga',
        desc: 'Evolved alongside Rumba cubana in the late 19th century, featuring large and heterogenous percussion sections performing simple and syncopated rhythms alongside a small wind section.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cuban Charanga',
        id: 'cuban-charanga',
        desc: 'Played by traditional Cuban ensembles, influenced by Son cubano but performed on European instruments such as piano, bass, violins, and flutes.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cubaton',
        id: 'cubaton',
        desc: 'Rhythmically and vocally inspired by major elements of Cuban Music.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Reparto',
        id: 'reparto',
        desc: 'Incorporating Cuban Music elements, resulting in dynamic rhythms and a sound palette that typically features Salsa-like guitar picking.',
        hard: ['cubaton'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Danzón',
        id: 'danzon',
        desc: 'Development on Habanera in 2/4 time, featuring African influence through complex cross-rhythms, that would become the most popular style of dance music in Cuba during the late 19th century and early 20th century.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Descarga',
        id: 'descarga',
        desc: 'Cuban genre consisting of improvised jam sessions incorporating elements of Jazz and Afro-Cuban music.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Filin',
        id: 'filin',
        desc: 'Emotional style that appeared in La Habana during the late 1940s, deeply influenced by the melodic and expressive style of Vocal Jazz.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Guajira',
        id: 'guajira',
        desc: 'Originally developed in Cuba between the 18th and 19th Century as a narrative style influenced by Tonada chilena.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Guaracha',
        id: 'guaracha',
        desc: 'Humorous song with short notes and a fast tempo that commonly alternates a short fourth line verse with a repeated fourth line chorus.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Habanera',
        id: 'habanera',
        desc: 'Based around the Habanera rhythm, where the most typical instruments used are guitars, lutes, and bandurrias.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Mambo',
        id: 'mambo',
        desc: 'Dance-oriented evolution from Danzón during the late 1930s.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Mozambique',
        id: 'mozambique',
        desc: 'Cuban genre featuring energetic, African-influenced percussion.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Pachanga',
        id: 'pachanga',
        desc: 'Combination of Merengue, Conga, Rumba cubana, and Cumbia; fast, festive, and playful.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Pilón',
        id: 'pilon',
        desc: 'Featuring rhythms described as mimicking those created while pounding sugarcane with African baton-like tools.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rumba cubana',
        id: 'rumba-cubana',
        desc: 'Folkloric manifestation of Afro-Cuban music that encompasses dance, voice, and drums.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Guaguancó',
        id: 'guaguanco',
        desc: 'Emerged after the abolition of slavery in Cuba in 1886; usually features a lead singer, accompanied by three large drums, known as tumbadoras or congas, and a call-and-response chorus.',
        hard: ['rumba-cubana'],
        soft: []
    },
   
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Son cubano',
        id: 'son-cubano',
        desc: 'Cuban style popular from the 1920s to the 1950s that combines the structure of Spanish song-oriented styles with African rhythms and percussion.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bolero son',
        id: 'bolero-son',
        desc: 'Blend of Bolero and Son cubano that appeared during the 1920s.',
        hard: ['son-cubano'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Son montuno',
        id: 'son-montuno',
        desc: 'Developed in the 1940s, characterized by more elaborate instrumental arrangements and larger ensembles typically adding a horn section, conga drums, and piano.',
        hard: ['son-cubano'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Songo',
        id: 'songo',
        desc: 'Cuban style originating in the late 1960s, combining elements from Rumba cubana and Son cubano with Jazz and Funk.',
        hard: ['cuban-music'],
        soft: []
    },
   
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Trova',
        id: 'trova',
        desc: 'One of the most ancient expressions of Cuban Music, based around lone Singer-Songwriters who use nothing but a guitar as their preferred accompaniment and place emphasis on lyrics.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Nueva trova',
        id: 'nueva-trova',
        desc: 'Found inspiration in the 1950s Cuban Revolution and had the intention of introducing new musical ideas to the original Trova.',
        hard: ['trova'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tumba francesa',
        id: 'tumba-francesa',
        desc: 'Combination of traditional music from Benin with French ballroom dancing that originates in the Oriente province (formerly Santiago de Cuba Province) in Cuba.',
        hard: ['cuban-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        desc: 'Style that incorporates elements of Colombian traditional music, which includes and keeps influences from Spanish, African, and Indigenous cultures.',
        label: 'Cumbia colombiana',
        id: 'cumbia-colombiana',
        hard: ['caribbean'],
        soft: ['african']
    },
{
        type: Type.Sub,
        parent: Type.Genre,
        desc: 'Encompasses the many musical styles developed in the Dominican Republic.',
        label: 'Dominican Music',
        id: 'dominican-music',
        hard: ['caribbean'],
        soft: ['african']
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bachata',
        id: 'bachata',
        desc: 'Romantic dance and accompanying music originating in the Dominican Republic, featuring arpeggiated chords in the melody.',
        hard: ['dominican-music', 'caribbean','dance'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Dembow',
        id: 'dembow',
        desc: 'Originated in the Dominican Republic during the early 1990s, featuring rapping indebted to Hip Hop and a style drawing on Dancehall, particularly the "Dem Bow" riddim.',
        hard: ['dominican-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Merengue',
        id: 'merengue',
        desc: 'Dominican Republic dance genre that had a commercial boom at the end of the 1980s.',
        hard: ['dominican-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Mambo urbano',
        id: 'mambo-urbano',
        desc: 'Rhythmically simpler and more eclectic style, absorbing influences from Hip Hop, Reggaetón, and other modern genres, particularly in regards to vocals.',
        hard: ['merengue'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Merecumbé',
        id: 'merecumbe',
        desc: 'Colombian genre which combines Cumbia with Merengue.',
        hard: ['merengue'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Merengue típico',
        id: 'merengue-tipico',
        desc: 'Earliest, most stripped-down form of Merengue.',
        hard: ['merengue'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Merenhouse',
        id: 'merenhouse',
        desc: 'Popularized by Dominican-American artists of the 1990s, blending modern Merengue with electronic instrumentation and the combination of rapping/singing vocals.',
        hard: ['merengue'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tecnomerengue',
        id: 'tecnomerengue',
        desc: 'Fuses basic Merengue rhythms with influences from Cumbia and Lambada, being largely synthesized, with live instruments usually limited to percussion and brass.',
        hard: ['merengue'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        desc: 'Encompasses the many musical styles developed in the Dominican Republic.',
        label: 'French Caribbean Music',
        id: 'french-caribbean-music',
        hard: ['caribbean'],
        soft: ['african']
    },
     {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Biguine',
        id: 'biguine',
        desc: 'Dating back to the 19th century; originating as a fusion of traditional Bele music with Polka.',
        hard: ['french-caribbean-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bouyon',
        id: 'bouyon',
        desc: 'With a name translating to "broth", this fast-paced genre from Dominica originated as a blend of various traditional and modern Caribbean styles.',
        hard: ['french-caribbean-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cadence lypso',
        id: 'cadence-lypso',
        desc: 'Caribbean genre originating in the 1970s, combining elements of Haiti\'s Cadence rampa and Compas with Trinidad\'s Calypso.',
        hard: ['french-caribbean-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Dennery Segment',
        id: 'dennery-segment',
        desc: 'Developed in Saint Lucia in the early 2010s; heavily influenced by Angolan Kuduro, as well as incorporating elements of Zouk and Lucian drums alongside suggestive lyrics usually sung in Kwéyòl (Saint Lucian Creole).',
        hard: ['french-caribbean-music', 'soca'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Gwo ka',
        id: 'gwo-ka',
        desc: 'Developed in the island of Guadeloupe; driven by a group of gwo ka drums.',
        hard: ['french-caribbean-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Haitian Music',
        id: 'haitian-music',
        desc: 'Encompasses the styles of music developed by the Haitian people.',
        hard: ['french-caribbean-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cadence rampa',
        id: 'cadence-rampa',
        desc: 'Developed in parallel with Compas, based on Méringue with a stronger Cuban influence.',
        hard: ['haitian-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Compas',
        id: 'compas',
        desc: 'Popular genre from Haiti, updating the older Méringue style with influences from Mambo and Jazz.',
        hard: ['haitian-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rabòday',
        id: 'raboday',
        desc: 'Fast-paced rhythm inspired by Rara, with Electronic instrumentation and humorous sexual and political lyrics.',
        hard: ['haitian-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rara',
        id: 'rara',
        desc: 'Derived from the Haitian Vodou Drumming tradition, often played at street festivals and carnivals and usually having celebratory or political lyrics.',
        hard: ['haitian-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rasin',
        id: 'rasin',
        desc: 'Blends the highly rhythmic drumming of traditional Haitian Vodou music with Rock-influenced electric instrumentation such as guitar, keyboard, and bass.',
        hard: ['haitian-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Twoubadou',
        id: 'twoubadou',
        desc: 'Pastoral, often satirical Haitian style usually performed by small groups centered around the acoustic guitar.',
        hard: ['haitian-music'],
        soft: []
    },
 
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tumbélé',
        id: 'tumbele',
        desc: 'Combines Haitian Compas, Soukous and Cuban Guaguancó with the local style of Biguine.',
        hard: ['haitian-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Zouk',
        id: 'zouk',
        desc: 'Fast-paced danceable pop that began in early 1980s French Antilles, merging and updating more traditional local genres.',
        hard: ['french-caribbean-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cabo-Zouk',
        id: 'cabo-zouk',
        desc: 'Popular in Cape Verde and the Cape Verdean diaspora in Europe and North America, with a slow and sensuous tempo, and favoring more sophisticated studio productions.',
        hard: ['zouk'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Zouk Love',
        id: 'zouk-love',
        desc: 'More sentimental form of Zouk which emerged in the mid-1980s.',
        hard: ['zouk'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Gaita Zuliana',
        id: 'gaita-zuliana',
        desc: 'A traditional Venezuelan folk music style played, Emerged in the state of Zulia in the 1950s, merging Spanish Folk Music and Venezuelan Christmas carols.',
        hard: ['caribbean'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Garifuna Music',
        id: 'garifuna-music',
        desc: 'Music of the Garifuna, an Afro-Indigenous people from Central America and Saint Vincent and the Grenadines.',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Punta',
        id: 'punta',
        desc: 'Garifuna Music with influences from other Caribbean genres such as Reggae, Soca, and Zouk, as well as Hispanic American Music.',
        hard: ['garifuna-music'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Goombay',
        id: 'goombay',
        desc: 'Bahamian music centered around the drum known as the goombay, a sort of membranophone.',
        hard: ['caribbean'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Indo-Caribbean Music',
        id: 'indo-caribbean-music',
        desc: 'Music of the Indo-Caribbean diaspora.',
        hard: ['caribbean'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Baithak Gana',
        id: 'baithak-gana',
        desc: 'Indo-Caribbean genre from Suriname, consisting of Bhojpuri Folk Music with local Caribbean influence.',
        hard: ['indo-caribbean-music'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Chutney',
        id: 'chutney',
        desc: 'Indo-Caribbean genre developing as a fusion of Bhojpuri Folk Music with traditional Caribbean songs; later influenced by Calypso, Soca and Filmi.',
        hard: ['indo-caribbean-music'],
        soft: []
    },
        {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Chutney Soca',
        id: 'chutney-soca',
        desc: 'Mixture of Soca rhythms with Chutney&#39;s Indo-Caribbean traits and instrumentation.',
        hard: ['chutney', 'soca'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tassa',
        id: 'tassa',
        desc: 'Drum ensemble descended from a mixture of northern Indian drumming traditions.',
        hard: ['indo-caribbean-music'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Junkanoo',
        id: 'junkanoo',
        desc: 'Highly rhythmic Bahamian style which traditionally accompanies the arts festival and street parade of the same name.',
        hard: ['caribbean'],
        soft: []
    },
   
      {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Parang',
        id: 'parang',
        desc: 'Latin-Caribbean genre central to Trinidad and Tobago and Venezuela traditionally used for nighttime celebrations in Trinidadian towns.',
        hard: ['caribbean'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Porro',
        id: 'porro',
        desc: 'Lively Hispanic American Music and dance style native to Colombia which gained popularity in the 1940s.',
        hard: ['caribbean'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Soca',
        id: 'soca',
        desc: 'Upbeat, poppy and danceable style rooted in Calypso and Indo-Caribbean Music; developed in the late 1960s and early 1970s in Trinidad and Tobago.',
        hard: ['caribbean', 'calypso'],
        soft: []
    },

      {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bashment Soca',
        id: 'bashment-soca',
        desc: 'Highly energetic, Dancehall-influenced form of Soca developed in Barbados featuring dancefloor-oriented lyrics delivered in an aggressive chanting style.',
        hard: ['soca'],
        soft: []
    },
 
     {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Power Soca',
        id: 'power-soca',
        desc: 'Often at a tempo of 160 BPM and incorporating hard, frantic rhythms, highly synthesized production, and call-and-response vocals.',
        hard: ['soca'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rapso',
        id: 'rapso',
        desc: 'Fusion of Soca and Hip Hop unique to Trinidad and Tobago.',
        hard: ['soca'],
        soft: []
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Steel band',
        id: 'steel-band',
        desc: 'Ensembles made out of steel drums that often perform Standards, Calypso, and Western Classical Music with densely rhythmic and colorful arrangements.',
        hard: ['caribbean'],
        soft: []
    },
     {
        type: Type.Genre,
        parent: Type.Genre,
        label: 'Salsa',
        id: 'salsa',
        desc: 'Often incorporating congas, timbales and bongos as well as smaller instruments, such as maracas, clave and güiro.',
        hard: ['caribbean', 'latin-jazz'],
        soft: [],
artists: 'Ruben blades, Willy colon, oscar de leon'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Salsa Choke',
        id: 'salsa-choke',
        desc: 'Colombian style that takes heavy influence from Reggaetón, House, Hip Hop, and various Afro-Colombian and Colombian Pacific styles.',
        hard: ['salsa'],
        soft: []
    },
        {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Salsa Dura',
        id: 'salsa-dura',
        desc: 'Earlier form of Salsa, usually less rigid in structure allowing for extended jam sessions; lyrical themes revolve around the "barrio" way of life and Latin American traditions.',
        hard: ['salsa'],
        soft: []
    },
            {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Salsa Romantica',
        id: 'salsa-romantica',
        desc: 'Salsa following a stronger influence from Pop, typically sharing shorter, conventional structures and romantic lyricism.',
        hard: ['salsa'],
        soft: []
    },
          {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Timba',
        id: 'timba',
        desc: 'Salsa following a stronger influence from Pop, typically sharing shorter, conventional structures and romantic lyricism.Combines Salsa with other genres such as Hip Hop, Disco, Funk, Jazz and Rock.',
        hard: ['salsa', 'cuban-music'],
        soft: ['hiphop', 'jazz', 'pop']
    },
     {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tropicanibalismo',
        id: 'tropicanibalismo',
        desc: 'Colombian scene born in the early 2000s with the intention of reinventing Colombian coastal music, from a more current and experimental approach.',
        hard: ['caribbean'],
        soft: []
    },
      {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Vallenato',
        id: 'vallenato',
        desc: 'Accordion-led style of folk and popular music originating in Colombia&#39;s Caribbean region.',
        hard: ['caribbean'],
        soft: []
    },
]

export const Hispanic = [
 {
        parent:  Type.Super,
        type: Type.Genre,
        label: 'Hispanic Music',
        id: 'hispanic-music',
        desc: 'Music of hispanic roots',
        hard: ['world-music'],
        soft: []
    },
    
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Canción melódica',
        id: 'cancion-melodica',
        desc: 'Sentimental vocal music sung in Spanish with a focus on the chorus, originally developed in the first half of the 20th century from a variety of traditional Hispanic genres.',
        hard: ['hispanic-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bolero-Beat',
        id: 'bolero-beat',
        desc: 'Latin American style stemming from both Canción melódica and the British Beat.',
        hard: ['cancion-melodica'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Copla',
        id: 'copla',
        desc: 'A form of Spanish popular song with roots in Cancion melodica poetic form, emerging in the 1930s and characterized by dramatic and emotional storytelling.',
        hard: ['cancion-melodica'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cuplé',
        id: 'cuple',
        desc: 'A popular Spanish theatrical song style, light and often risqué, that flourished from the late 19th century to the early 20th century.',
        hard: ['cancion-melodica'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Guajira (Canción)',
        id: 'guajira-cancion',
        desc: 'A style derived from Cuban Genre, typically featuring nostalgic or pastoral lyrics about rural life, played with acoustic guitars.',
        hard: ['cancion-melodica'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Spanish Cuplé',
        id: 'spanish-cuple',
        desc: 'The localized form of Cuple in Spain, which evolved into a distinct genre with elements of folklore and social satire.',
        hard: ['cuple'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Flamenco',
        id: 'flamenco',
        desc: 'An art form based on the various folklore traditions of southern Spain, specifically Andalusia, encompassing cante (singing), toque (guitar playing), baile (dance), jaleo (vocalizations), palmas (handclapping) and pitos (finger snapping).',
        hard: ['hispanic-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cante flamenco',
        id: 'cante-flamenco',
        desc: 'The traditional vocal style of Flamenco, characterized by profound emotional expression, complex microtonal ornamentations, and unique rhythmic structures.',
        hard: ['flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Alboreá',
        id: 'alborea',
        desc: 'A traditional Flamenco style exclusively performed at Gypsy weddings, characterized by its ritualistic and festive nature.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Alegrías',
        id: 'alegrias',
        desc: 'A lively and festive Flamenco style originating from Cádiz, characterized by its upbeat 12-beat rhythm and dynamic guitar accompaniment.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bulerías',
        id: 'bulerias',
        desc: 'A fast-paced, highly rhythmic, and improvisational Flamenco style originating from Jerez, characterized by its energetic 12-beat structure.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Bulerías por soleá',
        id: 'bulerias-por-solea',
        desc: 'A transitional Flamenco style that blends the rhythmic energy of Solea with the solemnity and slower tempo of Flamenco.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cabales',
        id: 'cabales',
        desc: 'A rare and solemn variety of Flamenco that concludes with a major-key resolution, requiring great vocal skill.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Campanilleros',
        id: 'campanilleros',
        desc: 'A Flamenco style derived from religious songs sung by bell-ringers during dawn processions, popularized in a flamenco form by Manuel Torre.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cantiñas',
        id: 'cantinas',
        desc: 'A group of festive and lively Flamenco styles from the province of Cádiz, shared under a similar 12-beat rhythmic structure.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Caracoles',
        id: 'caracoles',
        desc: 'A joyful and lively style within the flamenco family, characterized by its festive character and historical connection to Madrid.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Carcelera',
        id: 'carcelera',
        desc: 'An unconditional, a cappella Flamenco style historically sung by prisoners, conveying deep suffering and loss of freedom.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cartagenera',
        id: 'cartagenera',
        desc: 'A non-rhythmic, free-form Flamenco style originating from the mining region of Cartagena, belonging to the cantes minero-levantinos family.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Colombiana',
        id: 'colombiana',
        desc: 'An idealized, rhythmically adaptive style created in the 1930s inspired by Colombian folk rhythms, classified under the cantes de ida y vuelta.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Debla',
        id: 'debla',
        desc: 'An ancient, unaccompanied and highly melismatic Flamenco style related to the flamenco, known for its deep spiritual intensity.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Fandango flamenco',
        id: 'fandango-flamenco',
        desc: 'The stylized, flamenco adaptation of traditional Iberian  folk songs, existing in both strict rhythmic styles and free-form regional variants.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Fandango de Huelva',
        id: 'fandango-de-huelva',
        desc: 'The most popular rhythmic variety of Flamenco, originating from the province of Huelva, featuring a distinct compound meter.',
        hard: ['fandango-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Fandango grande',
        id: 'fandango-grande',
        desc: 'A highly emotional, rhythmically free and complex variant of Flamenco that requires Virtuoso vocal technique.',
        hard: ['fandango-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Fandango local y personal',
        id: 'fandango-local-y-personal',
        desc: 'A subcategory of free-form Flamenco developed by specific towns or individual artists, reflecting unique stylistic flourishes.',
        hard: ['fandango-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Farruca',
        id: 'farruca',
        desc: 'A dramatic, minor-key Flamenco style characterized by its strict 4/4 rhythm, strongly associated with solo male dance.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Garrotín',
        id: 'garrotin',
        desc: 'A festive, major-key Flamenco style in a steady 4/4 meter, originating outside Andalusia but fully absorbed into flamenco culture.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Granaína',
        id: 'granaina',
        desc: 'A free-form, highly ornamented Flamenco style belonging to the fandango family, associated with Granada.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Guajira (Flamenco)',
        id: 'guajira-flamenco',
        desc: 'A rhythmic Flamenco style belonging to the cantes de ida y vuelta, inspired by rural Cuban themes and utilizing a 12-beat syncopated rhythm.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Jabera',
        id: 'jabera',
        desc: 'An ancient, structurally complex and rhythmically free Flamenco variant from Málaga, characterized by its difficult melismas.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Liviana',
        id: 'liviana',
        desc: 'A lighter, 12-beat Flamenco style traditionally sung a cappella or with simple guitar chords, often serving as a prelude to other songs.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Malagueña (Flamenco)',
        id: 'malaguena-flamenco',
        desc: 'A free-form, deeply expressive Flamenco style derived from the old fandangos of Málaga, characterized by its melodic richness.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Mariana',
        id: 'mariana',
        desc: 'A rare and haunting Flamenco style with a 4/4 rhythm, traditionally linked to traveling street performers and Romani heritage.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Martinete',
        id: 'martinete',
        desc: 'An intense, a cappella Flamenco style originating in the gypsy blacksmith forges, traditionally accompanied only by the metal sound of a hammer on an anvil.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Media granaína',
        id: 'media-granaina',
        desc: 'A variation of the Flamenco that is slightly shorter and structured differently, focusing on vocal precision in the upper register.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Milonga flamenco',
        id: 'milonga-flamenco',
        desc: 'A nostalgic and lyrical style belonging to the cantes de ida y vuelta, adapted from the Argentine.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Minera',
        id: 'minera',
        desc: 'The foundational, rhythmically free Flamenco style from the mining regions of Murcia, expressing the harsh realities of miner life.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Mirabrás',
        id: 'mirabras',
        desc: 'A vibrant, syncopated 12-beat style belonging to the Flamenco family, characterized by its lively dynamics.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Murciana',
        id: 'murciana',
        desc: 'A free-form Flamenco style closely related to the Flamenco, reflecting the local folklore of the Murcia region.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Petenera',
        id: 'petenera',
        desc: 'A deeply melancholic and distinctive Flamenco style utilizing an alternating 12-beat meter, historically associated with bad luck in flamenco superstition.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Polo',
        id: 'polo',
        desc: 'An ancient and formal 12-beat Flamenco style characterized by its rigid structure and characteristic textless melismas.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Romance flamenco',
        id: 'romance-flamenco',
        desc: 'The adaptation of traditional Spanish epic ballads into the Flamenco framework, usually sung a cappella or to a 12-beat rhythm.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Romera',
        id: 'romera',
        desc: 'A festive and cheerful 12-beat style belonging to the Flamenco family, popularized in late 19th-century cafés cantantes.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rondeña',
        id: 'rondena',
        desc: 'A free-form Flamenco style belonging to the fandango family, originating in Ronda, often featuring a specific alternative guitar tuning.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rumba flamenca',
        id: 'rumba-flamenca',
        desc: 'A highly rhythmic and commercialized Flamenco style, heavily influenced by Cuban styles, characterized by its rapid strumming technique.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Saeta',
        id: 'saeta',
        desc: 'A deeply religious, a cappella song of devotion sung from balconies during Holy Week processions in Spain, fully stylized by flamenco singers.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Serrana',
        id: 'serrana',
        desc: 'A melancholic 12-beat Flamenco style with lyrics focused on mountain life and outlaws, often accompanied in an E-position phrygian mode.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Sevillanas',
        id: 'sevillanas',
        desc: 'A festive and structured folk song and dance native to Seville, consisting of four distinct parts in a 3/4 meter, commonly integrated into flamenco.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Sigueriya',
        id: 'sigueriya',
        desc: 'One of the oldest, most solemn, and structurally tragic Flamenco styles, utilizing a complex, shifted 12-beat internal syncopation.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Soleá',
        id: 'solea',
        desc: 'The foundational and deeply expressive 12-beat Flamenco style considered by many to be the heart of flamenco, characterized by a solemn tempo.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Soleá por bulerías',
        id: 'solea-por-bulerias',
        desc: 'An intermediate Flamenco style combining the solemn harmonic feeling of Flamenco with the faster, rhythmic drive of Solea.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tango flamenco',
        id: 'tango-flamenco',
        desc: 'A foundational, highly rhythmic and expressive 4/4 Flamenco style characterized by its distinct syncopation and lively character.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tanguillo',
        id: 'tanguillo',
        desc: 'A joyful and syncopated rhythmic style native to Cádiz, often featuring satirical or humorous lyrics, related to the tango family.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Taranta',
        id: 'taranta',
        desc: 'The foundational free-form cante minero-levantino style from Almería and Jaén, deeply dark and filled with dramatic vocal leaps.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Taranto',
        id: 'taranto',
        desc: 'The danceable, rhythmically structured counterpart to the Taranta, keeping its dark minor/phrygian melodies over a steady tango-like pulse.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tiento',
        id: 'tiento',
        desc: 'A formal and majestic 4/4 Flamenco style belonging to the tango family, performed at a slower, deliberate tempo with syncopated pauses.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Toná',
        id: 'tona',
        desc: 'The most primitive category of unconditional, a cappella Flamenco styles, serving as the historical root for genres like martinetes and carceleras.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Trillera',
        id: 'trillera',
        desc: 'An a cappella Flamenco style derived from agricultural work songs sung during threshing, marked by its specific rhythmic vocalizations.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Verdiales',
        id: 'verdiales',
        desc: 'An ancient, festive folk variety of Flamenco from the mountains of Málaga, traditionally accompanied by guitars, violins, tambourines, and cymbals.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Vidalita',
        id: 'vidalita',
        desc: 'A melancholic and sweet cante de ida y vuelta style adapted into flamenco from the Argentine  folk tradition.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Zambra',
        id: 'zambra',
        desc: 'A dramatic Flamenco dance and music style of Moorish origin from Granada, featuring a steady 4/4 rhythm and explicit Middle Eastern modal aesthetics.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Zorongo',
        id: 'zorongo',
        desc: 'An active, rhythmically syncopated style featuring a 3/4 or 6/8 meter, known for its fluid integration into classical and theatrical contexts.',
        hard: ['cante-flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Flamenco nuevo',
        id: 'flamenco-nuevo',
        desc: 'A modern evolution of Flamenco that emerged in the late 20th century, combining traditional structures with elements of  world music.',
        hard: ['flamenco'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Flamenco pop',
        id: 'flamenco-pop',
        desc: 'A commercial, catchy fusion of flamenco and mainstream pop song structures, emphasizing verse-chorus formats over deep vocal ornamentations.',
        hard: ['flamenco-nuevo'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Flamenco rock',
        id: 'flamenco-rock',
        desc: 'A powerful fusion of flamenco nuevo rhythms and modes with electric instrumentation and the aggressive vocal or performance energy of rock.',
        hard: ['flamenco-nuevo'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Gipsy Rumba',
        id: 'gipsy-rumba',
        desc: 'The highly rhythmic, acoustic-guitar-driven style popularized by Franco-Spanish Gitano artists, blending flamenco with pop and Latin influences.',
        hard: ['flamenco-nuevo'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Iberian Folk Music',
        id: 'iberian-folk-music',
        desc: 'The traditional music shared across the regions of the Iberian Peninsula (Spain, Portugal, and Andorra), reflecting rich regional languages and regional instruments.',
        hard: ['hispanic-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Andalusi Folk Music',
        id: 'andalusi-folk-music',
        desc: 'The traditional music of the Andalusian region of southern Spain, rooted in rural customs and separate from modern stylized flamenco.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Campiña folk music',
        id: 'campina-folk-music',
        desc: 'Traditional agricultural songs from the lowlands and farmlands of Andalusia.',
        hard: ['andalusi-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Charrada',
        id: 'charrada',
        desc: 'A traditional rhythm and dance from the Salamanca province, typically performed to a complex 5/8 time signature.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Extremaduran Folk Music',
        id: 'extremaduran-folk-music',
        desc: 'The traditional music of Extremadura, featuring specific regional song types like the perantón and rondas, accompanied by unique local percussion.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Iberian Fandango',
        id: 'iberian-fandango',
        desc: 'The ancient folk dance and music type common throughout Iberia, characterized by a lively triple meter, couple-dancing, and castanet or guitar accompaniment.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Jota',
        id: 'jota',
        desc: 'A widespread traditional genre of music and dance across Spain, characterized by a rapid triple meter, dynamic couple dancing, and the use of castanets.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Aragonese Jota',
        id: 'aragonese-jota',
        desc: 'The classical and highly influential variety of jota from Aragon, featuring virtuosic vocal lines and rich guitar/bandurria orchestration.',
        hard: ['jota'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Castilian Jota',
        id: 'castilian-jota',
        desc: 'The regional variation of Jota from Castile, generally characterized by a more solemn, steady tempo and traditional percussion like dulzainas.',
        hard: ['jota'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Murcian Jota',
        id: 'murcian-jota',
        desc: 'The lively regional variation of Jota from Murcia, often featuring bright string arrangements and local poetic structures.',
        hard: ['jota'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Navarrese Jota',
        id: 'navarrese-jota',
        desc: 'The energetic and emotionally powerful Jota from Navarre, characterized by its demanding vocal requirements and distinctive style.',
        hard: ['jota'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Valencian Jota',
        id: 'valencian-jota',
        desc: 'The regional variation of Jota from the Valencian Country, integrating local poetic structures and instruments.',
        hard: ['jota'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Muñeira',
        id: 'muneira',
        desc: 'A traditional dance and music style from Galicia and Asturias, defined by its bright 6/8 time signature and gaita (bagpipe) accompaniment.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Pasodoble',
        id: 'pasodoble',
        desc: 'Mainly instrumental Spanish style primarily associated with bullfighting and popular celebrations, believed to originate from a double-time military march from France in the 18th century.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Valencian Folk Music',
        id: 'valencian-folk-music',
        desc: 'Traditional music of the Valencian Country.',
        hard: ['iberian-folk-music'],
        soft: [],
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tecnorumba',
        id: 'tecnorumba',
        desc: 'Blend of the themes and singing style of Rumba flamenca with the most commercial forms of House, Techno, and Makina.',
        hard: ['flamenco-nuevo'],
        soft: ['house', 'techno', 'makina'],
    },
]


export const African = [
      {
        parent:  Type.Super,
        type: Type.Genre,
        label: 'African Music',
        id: 'african',
        desc: 'All forms with roots in african culture, including traditional and popular styles.',
        hard: ['world-music'],
        soft: []
    },
     {
        parent:  Type.Genre,
        type: Type.Sub,
        label: 'Cape Verdean Music',
        id: 'cape-verdean',
        desc: 'All forms with roots in african culture, including traditional and popular styles.',
        hard: ['african'],
        soft: []
    },
    
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Coladeira',
        id: 'coladeira',
        desc: 'Originated as a more uptempo and lively form of Morna before bringing in outside influences.',
        hard: ['cape-verdean'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Funaná',
        id: 'funana',
        desc: 'Upbeat Cape Verdean style which developed on the island of Santiago, based around the diatonic accordion and rhythm provided by the ferrinho.',
        hard: ['cape-verdean'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Morna',
        id: 'morna',
        desc: 'Slow tempo, monotonality, and the use of the violão, the Cape Verdean classical guitar, as the main instrumental accompaniment.',
        hard: ['cape-verdean'],
        soft: []
    },
     {
        parent:  Type.Genre,
        type: Type.Sub,
        label: 'Central African Music',
        id: 'central-african',
        desc: 'Music of the areas speaking Adamawa-Eastern languages and many Bantu languages, through most of the Democratic Republic of the Congo, all of Gabon, Equatorial Guinea, the islands of São Tomé and Príncipe, Republic of the Congo, most of the Central African Republic, and large parts of Cameroon, Angola, and the northern parts of Zambia.',
        hard: ['african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Assiko',
        id: 'assiko',
        desc: 'Music and dance of the Bassa people of southern Cameroon, which features a singer accompanied by a guitarist and improvised percussion.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Banda Music',
        id: 'banda-music',
        desc: 'Music of the Banda people, a Central African ethnic group mostly residing in the Central African Republic and its neighboring countries.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Bend-skin',
        id: 'bend-skin',
        desc: 'Most closely linked to the Bamileke people of the Western Province of Cameroon; drums and improvised maracas are the sole instrumentation backing up a vocalist who alternates between rapping and singing.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Bikutsi',
        id: 'bikutsi',
        desc: 'Developed from the Traditional Folk Music of the Ewondo people in Cameroon, with a name translating as "let\'s beat the earth" that comes from the stomping dance style that often accompanies it.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Congolese Rumba',
        id: 'congolese-rumba',
        desc: 'Blend of Congolese musical elements with Cuban Music (specifically Son cubano and Rumba cubana) popular between the 1940s and early 1970s.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kalindula',
        id: 'kalindula',
        desc: 'Features multiple rumba-like lead guitars and quick steady basslines, while mixing together elements of other percussion-heavy Zambian styles.',
        hard: ['central-african'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kizomba',
        id: 'kizomba',
        desc: 'Combines elements of Angolan Semba and French Caribbean Zouk.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tarraxinha',
        id: 'tarraxinha',
        desc: 'Heavy-hitting beats and electronic bass, putting less emphasis on melodies and vocals.',
        hard: ['kizomba'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Makossa',
        id: 'makossa',
        desc: 'Similar to Soukous, but makes more use of a horn section and bass rhythm.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mangambeu',
        id: 'mangambeu',
        desc: 'Celebratory style featuring mbira-like instruments and polyrhythms, from western Cameroon.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mbenga-Mbuti Music',
        id: 'mbenga-mbuti',
        desc: 'Music of the Mbenga and Mbuti people, Pygmy ethnic groups in Central Africa.',
        hard: ['central-african', 'african-folk'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mbolé',
        id: 'mbole',
        desc: 'Festive, energetic and urban, influenced by Bikutsi, Bend-skin and Makossa; mainly based on hand-clapping and drumming accompanied by rhythmic singing.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Puxa',
        id: 'puxa',
        desc: 'Energetic dance style that combines solid bass lines with subtle melodies and harmonies of São Toméan music.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Semba',
        id: 'semba',
        desc: 'Style from Angola featuring danceable percussion, lyrics often taking the form of a story, and sometimes accompaniment from a guitar.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Soukous',
        id: 'soukous',
        desc: 'Danceable, guitar-based style from the Congo area.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kwassa kwassa',
        id: 'kwassa-kwassa',
        desc: 'Faster form of Soukous that was pioneered in the late 1980s and early 1990s, named after a popular dance.',
        hard: ['soukous'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tradi-moderne congolais',
        id: 'tradi-moderne-congolais',
        desc: 'Updates traditional Congolese music with electric instrumentation.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Twa Music',
        id: 'twa-music',
        desc: 'Music of the Great Lakes Twa people.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Zamrock',
        id: 'zamrock',
        desc: 'Developed in the Copperbelt region of Zambia in the 1970s, characterized by its blend of local sounds with influence from Funk, Hard Rock, and Blues Rock.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent:  Type.Genre,
        type: Type.Sub,
        label: 'East African Music',
        id: 'east-african',
        desc: 'Developed in the Copperbelt region of Zambia in the 1970s, characterized by its blend of local sounds with influence from Funk, Hard Rock, and Blues Rock.',
        hard: ['african'],
        soft: []
    },
     {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Acholi Music',
        id: 'acholi',
        desc: 'Music of the Acholi people, who inhabit a region known as “Acholiland,” spanning parts of northern Uganda and southern South Sudan.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Acholitronix',
        id: 'acholitronix',
        desc: 'Fusion of traditional Acholi rhythms and melodies with electronic production, originating in the city of Gulu.',
        hard: ['acholi'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Baganda Music',
        id: 'baganda',
        desc: 'Music of the Baganda people, a Bantu ethnic group indigenous to Uganda.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Buganda Royal Court Music',
        id: 'buganda-royal-court',
        desc: 'Highest traditional and refined musical forms of Buganda, reserved for the Kabaka (the king of Buganda).',
        hard: ['baganda'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kadongo kamu',
        id: 'kadongo-kamu',
        desc: 'Oldest form of mainstream music in Uganda, dating back to the early 1950s, translating to “one little guitar” from the Luganda language.',
        hard: ['baganda'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mataali',
        id: 'mataali',
        desc: 'Islamic praise genre of the Muslim community of Buganda, named after the frame drum on which the rhythm is played.',
        hard: ['baganda'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Benga',
        id: 'benga',
        desc: 'Kenyan popular music based around the Traditional Folk Music of the Luo people from the area.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Beni',
        id: 'beni',
        desc: 'Festive Zanzibari Marching Band music that emerged in the late 19th century.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Bongo Flava',
        id: 'bongo-flava',
        desc: 'Tanzanian genre originating in the mid-1990s in the Dar es Salaam area, combining the influence of Rhythm & Blues, Afrobeat, and Dancehall with native Tanzanian styles like Taarab and Muziki wa dansi.',
        hard: ['east-african', 'hiphop', 'rnb'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Comorian Music',
        id: 'comorian',
        desc: 'Music of the Comoros Islands and Mayotte off the eastern coast of Africa, combining influences from other East African and Malagasy music.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Dinka Music',
        id: 'dinka',
        desc: 'Music of the Dinka people, the most populous ethnic group of South Sudan.',
        hard: ['east-african', 'northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Genge',
        id: 'genge',
        desc: 'Combines elements of Dancehall with various traditions of Kenya.',
        hard: ['east-african', 'dancehall', 'hiphop'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Gengetone',
        id: 'gengetone',
        desc: 'Takes strong influence from Reggaetón and modern Dancehall, featuring more explicit lyrics and harder beats.',
        hard: ['genge', 'reggaeton', 'dancehall'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Gogo Music',
        id: 'gogo',
        desc: 'Music of the Gogo People (Wagogo), who inhabit Central Tanzania.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Inkiranya',
        id: 'inkiranya',
        desc: 'Influential drumming style originating in Burundi carried out by a percussion ensemble.',
        hard: ['east-african', 'classical'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kapuka',
        id: 'kapuka',
        desc: 'Includes elements from Hip Hop and Reggae, as well as Kenyan traditions.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kidandali',
        id: 'kidandali',
        desc: 'Popular form of Ugandan music, originally derived from Kadongo kamu and Soukous.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kidumbak',
        id: 'kidumbak',
        desc: 'Centered on two small kidumbak drums, fiddle, and singer; closely related to Taarab.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Marrabenta',
        id: 'marrabenta',
        desc: 'Fast, guitar driven, urban dance music from Mozambique that originated in Maputo in the 1950s, taking cues from Mozambican folk and a variety of foreign sounds.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mchiriku',
        id: 'mchiriku',
        desc: 'Pairs amplified keyboards with hectic, intricate percussion and vocals drawn from earlier Tanzanian styles.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mugithi',
        id: 'mugithi',
        desc: 'Kenyan popular music centered around catchy choruses with hi-pitched electric guitar and Gikuyu lyrics on love and heartbreak, often featuring Country elements.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Muziki wa dansi',
        id: 'muziki-wa-dansi',
        desc: 'Popular in Tanzania with strong connections to Soukous and often associated with Jazz, whose name means "dance music" in Swahili.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ngoma',
        id: 'ngoma',
        desc: 'Played in Swahili-speaking African countries; primarily focused on rhythm.',
        hard: ['east-african','african-folk'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Unyago',
        id: 'unyago',
        desc: 'Traditional music from Zanzibar, traditionally played at women\'s initiation rituals and weddings.',
        hard: ['ngoma'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Omutibo',
        id: 'omutibo',
        desc: 'Mid-20th century Kenyan popular music which centres around a fingerpicked acoustic guitar.',
        hard: ['east-african'],
        soft: []
    },
 
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Soga Music',
        id: 'soga',
        desc: 'Music of the Soga people, a Bantu ethnic group residing in Eastern Uganda.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Taarab',
        id: 'taarab',
        desc: 'Prominent violin, qanun (an Egyptian zither-like instrument), and sung Swahili poetry, often accompanied by African drums and other percussion.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Timbila',
        id: 'timbila',
        desc: 'Tradition of the Chopi people of the Inhambane province of Mozambique, named for the mbila, the wooden xylophone-like instrument on which it is played.',
        hard: ['east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Twa Music',
        id: 'twa',
        desc: 'Music of the Great Lakes Twa people.',
        hard: ['central-african'],
        soft: []
    },
    {
        parent: Type.Genre,
        type: Type.Sub,
        label: 'Malagasy music',
        id: 'malagasy',
        desc: 'Music of the Malagasy peoples.',
        hard: ['african'],
        soft: []
    },
  
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Salegy',
        id: 'salegy',
        desc: 'Features rich, harmonized vocals and chiming guitar lines.',
        hard: ['malagasy'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tsapiky',
        id: 'tsapiky',
        desc: 'Very fast and jerky rhythms, guitar duets, and polyharmonic chants.',
        hard: ['malagasy'],
        soft: []
    },
     {
        parent: Type.Genre,
        type: Type.Sub,
        label: 'North African music',
        id: 'north-african',
        desc: 'Music of the North africans.',
        hard: ['african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Amazigh Music',
        id: 'amazigh',
        desc: 'Music of the Amazigh people, the indigenous people of Northwest Africa (with main hubs in Morocco and Algeria) and certain parts of West Africa.',
        hard: ['north-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ahwash',
        id: 'ahwash',
        desc: 'Associated with the Tashelhit-speaking peoples of southern and central Morocco, and performed in large groups, combining singing, poetry and drumming.',
        hard: ['amazigh'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Izlan',
        id: 'izlan',
        desc: 'Uses sung poetry with a focus on love themes.',
        hard: ['amazigh'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kabyle Music',
        id: 'kabyle',
        desc: 'Music of the Kabyle Amazigh people.',
        hard: ['amazigh'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Sahrawi Music',
        id: 'sahrawi',
        desc: 'Music of the Sahrawi people, an ethnic group who inhabit the westernmost areas of the Sahara Desert.',
        hard: ['amazigh'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Staïfi',
        id: 'staifi',
        desc: 'Festive Chaoui genre that mixes local rural music with the zendali rhythm and modern instruments.',
        hard: ['amazigh'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tuareg Music',
        id: 'tuareg',
        desc: 'Music of the nomadic Tuareg people who live through the Saharan desert in North Africa, encompassing various types of traditions and popular styles.',
        hard: ['amazigh'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Takamba',
        id: 'takamba',
        desc: 'Traditionally performed with a singer only accompanied by a guitar named tehardent, handclaps as percussion, and dancers; now usually performed by a band consisting of two tehardents, bass and solo, calabashes, a singer and dancers.',
        hard: ['tuareg'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tishoumaren',
        id: 'tishoumaren',
        desc: 'Electric guitar-led North African music emerging from traditional Tuareg Music in the 1980s.',
        hard: ['tuareg'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Egyptian Music',
        id: 'egyptian',
        desc: 'Music of the people of Egypt.',
        hard: ['north-african'],
        soft: []
    },
  
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ancient Egyptian Music',
        id: 'ancient-egyptian',
        desc: 'Music of ancient Egyptian civilization.',
        hard: ['egyptian'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Coptic Music',
        id: 'coptic',
        desc: 'Church music specifically made for worship in the Coptic (Egyptian) Orthodox Church.',
        hard: ['egyptian'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Shaabi',
        id: 'shaabi',
        desc: 'Developed in Egypt during the early 1970s, typically created by and for the urban working class with witty lyrics that reflect this.',
        hard: ['egyptian'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mahraganat',
        id: 'mahraganat',
        desc: 'Draws elements from Hip Hop, featuring auto-tuned vocals, rapping, Electronic production, and explicit lyrics.',
        hard: ['shaabi'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Trap shaabi',
        id: 'trap-shaabi',
        desc: 'Combining Trap percussion and rhythms with Egyptian Shaabi and especially Mahraganat.',
        hard: ['shaabi'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Maghrebi Music',
        id: 'maghrebi',
        desc: 'Western region of the Arab world, encompassing the modern countries of Algeria, Libya, Morocco, Tunisia, and the disputed territory of Western Sahara.',
        hard: ['north-african'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Algerian Chaabi',
        id: 'algerian-chaabi',
        desc: 'Features mournful vocals over an orchestral setting of violins, mandolins, pianos, and percussion.',
        hard: ['maghrebi'],
        soft: []
    },
    
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Banga',
        id: 'banga',
        desc: 'Sufi ritual trance music of southern Tunisia performed by Black communities.',
        hard: ['maghrebi'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Jilala Music',
        id: 'jilala',
        desc: 'Music of the Jilala Sufi order, most notably used in healing trance rituals.',
        hard: ['maghrebi'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Malhun',
        id: 'malhun',
        desc: 'Moroccan sung poetry with instrumental accompaniment.',
        hard: ['maghrebi'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Moroccan Chaabi',
        id: 'moroccan-chaabi',
        desc: 'Upbeat style of Moroccan popular music played in streets, cafés, weddings, and festivals.',
        hard: ['maghrebi'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Raï',
        id: 'rai',
        desc: 'Originated in Algeria in the 1920s as a form of Bedouin Music, blending influences from various rural and urban genres.',
        hard: ['maghrebi'],
        soft: []
    },
 
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Traditional Raï',
        id: 'traditional-rai',
        desc: 'Original folk of the popular Algerian Raï, combining various rural and cabaret styles with Bedouin rhythms.',
        hard: ['rai'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Moorish Music',
        id: 'moorish',
        desc: 'Music of the Moors, the largest ethnic group in Mauritania.',
        hard: ['north-african'],
        soft: []
    },
     {
        parent: Type.Genre,
        type: Type.Sub,
        label: 'North East African music',
        id: 'northeast-african',
        desc: 'Music of the NorthEast african.',
        hard: ['african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Afar Music',
        id: 'afar',
        desc: 'Music of the Afar people, who inhabit an area spanning parts of Ethiopia, Eritrea and Djibouti.',
        hard: ['northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Beja Music',
        id: 'beja',
        desc: 'Music of the Beja people of Africa’s Eastern Desert region.',
        hard: ['northeast-african'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ethiopic Music',
        id: 'ethiopic',
        desc: 'Music made by people who speak Ethiopian Semitic languages.',
        hard: ['northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Azmari',
        id: 'azmari',
        desc: 'Ethiopian/Eritrean singer/songwriters or minstrels equivalent to the Western European bard, the West African griot or the Romanian wandering taraf.',
        hard: ['ethiopic'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ethiopian Church Music',
        id: 'ethiopian-church',
        desc: 'Sacred tradition of the Ethiopian Orthodox Tewahedo Church, sung in an ancient Semitic language called Ge\'ez and credited with assembling the current Ethiopian notation system.',
        hard: ['ethiopic'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Gurage Music',
        id: 'gurage',
        desc: 'Music of the Gurage people of Central Ethiopia.',
        hard: ['ethiopic'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Manzuma',
        id: 'manzuma',
        desc: 'Melodic, devotional music performed by Sufi Islami communities in Ethiopia and neighboring countries.',
        hard: ['ethiopic'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tigrinya Music',
        id: 'tigrinya',
        desc: 'Music of the Tigrinya, an ethnic group mainly found in Eritrea and Northern Ethiopia, the Tigray region more specifically.',
        hard: ['ethiopic'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tizita',
        id: 'tizita',
        desc: 'Melancholy song popular in Ethiopia and Eritrea, using the qegnet mode and tuning system.',
        hard: ['ethiopic'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Nubian Music',
        id: 'nubian',
        desc: 'Music of Nubia, a region centered along the Nile River in northern Sudan and southern Egypt.',
        hard: ['northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Nuer Music',
        id: 'nuer',
        desc: 'Music of the Nuer people of Eastern South Sudan and Western Ethiopia.',
        hard: ['northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Oromo Music',
        id: 'oromo',
        desc: 'Music of the Oromo people, a Cushitic ethnolinguistic group, who primarily live in the Oromia region of Ethiopia and Northern Kenya.',
        hard: ['northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Shilluk Music',
        id: 'shilluk',
        desc: 'All musical forms of the Shilluk people of the Upper Nile region of South Sudan.',
        hard: ['northeast-african', 'east-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Somali Music',
        id: 'somali',
        desc: 'Music developed by the Somali people.',
        hard: ['northeast-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Belwo',
        id: 'belwo',
        desc: 'Somali poems with themes of love and romance and brief, syncopated tunes.',
        hard: ['somali'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Dhaanto',
        id: 'dhaanto',
        desc: 'Song and dance that originally featured no instruments, but later transformed into a style featuring prominent rhythms and slow grooves.',
        hard: ['somali'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Qaraami',
        id: 'qaraami',
        desc: 'Dates back to the 1940s and carries regional features such as the use of a pentatonic scale and having the oud as the primary instrument.',
        hard: ['somali'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Welayta Music',
        id: 'welayta',
        desc: 'Music of the Welayta people.',
        hard: ['northeast-african'],
        soft: []
    },
     {
        parent: Type.Genre,
        type: Type.Sub,
        label: 'Seychelles and Mascarene Islands Music',
        id: 'seychelles-and-mascarene-islands',
        desc: 'Styles from La Réunion, Mauritius, Rodrigues, and Seychelles.',
        hard: ['african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Maloya',
        id: 'maloya',
        desc: 'Originated in slave communities on La Réunion; based on a call and response structure and use of traditional instruments.',
        hard: ['seychelles-and-mascarene-islands'],
        soft: []
    },
    
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Maloya élektrik',
        id: 'maloya-elektrik',
        desc: 'Prominent in La Réunion island from the 1970s until the 1990s; drew influences from Funk, Psychedelia, and Afrobeat.',
        hard: ['maloya'],
        soft: ['funk', 'psychedelia', 'afrobeat']
    },

    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Santé engagé',
        id: 'sante-engage',
        desc: 'Emerged in Mauritius in the 1970s, blending the popular Séga style with outside influences.',
        hard: ['seychelles-and-mascarene-islands'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Séga',
        id: 'sega',
        desc: 'Mascarene Islands and Seychelles genre featuring a distinctive 6/8 rhythm.',
        hard: ['seychelles-and-mascarene-islands'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Traditional Séga',
        id: 'traditional-sega',
        desc: 'Séga dance music born in the 18th century, before its later adoption of Western pop elements.',
        hard: ['sega', 'african-folk'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Séga tambour',
        id: 'sega-tambour',
        desc: 'Energetic, percussive style based around a large, heated drum known as a tambour, traditionally popular on Rodrigues and the Chagos Archipelago.',
        hard: ['traditional-sega'],
        soft: []
    },
       {
        parent: Type.Genre,
        type: Type.Sub,
        label: 'Southern African music',
        id: 'southern-african',
        desc: 'Styles from Southern Africa',
        hard: ['african'],
        soft: []
    },

    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Famo',
        id: 'famo',
        desc: 'Popular and danceable style from Lesotho and the surrounding Sotho-speaking region of South Africa, often featuring the accordion as the lead instrument.',
        hard: ['southern-african'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Isicathamiya',
        id: 'isicathamiya',
        desc: 'A cappella Zulu style, which takes a softer, more melodious approach, in contrast to the powerful, loud sound of the earlier Mbube style.',
        hard: ['southern-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Jit',
        id: 'jit',
        desc: 'Guitar-driven electric pop from Zimbabwe that draws influence from Central and East African rumba, South African jive and local music.',
        hard: ['southern-african'],
        soft: []
    },

    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Bacardi',
        id: 'bacardi',
        desc: 'Bacardi is a type of House music from South Africa derived from Kwaito, delivering upbeat, danceable rhythms with lively snares and hi-hats.',
        hard: ['kwaito'],
        soft: []
    },
 
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Maskandi',
        id: 'maskandi',
        desc: 'Zulu style of music usually led by a fingerpicked acoustic guitar.',
        hard: ['southern-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mbube',
        id: 'mbube',
        desc: 'A cappella Zulu genre, performed in a powerful and loud manner by an all-male choir.',
        hard: ['southern-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Motswako',
        id: 'motswako',
        desc: 'Mainly rapped in a mixture of Setswana and English, incorporating additional languages and local South African and Botswanan influences, particularly Kwaito.',
        hard: ['southern-african', 'kwaito'],
        soft: []
    },
 
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Shona Music',
        id: 'shona',
        desc: 'Music of the Shona people, a Bantu ethnic group who form a majority population in Zimbabwe.',
        hard: ['southern-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Chimurenga',
        id: 'chimurenga',
        desc: 'Popular style from Zimbabwe based on the traditional mbira thumb piano, but with electric instrumentation as well.',
        hard: ['shona'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Shona Mbira Music',
        id: 'shona-mbira',
        desc: 'Traditional music based on cyclical patterns played on the mbira, from which long instrumental parts are improvised.',
        hard: ['shona'],
        soft: []
    },
 
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Sungura',
        id: 'sungura',
        desc: 'Zimbabwean style combining the guitar work of Soukous with the speed and texture of Benga and the strong bass of Township Jive.',
        hard: ['southern-african'],
        soft: []
    },

    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Township Jive',
        id: 'township-jive',
        desc: 'Originating in the townships of South Africa, similar to Mbaqanga but bringing in Western pop elements.',
        hard: ['southern-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tsonga Disco',
        id: 'tsonga-disco',
        desc: 'Drum machines, synthesizers, and male vocals backed by a female choir, singing in a call and response style.',
        hard: ['southern-african'],
        soft: []
    },
    {
        parent: Type.Genre,
        type: Type.Sub,
        label: 'West African music',
        id: 'west-african',
        desc: 'Styles from West Africa',
        hard: ['african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Afrobeat',
        id: 'afrobeat',
        desc: 'Merges West African styles such as traditional Yoruba Music and Highlife with elements of Funk and Jazz, typically resulting in extended improvisatory jams with call-and-response vocals.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Afro-Funk',
        id: 'afro-funk',
        desc: 'Strongly mixed with traditional and more modern genres in sub-Saharan West Africa.',
        hard: ['west-african', 'funk'],
        soft: []
    },
 
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Akan Music',
        id: 'akan',
        desc: 'Music of the Akan people of Ghana and Côte d\'Ivoire, including a variety of traditional and neo-traditional styles which are based on some of the oldest traditions in West Africa.',
        hard: ['west-african'],
        soft: []
    },
  
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Zoblazo',
        id: 'zoblazo',
        desc: 'Ivorian dance music combining traditional instruments and synthesizers that emerged in the late 1980s.',
        hard: ['akan'],
        soft: []
    },
  
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ewe Music',
        id: 'ewe',
        desc: 'Music of the Ewe people, found in southern Togo, southeastern Ghana and southwestern Benin.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Agbadza',
        id: 'agbadza',
        desc: 'National dance-drumming tradition of the Ewe people in Ghana.',
        hard: ['ewe'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Agbekor',
        id: 'agbekor',
        desc: 'War dance of the Ewe people utilizing various percussive instruments and polyrhythms.',
        hard: ['ewe'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Fon Music',
        id: 'fon',
        desc: 'The traditions of the Fon people, originating in central and southeastern Benin as well as the southwestern region of Nigeria.',
        hard: ['west-african'],
        soft: []
    },
    
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tchink System',
        id: 'tchink-system',
        desc: 'Urban version of Tchinkoumé featuring traditional tchinkoumé rhythms, derived from zinli, and including contemporary instrumentation from the influence of R&B, Pop and Rock.',
        hard: ['fon'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Fula Music',
        id: 'fula',
        desc: 'Music of the Fula, Fulani, or Fulɓe people, one of the largest ethnic groups in the Sahel region, present from the far West African countries of Senegal and Mauritania to Central African Cameroon with the biggest population located in Nigeria.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Griot Music',
        id: 'griot',
        desc: 'Type of hereditary professional caste in West African Music culture that preserves tradition.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Gumbe',
        id: 'gumbe',
        desc: 'Vocal and percussive tradition from Guinea-Bissau developed in the 1970s as a fusion of various traditional genres in the country; sometimes used as a catch-all term for the music of Guinea-Bissau in general.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Hausa Music',
        id: 'hausa-music',
        desc: 'Hausa are one of the largest ethnic groups in Africa, living mainly in northern Nigeria and southern Niger in west Africa.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Highlife',
        id: 'highlife',
        desc: 'Originally began along the Ghanaian coast in the 1920s as a blend of western brass band instrumentation and rhythms with traditional Akan Music and Dagomba Music.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Burger-Highlife',
        id: 'burger-highlife',
        desc: 'Created by Ghanaian immigrants to Germany in the late 1970s, generally employing synthesizers and Western post-production techniques alongside guitar-driven Highlife instrumentation.',
        hard: ['highlife'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Hipco',
        id: 'hipco',
        desc: 'Developed in Liberia, often featuring conscious and political lyrics and influences from local dance styles.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Hiplife',
        id: 'hiplife',
        desc: 'Fusion of Ghanaian Highlife with Hip Hop.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Igbo Music',
        id: 'igbo-music',
        desc: 'Music of the Igbo people, who live mainly in a region of southeastern Nigeria often known as "Igboland".',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ogene Music',
        id: 'ogene-music',
        desc: 'Traditional acoustic music performed by Igbo groups in southeastern Nigeria centered on call-and-response vocals alongside instrumentation from iron bells, wooden whistles, and jug drums.',
        hard: ['igbo-music'],
        soft: []
    },
   
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Kru Music',
        id: 'kru-music',
        desc: 'Music of the Kru peoples indigenous to Liberia and Ivory Coast.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Alloukou',
        id: 'alloukou',
        desc: 'Created by the Bété people of Côte d\'Ivoire, featuring a distinctive rhythm that uses polyrhythms and triplets.',
        hard: ['kru-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Palm Wine Music',
        id: 'palm-wine-music',
        desc: 'Fusion of the African Folk Music of the region with imported Caribbean Calypso.',
        hard: ['kru-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Ziglibithy',
        id: 'ziglibithy',
        desc: 'Ivorian mid-1970s dance music created after the country\'s independence, influenced by post-colonial trends in African Music.',
        hard: ['kru-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mande Music',
        id: 'mande-music',
        desc: 'Encompasses the diverse forms of the Mande peoples, a group of West African ethnic groups who speak any of the Mande languages.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mossi Music',
        id: 'mossi-music',
        desc: 'Music of the Mossi people of Burkina Faso.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Songhai Music',
        id: 'songhai-music',
        desc: 'Music of the Songhai people of Mali, who descend from the ancient Songhai Empire which once ruled most of interior West Africa.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tradi-moderne ivoirien',
        id: 'tradi-moderne-ivoirien',
        desc: 'Blends traditional Ivorian songs, rhythms and instruments with modern electric and electronic instruments.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Wassoulou',
        id: 'wassoulou',
        desc: 'Traditionally sung by women and containing lyrics relating to women\'s issues such as childbearing and fertility.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Wolof Music',
        id: 'wolof-music',
        desc: 'Music of the Wolof people of Senegal and The Gambia comprising a wide variety of West African Music traditions influenced by nearby cultures.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Mbalax',
        id: 'mbalax',
        desc: 'Rooted in njuup, a Serer ritual tradition incorporating influences from Cuban, Congolese, and American popular music.',
        hard: ['wolof-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Tassu',
        id: 'tassu',
        desc: 'Rhythmic poetry that has been a part of Senegalese culture since ancient times.',
        hard: ['wolof-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Yoruba Music',
        id: 'yoruba-music',
        desc: 'Music of the Yoruba people of southwestern Nigeria and Benin, comprising a variety of ancient and modern traditions crucial to West African Music.',
        hard: ['west-african'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Apala',
        id: 'apala',
        desc: 'Yoruba Music developed by Muslims during the late 1930s and early 1940s in the Ijebu region of Yorubaland, the current Ogun state.',
        hard: ['yoruba-music', 'african-folk'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Fuji',
        id: 'fuji',
        desc: 'Combines the ajisaari/wéré tradition of improvisational music performed during Ramadan with other Islamic styles like Apala and sakara.',
        hard: ['yoruba-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Jùjú',
        id: 'juju',
        desc: 'Yoruba Music that emerged during the 1920s in urban settings across Nigeria, especially in Lagos.',
        hard: ['yoruba-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Santería Music',
        id: 'santeria-music',
        desc: 'Afro-Cuban genre played in religious rituals, combining traditions from both the Cuban and the Yorùbá people.',
        hard: ['yoruba-music', 'cuban-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Waka',
        id: 'waka',
        desc: 'Islamic Yoruba Music originally rooted in Hausa traditions and adopted by the Yoruba in the early 19th century.',
        hard: ['yoruba-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Yoruba Folk Opera',
        id: 'yoruba-folk-opera',
        desc: 'Musical play involving traditional and popular music.',
        hard: ['yoruba-music'],
        soft: []
    },
    {
        parent: Type.Sub,
        type: Type.Sub,
        label: 'Zouglou',
        id: 'zouglou',
        desc: 'Ivorian dance music that began in the early 1990s, with socially conscious lyrics and driving rhythms.',
        hard: ['west-african'],
        soft: []
    }
]

export const WorldMusic = [
    {
        type: Type.Super,
        label: 'World Music',
        id: 'world-music',
        desc: 'Super set of local music worldwide from cultural roots and folklore.',
        hard: [],
        soft: []
    },
    ...African,
  ...Caribbean,
  
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Pagan Music',
        desc: 'Scene that recollects all ritual, cultist and pagan folklore music',
        id: 'pagan-music',
        hard: ['haitian-vodoo-drumming', 'nyahbinghi', 'yoruba-music', 'sufi-music', 'shamanic-music', 'kai'],
        soft: []
    },
   
]

export const NorthernAmericanMusic = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Northern American Music',
        id: 'northern-american-music',
        desc: 'Regional styles with roots in Northern America (America north of Mexico, including Canada, United States, Greenland, Saint-Pierre and Miquelon, and Bermuda), typically drawing from European Folk Music and Classical Music as well as West African Music and Indigenous American Music influences.',
        hard: ['world-music'],
        soft: []
    }
]

export const OceanianMusic = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Oceanian Music',
        id: 'oceanian-music',
        desc: 'Rooted in the traditions of the geographic region of Oceania.',
        hard: ['world-music'],
        soft: []
    }
]

export const PolyphonicChant = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Polyphonic Chant',
        id: 'polyphonic-chant',
        desc: 'Chanting that combines two or more melodic lines that are harmonically cohesive but differ in rhythm and utilize non-parallel motion.',
        hard: ['world-music'],
        soft: []
    }
]

export const PrehistoricMusic = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Prehistoric Music',
        id: 'prehistoric-music',
        desc: 'Styles from the first cultural periods of the human species (Homo sapiens, as well as certain Homo neanderthalensis). From its birth in the Paleolithic and Neolithic eras to the Ancient Music era beginning around 2000–3000 BC.',
        hard: ['world-music'],
        soft: []
    }
]



export const SufiMusic = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Sufi Music',
        id: 'sufi-music',
        desc: 'Covering the various musical traditions of Sufis.',
        hard: ['world-music'],
        soft: []
    }
]

export const UpdatedWorldMusic = [
    ...WorldMusic,
    ...NorthernAmericanMusic,
    ...OceanianMusic,
    ...PolyphonicChant,
    ...PrehistoricMusic,
    ...Caribbean,
    ...Hispanic,
    ...SufiMusic,
]
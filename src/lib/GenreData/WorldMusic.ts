
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
        parent: Type.Sub,
        label: 'Dub poetry',
        id: 'dub-poetry',
        hard: ['roots-reggae', 'dub'],
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
        label: 'Bachata',
        id: 'bachata',
        desc: 'Dominican dance genre.',
        hard: ['caribbean','dance'],
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
        type: Type.Genre,
        parent: Type.Super,
        desc: 'Suriname root music, indigenous on nature, based on indo-caribbean styles',
        label: 'Kawina',
        id: 'kawina',
        hard: ['world-music','caribbean'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Genre,
        desc: 'Derived from coast, caribbean and african roots and folk music',
        label: 'Kaseko',
        id: 'kaseko',
        hard: ['kawina','caribbean', 'calypso'],
        soft: ['jazz']
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
        hard: ['west-african'],
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
        hard: ['yoruba-music'],
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

export const SouthAmericanMusic = [
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'South American Music',
        id: 'south-american-music',
        desc: 'Rooted in the traditions of South America.',
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
    ...SouthAmericanMusic,
    ...SufiMusic,
]
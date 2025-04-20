
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
        soft: []
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
        type: Type.Fusion,
        parent: Type.Genre,
        label: 'Reggae-fusion',
        id: 'reggae-fusion',
        hard: ['reggae'],
        soft: []
    },
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
        label: 'Bomba',
        id: 'bomba',
        desc: 'Percussive style from Puerto Rico, generally considered to be derived from West Africa.',
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
        label: 'Jibaro',
        id: 'jibaro',
        desc: 'Traditions of the mountain-dwelling jibaro people that live primarily in Puerto Rico.',
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
        label: 'Plena',
        id: 'plena',
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
    {
        type: Type.Scene,
        parent: Type.Sub,
        label: 'Pagan Music',
        desc: 'Scene that recollects all ritual, cultist and pagan folklore music',
        id: 'pagan-music',
        hard: ['haitian-vodoo-drumming', 'nyahbinghi'],
        soft: []
    },

 
]
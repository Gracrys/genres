
export enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4,
    'Fusion' = 5
}

export const Pop = [
    {
        type: Type.Super,
        label: 'Pop',
        id: 'pop',
        hard: [],
        soft: [],
        desc: 'Umbrella of popular styles closely tied to mass production and mass marketing, focusing on catchiness and accessibility through melody, rhythm, lyrics, and hooks.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Adult contemporary',
        id: 'adult-contemporary',
        hard: ['pop'],
        soft: [],
        desc: 'Slow to midtempo with a light and soothing tone, emerged as a successful radio format in the late 1970s and early 1980s.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Afrobeats',
        id: 'afrobeats',
        hard: ['pop', 'dancehall', 'pop-rap', 'contemporary-rnb'],
        soft: [],
        desc: 'Originated in West Africa during the early 2010s and includes elements from Pop Rap, Contemporary R&B, and Dancehall.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Afropiano',
        id: 'afropiano',
        hard: ['afrobeats', 'afropiano'],
        soft: [],
        desc: 'Blends the easy-going, poppy, and melodic Afrobeats sound and rhythms with major Amapiano elements, like lush, jazzy, and laid-back atmospheres often featuring light piano chords.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Alté',
        id: 'alte',
        hard: ['afrobeats'],
        soft: [],
        desc: 'More subdued, atmospheric, minimalist, and eclectic production and vocal styles compared to earlier styles, as well as more socially conscious lyrics.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Alt-Pop',
        id: 'alt-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Emerged in the late 2000s and early 2010s, combines chart Pop conventions with alternative/indie genre sensibilities sometimes on a more minimal and contemplative atmosphere, often extracted from Alternative R&B.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Arabic-Pop',
        id: 'arabic-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Synthesis of Arabic Music with Western Pop melodies, almost always sung in Arabic and typically performed with Arabic instruments, alongside some Western instruments like the guitar.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Al jeel',
        id: 'al-jeel',
        hard: ['arabic-pop'],
        soft: [],
        desc: 'Emerged in the 1970s as an alternative to Shaabi, taking influence from foreign Pop and incorporating rhythms of Reggae while retaining a distinctly Egyptian sound.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Art-Pop',
        id: 'art-pop',
        hard: ['pop'],
        soft: ['avant-garde'],
        desc: 'Inventive, idiosyncratic, or artistically ambitious, often experimenting with unconventional musical elements and conceptual approaches while retaining accessibility.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Balkan-pop-folk',
        id: 'balkan-pop-folk',
        hard: ['pop'],
        soft: ['folk'],
        desc: 'Balkan popular music which blends Pop, Folk, and ethnic music.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Chalga',
        id: 'chalga',
        hard: ['balkan-pop-folk'],
        soft: ['folk'],
        desc: 'Bulgarian blend of Contemporary Folk (Turkish, Bulgarian, Arabic &amp; Romani) with Dance-Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Manele',
        id: 'manele',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Mixture of Romanian Music with Turkish, Middle Eastern, Balkan, and Romani influences, usually electronic in production.'
    },   {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Modern Laika',
        id: 'modern-laika',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Laiki music mixed with popular Western music, most notably pop and dance.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Musika popullore',
        id: 'musika-popullore',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Tradition in Albania consisting of light, commercial, amplified Albanian Folk Music usually professionally arranged and manufactured in recording studios alongside video clips.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'muzica-de-mahala',
        id: 'Muzică de mahala',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Appeared in the 1980s, incorporating modern instruments and based on the model of Balkan Pop-Folk in neighboring countries.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Skiladika',
        id: 'skiladika',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Greek popular artists who used more Arabian elements; originally a derogatory term used to refer to a more decadent side of Laika..'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tallava',
        id: 'tallava',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Mixture of Romani, Greek, Turkish, Albanian, and Slavic music, which incorporates Dance-Pop elements, and is very popular in Albania and Kosovo.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Turbo Folk',
        id: 'turbo-folk',
        hard: ['balkan-pop-folk'],
        soft: [],
        desc: 'Originated in Serbia during the 1980s, fusing traditional Western Balkan Folk Music with elements of contemporary popular music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Baroque-Pop',
        id: 'baroque-pop',
        hard: ['pop'],
        soft: ['western-classical'],
        desc: 'Incorporates elements of Western Classical Music, commonly featuring harpsichord or strings as well as the rhythmic flow and counterpoint of Baroque Music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Blue-Eyed Soul',
        id: 'blue-eyed-soul',
        hard: ['pop'],
        soft: ['western-classical'],
        desc: 'Usually refers to a Pop or Pop Rock song that contains strong Gospel-like elements, primarily popularized by white American and British singers in the 1960s through the 1980s.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Boy Band',
        id: 'boy-band',
        hard: ['pop'],
        soft: [],
        desc: 'Male vocal groups often put together by talent managers or record producers.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Brega calypso',
        id: 'brega-calypso',
        hard: ['pop'],
        soft: [],
        desc: 'Romantic vocals and lyrics, bubbly and sensual melodies and rhythms, horn sections and lush Caribbean-like guitar riffs over fast tempos.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Brill Building',
        id: 'brill-building',
        hard: ['pop'],
        soft: [],
        desc: 'Elaborate, polished, and typically melodramatic composition and arrangement associated with the songwriting teams at the Brill office building during the late 1950s and early 1960s.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Bubblegum',
        id: 'bubblegum',
        hard: ['pop'],
        soft: [],
        artists: 'The Archies',
        dates: '1970s',
        desc: 'Upbeat, catchy, simple, and targeted at children and young teens; especially popular in the 1960s and 1970s.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Cambodian Pop',
        id: 'cambodian-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Popular music produced in Cambodia or by Khmer people.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Rom kbach',
        id: 'rom-kbach',
        hard: ['cambodian-pop'],
        soft: [],
        desc: 'Cambodian pop with a slow melody that is similar to Luk thung.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Canción melódica',
        id: 'cancion-melodica',
        hard: ['pop'],
        soft: [],
        desc: 'Sentimental vocal music sung in Spanish with a focus on the chorus, originally developed in the first half of the 20th century from a variety of traditional Hispanic genres.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bolero-Beat',
        id: 'bolero-beat',
        hard: ['cancion-melodica', 'british-beat'],
        soft: [],
        desc: 'Latin American style stemming from both Canción melódica and the British Beat.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Música cebolla',
        id: 'musica-cebolla',
        hard: ['cancion-melodica'],
        soft: [],
        desc: 'Chilean offshoot of Canción melódica that expresses a much more melancholic or nostalgic side.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'City Pop',
        id: 'city-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Wave of Japanese Pop intended to reflect urban life during the period of the country\'s booming economy in the 1970s and 1980s, featuring a contemporary Western sound and lush arrangements.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Neo-City Pop',
        id: 'neo-city-pop',
        hard: ['city-pop'],
        soft: [],
        desc: '2010s style blending emerging genres like Acid Jazz and Neo-Soul with the Western-inspired Japanese Pop styles of the 1970s and 1980s.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Classical Crossover',
        id: 'classical-crossover',
        hard: ['pop'],
        soft: [],
        desc: 'Takes specific Western Classical Music conventions and applies them into a straightfoward Pop context for mainstream appeal.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Country Pop',
        id: 'country-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Combination of Country with Pop to appeal to a larger audience.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Boyfriend Country',
        id: 'boyfriend-country',
        hard: ['country-pop'],
        soft: [],
        desc: 'Soft, sentimental, and acoustic-leaning style featuring romantic lyrics, slick Contemporary R&B stylings, and light percussion.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bro-Country',
        id: 'bro-country',
        hard: ['country-pop'],
        soft: [],
        desc: '21st century style with an often party-oriented sound and lyrical content, taking strong influence from Hard Rock, Hip Hop and Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Countrypolitan',
        id: 'countrypolitan',
        hard: ['country-pop'],
        soft: [],
        desc: 'Emphasizes Pop-oriented orchestration and songwriting while reducing the role of Country instrumentation and rhythms; often featuring lush string arrangements and group backing vocals.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Urban Cowboy',
        id: 'urban-cowboy',
        hard: ['country-pop'],
        soft: [],
        desc: 'Melds Country and 1970s L.A. soft Pop, sometimes leaning towards Disco.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Dance-Pop',
        id: 'dance-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Simple, catchy melodies and throbbing beats inspired initially by Disco and later various House styles.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bubblegum Dance',
        id: 'bubblegum-dance',
        hard: ['dance-pop', 'bubblegum'],
        soft: [],
        desc: 'Playful, childlike style with a Bubblegum-like atmosphere that often incorporates high-pitched, light-hearted, and usually female-fronted vocals.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Disco polo',
        id: 'disco-polo',
        hard: ['dance-pop'],
        soft: [],
        desc: 'Polish Dance-Pop, originally established from contemporary wedding / feast songs and Italo-Disco.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Freestyle',
        id: 'freestyle',
        hard: ['dance-pop', 'edm'],
        soft: [],
        desc: 'Electro-influenced; developed in Latino communities in New York and Miami in the 1980s, especially dominated by Latin Freestyle and its Latin influences.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Latin Freestyle',
        id: 'latin-freestyle',
        hard: ['freestyle'],
            soft: ['disco', 'hiphop','electro'],

        desc: 'Displays a heavy influence of Hispanic American Music alongside the Disco, Hip Hop, and Electro influences of Freestyle.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Funk melody',
        id: 'funk-melody',
        hard: ['dance-pop'],
        soft: [],
        desc: 'Light and melodic take on Funk brasileiro, developed alongside Funk carioca.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Romanian Popcorn',
        id: 'romanian-popcorn',
        hard: ['dance-pop'],
        soft: [],
        desc: 'Emerged in the second half of the 2000s in Romania, often featuring brass melodies and "staccato" pluck grooves.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tecnorumba',
        id: 'tecnorumba',
        hard: ['dance-pop'],
        soft: [],
        desc: 'Blend of the themes and singing style of Rumba flamenca with the most commercial forms of House, Techno, and Makina.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Township Bubblegum',
        id: 'township-bubblegum',
        hard: ['dance-pop', 'bubblegum'],
        soft: [],
        desc: 'Synth-heavy Dance-Pop style popular in the South African townships in the 1980s and early 1990s.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Dangdut',
        id: 'dangdut',
        hard: ['pop'],
        soft: [],
        desc: 'Indonesian popular music distinguished by a rhythmic blend of Indian, Arabic, Western, Malay, Sundanese, and Javanese influences within Indonesian Music, characterized by a unique rhythmic pattern from kendang.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Dangdut koplo',
        id: 'dangdut-koplo',
        hard: ['dangdut'],
        soft: [],
        desc: 'Development of Dangdut which originated in East Java in the 1990s, featuring a faster tempo and influences from international styles like Pop, Rock, and Reggae.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Dansbandsmusik',
        id: 'dansbandsmusik',
        hard: ['pop'],
        soft: [],
        desc: 'Nordic Pop style originating from 1960s Pop Rock, incorporating Swing, Schlager, Nordic Old Time Dance Music and Country influences.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Dansktop',
        id: 'dansktop',
        hard: ['pop'],
        soft: [],
        desc: 'Danish equivalent to Dansbandsmusik with Schlager and Country influences and Contemporary Folk and Pop elements.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Electro Hop',
        id: 'electro-hop',
        hard: ['pop'],
        soft: [],
        desc: 'Emerged in the mid 2000s featuring upbeat rap verses and catchy hooks over four-on-the-floor Electropop and Electro House-inspired production.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Electropop',
        id: 'electropop',
        hard: ['pop'],
        soft: [],
        desc: 'Dense, layered, and compressed production, usually coupled with a distinct fuzzy and "warm" low-frequency synthesizer style.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Europop',
        id: 'europop',
        hard: ['pop'],
        soft: [],
        desc: 'Emerged throughout mainland Europe in the early 1970s, referring to slick, highly commercial Pop songs that emphasize sugary melodies and light, bouncy instrumentation.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Flamenco Pop',
        id: 'flamenco-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Incorporates Flamenco sub-styles into a more commercial Pop form; particularly through the vocal style and rhythms.'
    },
 
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'French Pop',
        id: 'french-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Pop originating from France.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Girl Group',
        id: 'girl-group',
        hard: ['pop'],
        soft: [],
        desc: 'Combines elements of Rhythm & Blues, Rock & Roll, and Traditional Pop; typically performed by trios or quartets of female vocalists.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Hmong Pop',
        id: 'hmong-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Popular music of the Hmong ethnicity, with roots in the Hmong Folk Music and influenced by Western and East Asian forms of Pop music.'
    },
 
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Indian Pop',
        id: 'indian-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Commonly based out of India, Pakistan and Bangladesh and almost always sung in Hindi, Urdu or Bengali, implements South Asian Music in context of American and European Pop and Rock music.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bhojpuri Pop',
        id: 'bhojpuri-pop',
        hard: ['indian-pop'],
        soft: [],
        desc: 'Modernized pop-folk variant of Bhojpuri Folk Music.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Indie Pop',
        id: 'indie-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Back-to-basics Rock approach combining a less mainstream and DIY ethos with melodic, lighthearted and straightforward songwriting.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Bedroom Pop',
        id: 'bedroom-pop',
        hard: ['indie-pop'],
        soft: [],
        desc: 'Named for solo producers and singer-songwriters from the 2010s onward who created intimate, "authentic" music in their own homes, outside of a traditional studio environment.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'C86',
        id: 'c86',
        hard: ['indie-pop'],
        soft: [],
        desc: 'Distinctly ramshackle, often Twee Pop-infused combination of British Indie Rock and Jangle Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Chamber Pop',
        id: 'chamber-pop',
        hard: ['indie-pop'],
        soft: [],
        desc: 'Based on the smooth and melodic songwriting of Lounge and other Easy Listening, as well as the orchestration of Baroque Pop and the production styles of other 1960s pop genres.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Neo-Acoustic',
        id: 'neo-acoustic',
        hard: ['indie-pop'],
        soft: [],
        desc: 'Cross-section of Indie Pop and Jangle Pop with more prominent acoustic instrumentation and songwriting/arrangements that draw from Sophisti-Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tontipop',
        id: 'tontipop',
        hard: ['indie-pop'],
        soft: [],
        desc: 'Spanish scene known for its exuberant, child-like sound drawing directly from British Twee Pop, as well as Yé-yé, Bubblegum, and Synthpop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Twee Pop',
        id: 'twee-pop',
        hard: ['indie-pop'],
        soft: [],
        desc: 'Distinct Post-Punk background and often jangling guitars, defined by a cute aesthetic and lyrics combined with an indie/DIY attitude and a simplicity often indebted to Punk Rock.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Cuddlecore',
        id: 'cuddlecore',
        hard: ['twee-pop'],
        soft: [],
        desc: 'Rawer and more Punk informed, downplaying jangly guitars in favor of heavier yet still light-hearted tones; often features influence from the contemporary Riot Grrrl movement.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Irish Showband',
        id: 'irish-showband',
        hard: ['pop'],
        soft: [],
        desc: 'Phenomenon lasting from the mid-1950s until the early 1980s, often performed a mixture of currently popular music and skits.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Italo Pop',
        id: 'italo-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Romantic style developed in Italy in the late 1950s including various influences such as Chanson and Schlager.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Canzone neomelodica',
        id: 'canzone-neomelodica',
        hard: ['italo-pop'],
        soft: [],
        desc: 'Elements are derived from Canzone napoletana.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Jazz Pop',
        id: 'jazz-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Pop that incorporates elements from Jazz.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'J-Pop',
        id: 'j-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Commercial Pop of Japan after the advent of the Heisei era (1989), characterized by modernized production, a more eclectic sound palette, and a more westernized vocal style.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Akishibu-kei',
        id: 'akishibu-kei',
        hard: ['j-pop'],
        soft: [],
        desc: 'Otaku inclined update of the style pioneered by the Shibuya-kei scene, mixed with J-Pop and often tied to Anime and Video Game Music.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Denpa',
        id: 'denpa',
        hard: ['j-pop'],
        soft: [],
        desc: 'Underground style aiming to be bizarre yet catchy, using off-key and high-pitched vocals, strange or nonsensical lyrics, repetitive chants, onomatopoeia, frantic and "off-kilter" production, and "moe" aesthetics.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Wa Euro',
        id: 'wa-euro',
        hard: ['j-pop'],
        soft: [],
        desc: 'Traditional form of J-Pop that emerged in the second half of the 1980s from late Hi-NRG, \'80s British Dance-Pop and Italo-Disco/Eurobeat.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'J-Euro',
        id: 'j-euro',
        hard: ['wa-euro'],
        soft: [],
        desc: 'Italian-oriented Japanese scene of Eurobeat, which emerged with Japanese-language covers of Italian songs in the early-to-mid-1990s.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Yakousei',
        id: 'yakousei',
        hard: ['j-pop'],
        soft: [],
        desc: 'Eclectic style of J-Pop developed in the late 2010s and influenced by the Vocaloid Scene; incorporates indie sensibilities, danceable rhythms and a focus on introspective lyricism.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Kayōkyoku',
        id: 'kayokyoku',
        hard: ['pop'],
        soft: [],
        desc: 'Japanese popular music prominent during the later period of the Shōwa era (early 1950s to late 1980s).'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Idol kayō',
        id: 'idol-kayo',
        hard: ['kayokyoku'],
        soft: [],
        desc: 'More Westernized and upbeat form of Kayōkyoku popular in the 1970s and 1980s which acted as a precursor to J-Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Mood kayō',
        id: 'mood-kayo',
        hard: ['kayokyoku'],
        soft: [],
        desc: 'Early form of Kayōkyoku dominant in the 1950s and 1960s, prominently influenced by American Jazz, Hispanic American Music, and Hawaiian Music.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Techno kayō',
        id: 'techno-kayo',
        hard: ['kayokyoku'],
        soft: [],
        desc: 'Offshoot of 1980s Kayōkyoku and Idol kayō incorporating characteristics from Synthpop.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Korean Ballad',
        id: 'korean-ballad',
        hard: ['pop'],
        soft: [],
        desc: 'South Korean Pop from the 1980s to the early 90s taking influence from western Blues, Synthpop, Soul and Contemporary Folk.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Oriental Ballad',
        id: 'oriental-ballad',
        hard: ['korean-ballad'],
        soft: [],
        desc: 'Emerged in the late 1990s in South Korea, taking influence from more traditional forms of Korean Music.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'K-Pop',
        id: 'k-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Contemporary style from South Korea, based on multiple mainstream influences such as Contemporary R&B, Dance-Pop, and Hip Hop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Semi-Trot',
        id: 'semi-trot',
        hard: ['k-pop'],
        soft: [],
        desc: 'Contemporary form of Trot which takes influences from modern K-Pop and recent Pop substyles.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Latin Pop',
        id: 'latin-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Incorporates elements and tropes from Hispanic and Latin American forms of music into a commercial Pop context.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Cumbia pop',
        id: 'cumbia-pop',
        hard: ['latin-pop'],
        soft: [],
        desc: 'Developed in the Río de la Plata region in the mid-2010s, featuring Latin Pop influences and lyrics related to romance, youth, and fun.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tropipop',
        id: 'tropipop',
        hard: ['latin-pop'],
        soft: [],
        desc: 'Subgenre of Colombian origin fusing Vallenato instrumentation into a Latin Pop context.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Lokal musik',
        id: 'lokal-musik',
        hard: ['pop'],
        soft: [],
        desc: 'Created by local, rural artists from Papua New Guinea that incorporate some elements of Papuan Folk Music into Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Mulatós',
        id: 'mulatos',
        hard: ['pop'],
        soft: [],
        desc: 'Upbeat, danceable Hungarian Pop that takes strong influence from Hungarian Folk Music and Romani Folk Music.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Nederpop',
        id: 'nederpop',
        hard: ['pop'],
        soft: [],
        desc: 'Dutch language Pop which originally arose in the 1970s to describe the style of the 1950s and 1960s, but would also later be used for 1980s artists who incorporated elements of Ska and Reggae.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Palingsound',
        id: 'palingsound',
        hard: ['nederpop'],
        soft: [],
        desc: 'Originating from Volendam in the Netherlands; harmonizing vocals and orchestrated arrangements.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'New Music',
        id: 'new-music',
        hard: ['pop'],
        soft: [],
        desc: 'Developed when Japanese Singer-Songwriters incorporated elements of Contemporary Folk and Pop Rock with Kayōkyoku songwriting.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'OPM',
        id: 'opm',
        hard: ['pop'],
        soft: [],
        desc: 'Filipino ballads prominent in the 1970s to early 1980s, combining the sentimentality, lush arrangements and vocal techniques of Kundiman with the instrumentations and rhythms of Manila Sound and Soft Rock.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Orthodox Pop',
        id: 'orthodox-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Combines Orthodox Jewish themes and prayer with Pop songwriting, usually sung in Hebrew.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Persian Pop',
        id: 'persian-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Hybrid of Iranian and Persian-language popular music with Western instruments such as the guitar, drum kit, and synthesizer.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Pop Batak',
        id: 'pop-batak',
        hard: ['pop'],
        soft: [],
        desc: 'Combines Western genres of music and instrumentation with a typical Batak flair, like lyrics about Batak life and the use of some traditional Batak instruments.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Pop Ghazal',
        id: 'pop-ghazal',
        hard: ['pop'],
        soft: [],
        desc: 'Employs traditional Ghazal\'s verse, meter, and poetic inclinations in a pop form.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Pop Minang',
        id: 'pop-minang',
        hard: ['pop'],
        soft: [],
        desc: 'Combines Minangkabau traditions with Pop structures and instrumentation.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Talempong goyang',
        id: 'talempong-goyang',
        hard: ['pop-minang'],
        soft: [],
        desc: 'Blends traditional Talempong elements with contemporary Pop influences, often featuring a female vocalist, and encourages audience participation.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Pop Raï',
        id: 'pop-rai',
        hard: ['pop'],
        soft: [],
        desc: 'Fuses melodic sensibilities into the traditional Raï structure, with increased utilization of synthesizers, guitars, and drum machines.'
    },
   
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Pop Rock',
        id: 'pop-rock',
        hard: ['pop'],
        soft: [],
        desc: 'Fuses conventional verse-chorus song structure and especially melodic songwriting with usage of guitars, drums, and propulsive rhythms.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Beat',
        id: 'beat',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Emerged in the early 1960s in the United Kingdom, drawing on Rock & Roll and the late 1950s Skiffle revival in a simple guitar-band format with strong melodies.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Freakbeat',
        id: 'freakbeat',
        hard: ['beat'],
        soft: [],
        desc: 'Outgrowth of the Mod movement which combines elements of British Rhythm & Blues and Beat with studio effects common in Psychedelia such as fuzztones, flanging and chorus; often seen as a British relative of the American Garage Psych scene.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Group Sounds',
        id: 'group-sounds',
        hard: ['beat'],
        soft: [],
        desc: 'Japanese bands in the mid-to-late 1960s who began performing a style of Beat primarily in English.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Jovem Guarda',
        id: 'jovem-guarda',
        hard: ['beat'],
        soft: [],
        desc: '1960s Brazilian youth-oriented Pop Rock, with romantic lyrics and influenced by Merseybeat and Rockabilly.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Merseybeat',
        id: 'merseybeat',
        hard: ['beat'],
        soft: [],
        desc: 'Light, highly melodic style of Beat popular in the UK during the early 1960s, named due to the abundance of bands from Liverpool beside the River Mersey.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Nederbeat',
        id: 'nederbeat',
        hard: ['beat'],
        soft: [],
        desc: 'Dutch answer to the British Beat boom of the 1960s.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Beat Rock',
        id: 'beat-rock',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Japan-exclusive subgenre which combines Pop melodicism with a punchy, driving sound drawing on Punk Rock and New Wave.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Big Music',
        id: 'big-music',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Rooted in Post-Punk and popular in the 1980s, with anthemic songwriting and a grandiose, stadium-ready sound.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Britpop',
        id: 'britpop',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Emerged in the United Kingdom in the early 1990s, with a style hearkening back to the traditional guitar-driven songs and melodic hooks found in the British Pop Rock of the 1960s.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Jangle Pop',
        id: 'jangle-pop',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Treble-heavy guitars with arpeggiated melodies, distinct basslines, and often propulsive, repetitive strum-rhythms; frequently influenced by Post-Punk.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Dolewave',
        id: 'dolewave',
        hard: ['jangle-pop'],
        soft: [],
        desc: 'Loose, low-key, and sardonic with erudite lyrics and considerable influence from the Dunedin Sound and Slacker Rock; came to prominence in Melbourne in the early 2010s.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Paisley Underground',
        id: 'paisley-underground',
        hard: ['jangle-pop'],
        soft: [],
        desc: 'Emerged in Los Angeles in the early 1980s, featuring the energy of Power Pop and New Wave adorned with retro Psychedelia.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Piano Rock',
        id: 'piano-rock',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Primarily based around piano riffs and melodies, rather than having guitar as the focal instrument.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Pop Yeh-Yeh',
        id: 'pop-yeh-yeh',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Blends Western Beat and Psychedelia styles with asli singing and melodies drawn from Malay Folk Music.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Post-Britpop',
        id: 'post-britpop',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Emerged in the late 1990s as a Britpop expansion mainly characterized by acoustic-leaning instrumentation, lush string arrangements, and mid-tempo song structures, as well as less apparent lyrical concerns for Britain in favor of introspective, contemplative themes.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Power Pop',
        id: 'power-pop',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Combines 1960s Pop melodies with loud power chords; characterized by prominent, sometimes jangly electric guitars, clear vocals, crisp harmonies, and economical arrangements.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Soft Rock',
        id: 'soft-rock',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Clean production and light instrumentation paired with harmonious, radio-friendly songwriting; gained huge commercial success in the 1970s.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Tropical Rock',
        id: 'tropical-rock',
        hard: ['soft-rock'],
        soft: [],
        desc: 'Combines influences from Country Rock and Caribbean Music to create an acoustic and breezy "island" themed sound.'
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Yacht Rock',
        id: 'yacht-rock',
        hard: ['soft-rock'],
        soft: [],
        desc: 'Slick Pop Rock influenced by smoother R&B styles, popular in the late 1970s and often associated with California.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Stereo',
        id: 'stereo',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Burmese Pop Rock genre which emerged in the mid-1960s.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Vocal Surf',
        id: 'vocal-surf',
        hard: ['pop-rock'],
        soft: [],
        desc: 'Appropriates the sounds of instrumental Surf Rock, combining surfing- and car-themed lyrics with a style that draws primarily from Doo-Wop and Rock & Roll.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Pop Soul',
        id: 'pop-soul',
        hard: ['pop'],
        soft: [],
        desc: 'Fusion of Pop and Soul; originated in the 1960s as an attempt to give soul crossover success.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Motown Sound',
        id: 'motown-sound',
        hard: ['pop-soul'],
        soft: [],
        desc: 'Succinct, catchy song structures; complex arrangements; Gospel-influenced vocals; highly melodic and rhythmic bass lines; 4-4 drum patterns; often syncopated piano parts; regular use of horn and string sections; and historically a distinctive reverb and treble-heavy production.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Pop Sunda',
        id: 'pop-sunda',
        hard: ['pop'],
        soft: [],
        desc: 'Mixes Sundanese traditions with Pop structures and instrumentation.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'P-Pop',
        id: 'p-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Commercialized style from the Philippines, which served as the successor of Manila Sound and OPM, featuring various contemporary Western influences and primarily sung in Tagalog and English.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Progressive Pop',
        id: 'progressive-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Milder counterpart to Progressive Rock, emerging in the late 1960s and introducing complex songwriting and arrangements into a Pop context.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Psychedelic Pop',
        id: 'psychedelic-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Combines unconventional instrumentation with studio effects to create a psychedelic atmosphere within melodic Pop music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Rabiz',
        id: 'rabiz',
        hard: ['pop'],
        soft: [],
        desc: 'Elements of Armenian folk in its instrumentation, oftentimes incorporating influences from Arabic and other West Asian forms on a background of synthesizer arrangements.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Rigsar',
        id: 'rigsar',
        hard: ['pop'],
        soft: [],
        desc: 'Dominant form of popular music in Bhutan which broke traditions to move towards a more Western and Indian approach.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Rumba catalana',
        id: 'rumba-catalana',
        hard: ['pop'],
        soft: [],
        desc: 'Cheerful Catalan genre that takes influences from Rumba cubana, Andalusian Rumba flamenca, and Pop.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Russian Chanson',
        id: 'russian-chanson',
        hard: ['pop'],
        soft: [],
        desc: 'Divided into lyrical and criminal chanson, it is best described as narrative-driven popular music inspired by crime and prison.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Schlager',
        id: 'schlager',
        hard: ['pop'],
        soft: [],
        desc: 'Light, sentimental, melodic pop music common mainly in northern and central Europe.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Humppa',
        id: 'humppa',
        hard: ['schlager'],
        soft: [],
        desc: 'Finnish music related to Jazz and the Foxtrot.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Levenslied',
        id: 'levenslied',
        hard: ['schlager'],
        soft: [],
        desc: 'Dutch genre that enjoyed widespread popularity in the pre-Rock & Roll era with simple melody and rhythm and lyrics composed of couplets and refrains.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Volkstümliche Musik',
        id: 'volkstumliche-musik',
        hard: ['schlager'],
        soft: [],
        desc: 'Light Pop with borrowings from German Folk Music (volksmusik), often misleadingly labeled as being volksmusik.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Sertanejo romântico',
        id: 'sertanejo-romantico',
        hard: ['pop'],
        soft: [],
        desc: 'Electric instrumentation and romantic lyrics, made popular nationwide during the mid-to-late 1980s.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Sertanejo universitário',
        id: 'sertanejo-universitario',
        hard: ['pop'],
        soft: [],
        desc: 'Modernized style combining rural themes and acoustic instrumentation with commercial production and Electronic instrumentation.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Agronejo',
        id: 'agronejo',
        hard: ['sertanejo-universitario'],
        soft: [],
        desc: 'Early 2020s movement characterized by lyrical content with heavy agribusiness imagery, often featuring several Dance genres\' sonic elements.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Arrocha sertanejo',
        id: 'arrocha-sertanejo',
        hard: ['sertanejo-universitario'],
        soft: [],
        desc: 'Merged the Arrocha style with the younger audience creating a more energetic and more danceable rhythm.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Funknejo',
        id: 'funknejo',
        hard: ['sertanejo-universitario'],
        soft: [],
        desc: 'Incorporates the rhythms, production, and idioms of Funk brasileiro into the universitário genre.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Sophisti-Pop',
        id: 'sophisti-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Incorporates influences from Jazz, classic R&B and Soul along with a slick, polished production style while retaining elements from its New Wave roots.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Soviet Estrada',
        id: 'soviet-estrada',
        hard: ['pop'],
        soft: [],
        desc: 'Emerged in the USSR during the early 1930s, and encompassed the dominating popular music style composed by government-approved songwriters and the primary repertoire of professionally trained performers.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Sunshine Pop',
        id: 'sunshine-pop',
        dates: '1960s',
        artists: 'The Mamas & the Papas, The Beach Boys',
        hard: ['pop'],
        soft: [],
        desc: 'Emerged in the mid-1960s, characterized by a cheerful or wistful sound, light, lush production, and prominent vocal harmonies.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Synthpop',
        id: 'synthpop',
        hard: ['pop'],
        soft: [],
        desc: 'Led by melodic synthesizer sounds, often with reverberating drum machine patterns; commonly associated with the 1980s.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Futurepop',
        id: 'futurepop',
        hard: ['synthpop', 'ebm'],
        soft: [],
        desc: 'Derivative of EBM, retaining its apocalyptic worldview but incorporating heavy influence from the melodic style of Synthpop.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Pon-chak disco',
        id: 'pon-chak-disco',
        hard: ['synthpop'],
        soft: [],
        desc: 'Heavily influenced by Electro-Disco, featuring cheap "electronic organ" synth leads and minimalistic, repetitive rhythms.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Tarz',
        id: 'tarz',
        hard: ['pop'],
        soft: [],
        desc: 'Popular music from Afghanistan that combines various ethnic and regional traditions with influences from Indian, Persian, and Western popular music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Teen Pop',
        id: 'teen-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Oriented to teen audiences and almost always sung by teens.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Toytown Pop',
        id: 'toytown-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Niche offshoot of British Psychedelic Pop most popular in the late 1960s and early 70s; typically featuring strong influence from Music Hall and Novelty, as well as the culture of Victorian and Edwardian Britain, and characterised by a whimsical, childlike atmosphere.'
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Traditional Pop',
        id: 'traditional-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Predominant form of Western commercial popular music in the pre-Rock & Roll era, particularly in the USA and starting with Tin Pan Alley; typically vocal-oriented with an orchestral arrangement.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'British Dance Band',
        id: 'british-dance-band',
        hard: ['traditional-pop'],
        soft: [],
        desc: 'Came from the dancehalls of the 1920s and 1930s, combining a British take on Jazz with the Music Hall tradition.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Romanţe',
        id: 'romante',
        hard: ['traditional-pop'],
        soft: [],
        desc: 'Expressive and poetic Romanian style, generally sung similar to a Chanson and composed for piano and guitar orchestral arrangements.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Standards',
        id: 'standards',
        hard: ['traditional-pop'],
        soft: [],
        desc: 'Traditional compositions originating from the 1910s and onward which have become widely known, performed, and recorded across the world.'
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Tin Pan Alley',
        id: 'tin-pan-alley',
        hard: ['traditional-pop'],
        soft: [],
        desc: 'Early era of popular song in the USA, broadly from the 1890s-1930s; influences include Ragtime, Vaudeville, and Parlour Music.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Turkish Pop',
        id: 'turkish-pop',
        hard: ['pop'],
        soft: [],
        desc: 'Started in the late 1950s, when Turkish artists started to write their own lyrics to Western popular tunes.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Vocal Trance',
        id: 'vocal-trance',
        hard: ['pop'],
        soft: [],
        desc: 'Melodic, polished, Pop-like, and vocal-focused with around 120-145 BPM and frequent overlap with Progressive Trance, Uplifting Trance, and Euro Trance.'
    },
    {
        type: Type.Sub,
        parent: Type.Super,
        label: 'Yé-yé',
        id: 'ye-ye',
        hard: ['pop'],
        soft: [],
        desc: 'Upbeat, trendy Pop that emerged in Southern Europe in the early 1960s, focusing on image and risqué lyrics.'
    },
]
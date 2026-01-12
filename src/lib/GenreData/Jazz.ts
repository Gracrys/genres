
export enum Type {
  'Super' = 1,
  'Genre' = 2,
  'Sub' = 3,
  'Scene' = 4,
  'Fusion' = 5
}

export const Jazz = [
  {
    type: Type.Super,
    label: 'Jazz',
    id: 'jazz',
    desc: 'Originating in African American communities in the Southern United States around the turn of the 20th century, building on New Orleans Brass Band ensemble and influences from Ragtime and Blues to become a very popular style by the emergence of Swing in the 1930s.',
    hard: ['traditional-folk'],
    soft: ['ragtime', ' blues']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Afro Jazz',
    id: 'afro-jazz',
    desc: 'African-styled percussion and rhythms.',
    hard: ['jazz'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'arabic Jazz',
    id: 'arabic-jazz',
    desc: 'Influences from Arabic music fused with jazz.',
    hard: ['jazz', 'arabic-music'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Avant-garde Jazz',
    id: 'avant-garde-jazz',
    desc: 'Combines traditional or mainstream Jazz stylings with non-traditional techniques of avant-garde art music by experimenting with characteristics such as rhythm, harmony, structure, melody, and instrumentation.',
    hard: ['jazz', 'avant-garde'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Experimental Big Band',
    id: 'experimental-big-band',
    desc: 'Dispensing with traditional Jazz structures and sounds, instead performing avant-garde music and pushing the boundaries of the medium.',
    hard: ['avant-garde-jazz'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Free Jazz',
    id: 'free-jazz',
    desc: 'Attempts to break free from the conventions and patterns of earlier Jazz subgenres through the use of elements such as dissonance, atonality, and free-flowing rhythmic structures.',
    hard: ['avant-garde-jazz'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'European Free Jazz',
    id: 'european-free-jazz',
    desc: 'Arose in Europe in the late 1960s and early 1970s, moving even further from the Jazz tradition by often dropping the swinging rhythm, taking liberties with the use of atonality and noise.',
    hard: ['avant-garde-jazz'],
    soft: ['noise']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Bebop',
    id: 'bebop',
    desc: 'Fast tempos, improvisation, melodic chromaticism, and complex harmonies and chord progressions.',
    hard: ['jazz'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Big Band',
    id: 'big-band',
    desc: 'Commonly associated with the golden era of Swing in the 1930s and 1940s, performed by a large ensemble including brass, woodwinds, and usually a rhythm section.',
    hard: ['jazz', 'swing'],
    soft: []
  },

  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Experimental Big Band',
    id: 'experimental-big-band',
    desc: 'Dispensing with traditional Jazz structures and Swing sounds, instead performing Avant-Garde Jazz and pushing the boundaries of the medium.',
    hard: ['big-band'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Progressive Big Band',
    id: 'progressive-big-band',
    desc: 'Introduces Western Classical Music compositional techniques into Big Band.',
    hard: ['big-band', 'western-classical-music'],
    soft: []
  },
{
    type: Type.Genre,
    parent: Type.Super,
    label: 'British Dance Band',
    id: 'british-dance-band',
    desc: 'Came from the dancehalls of the 1920s and 1930s, combining a British take on Jazz with the Music Hall tradition.',
    hard: ['jazz', 'music-hall'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Bulawayo Jazz',
    id: 'bulawayo-jazz',
    desc: 'Emerged from the city of Bulawayo, Zimbabwe in the early 1950s, led by the alto sax and accompanied by ensembles.',
    hard: ['jazz', 'traditional-folk'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Cape Jazz',
    id: 'cape-jazz',
    desc: 'Developed parallel to American Jazz in the early 20th century, named for its origin in Cape Town, South Africa.',
    hard: ['jazz'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Cartoon Music',
    id: 'cartoon-music',
    desc: 'Zany and uptempo; incorporates elements of Western Classical Music and Modern Classical into frantic Big Band arrangements.',
    hard: ['jazz','western-classical-music', 'modern-classical', 'big-band'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Chamber Jazz',
    id: 'chamber-jazz',
    desc: 'Made by mostly small acoustic-based ensembles with emphasized improvisation and influenced by Neoclassicism and Traditional Folk Music.',
    hard: ['jazz'],
    soft: ['neoclassicism', 'traditional-folk-music']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Cool Jazz',
    id: 'cool-jazz',
    desc: 'Developed in the late 1940s alongside and in response to Bebop, featuring a more restrained, emotionally "cool" style.',
    hard: ['jazz'],
    soft: ['bebop']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Crime Jazz',
    id: 'crime-jazz',
    desc: 'Gritty, moody style that emerged in the mid-1950s to accompany film noir movies and hard-boiled detective/crime-themed TV shows.',
    hard: ['jazz'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Dark Jazz',
    id: 'dark-jazz',
    desc: 'Melancholic and gloomy Film noir-inspired atmosphere and influence from Crime Jazz and Dark Ambient.',
    hard: ['jazz'],
    soft: ['crime-jazz', 'dark-ambient']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Dixieland',
    id: 'dixieland',
    desc: 'Developed in New Orleans in the 1910s, incorporating influences from Ragtime and Blues into cacophonous, polyphonic arrangements.',
    hard: ['jazz','ragtime', 'blues'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'ECM Style Jazz',
    id: 'ecm-style-jazz',
    desc: 'Primarily associated with ECM Records, combining elements of Jazz Fusion with the Genredued atmosphere of Cool Jazz and Third Stream.',
    hard: ['jazz'],
    soft: [ 'cool-jazz']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Ethio-Jazz',
    id: 'ethio-jazz',
    desc: 'Unique blend of traditional Ethiopic Music and Jazz.',
    hard: ['jazz', 'ethiopic-music'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Flamenco Jazz',
    id: 'flamenco-jazz',
    desc: 'Combination of Jazz with Flamenco nuevo, the contemporary style of Flamenco, which was pioneered in the late 1960s.',
    hard: ['jazz', 'flamenco'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Hard Bop',
    id: 'hard-bop',
    desc: 'A continuation of Bebop that reintroduces more traditional African-American musical features like bluesy melodies and grooves.',
    hard: ['jazz', 'bebop'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Indo Jazz',
    id: 'indo-jazz',
    desc: 'Fuses the various musical traditions of the Indian Genrecontinent with jazzy musical structures.',
    hard: ['jazz', 'indian-music'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Jazz-Funk',
    id: 'jazz-funk',
    desc: 'Jazz highly influenced by Funk.',
    hard: ['jazz', 'funk'],
    soft: []
  },
  {
    type: Type.Fusion,
    parent: Type.Super,
    label: 'Jazz Fusion',
    id: 'jazz-fusion',
    desc: 'Usage of electric guitars and keyboards coupled with influences from Rock, Rhythm & Blues, Funk, and Traditional Folk Music.',
    hard: ['jazz', 'rock', 'rhythm-and-blues', 'funk', 'traditional-folk-music'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Jazz manouche',
    id: 'jazz-manouche',
    desc: 'Combines Jazz with several aspects of Romani Folk Music.',
    hard: ['jazz', 'romani-folk-music'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Jazz Poetry',
    id: 'jazz-poetry',
    desc: 'Emerged in the 1920s, incorporating the style and rhythms of Jazz as both art forms spread throughout African-American communities.',
    hard: ['jazz'],
    soft: ['spoken-word']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Kréyol djaz',
    id: 'kreyol-djaz',
    desc: 'Combines Jazz with various styles of French Caribbean Music.',
    hard: ['jazz', 'french-caribbean-music'],
    soft: []
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Latin Jazz',
    id: 'latin-jazz',
    desc: 'Fusion with Latin American rhythms, especially those of African origin.',
    bands: 'Ruben Blades, Tito Puente, Willie Colon',
    hard: ['jazz', 'latin-american-music'],
    soft: []
  },
    {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Afro Cuban Jazz',
    id: 'afro-cuban-jazz',
    desc: 'Combines Jazz with the rhythm of Afro-Cuban music like Habanera.',
    hard: ['latin-jazz'],
    soft: []
  }
  ,
    {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Samba Jazz',
    id: 'samba-jazz',
    desc: 'Jazz genre from Brazil that incorporates Samba and/or Bossa nova elements.',
    hard: ['latin-jazz', 'samba', 'bossa-nova'],
    soft: []
  }
  ,
   {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Marabi',
    id: 'marabi',
    desc: 'South African Jazz with origins in the 1920s and rooted in traditional South African music.',
    hard: ['jazz'],
    soft: [ 'afro-jazz']
  },
   {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Kwela',
    id: 'kwela',
    desc: 'Influenced by Zulu music, characterized by its happy melodies, played by pennywhistle flutes and accompanied by a banjo or a guitar.',
    hard: ['marabi'],
    soft: ['zulu']
  },
   {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Mbaqanga',
    id: 'mbaqanga',
    desc: 'Emerged from the traditional Marabi Jazz and Swing as well as Kwela popular South African genres.',
    hard: ['marabi'],
    soft: ['zulu']
  },
    {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Modal Jazz',
    id: 'modal-jazz',
    desc: 'Utilizes musical modes as harmonic framework over traditionally used chord progressions.',
    hard: ['jazz'],
    soft: [ ]
  },
     {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Jazz Mughan',
    id: 'jazz-mughan',
    desc: 'Combines Jazz with elements of Azerbaijani Mugham, featuring jazz-inspired instrumental compositions, improvisations, wind and vocal elements, as well as modal scales and ornamentation techniques for emotional depth.',
    hard: ['jazz'],
    soft: [ ]
  },
  {
    type: Type.Genre,
    parent: Type.Genre,
    label: 'Post-Bop',
    id: 'post-bop',
    desc: 'Grew out of Hard Bop in the early to mid-1960s incorporating certain untraditional elements inspired by Avant-Garde Jazz, Modal Jazz, and Free Jazz.',
    hard: ['hard-bop'],
    soft: ['avant-garde-jazz', 'modal-jazz', 'free-jazz']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Smooth Jazz',
    id: 'smooth-jazz',
    desc: 'Simple melodies and slick production influenced by Pop and R&B.',
    hard: ['jazz'],
    soft: ['pop', 'rnb']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Soul Jazz',
    id: 'soul-jazz',
    desc: 'Appeared during the 1950s when Gospel, Rhythm & Blues and later Soul started to influence the style of prolific Jazz musicians.',
    hard: ['jazz'],
    soft: ['gospel', 'rnb', 'soul']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Spiritual Jazz',
    id: 'spiritual-jazz',
    desc: 'Emerged in the 1960s, marked by a mixture of Jazz with approximations of ethnic styles, religious music, and the transcendental aspects of Free Jazz.',
    hard: ['jazz'],
    soft: ['free-jazz']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Spy Music',
    id: 'spy-music',
    desc: 'Meant to evoke the action and drama of spy films.',
    hard: ['jazz'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Stride',
    id: 'stride',
    desc: 'Early form of Ragtime-derived Jazz with improvisational tendencies; named for the performers\' left hand "striding" across the piano keyboard.',
    hard: ['jazz', 'ragtime'],
    soft: []
  },
    {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Swing',
    id: 'swing',
    desc: 'Distinctive rhythm and large backing rhythm section over which solos are performed.',
    hard: ['jazz'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Swing Revival',
    id: 'swing-revival',
    desc: 'Born out of 1990s alternative music; sometimes incorporating elements from newer genres such as Rockabilly, Ska, and Punk Rock.',
    hard: ['swing'],
    soft: ['alternative-music']
  },
  {
    type: Type.Genre,
    parent: Type.Super,
    label: 'Third Stream',
    id: 'third-stream',
    desc: 'A fusion of Jazz and Western Classical Music, with improvisation as a vital component.',
    hard: ['jazz', 'western-classical-music'],
    soft: []
  },
  {
    type: Type.Sub,
    parent: Type.Super,
    label: 'Vocal Jazz',
    id: 'vocal-jazz',
    desc: 'Focused on vocals, generally using a more traditional, poppy strong structure and reducing the role of improvisation.',
    hard: ['jazz', 'pop'],
    soft: ['pop']
  },
  {
    type: Type.Sub,
    parent: Type.Genre,
    label: 'Vocalese',
    id: 'vocalese',
    desc: 'Newly written lyrics set to the melody of an existing instrumental solo, often in a Bebop or Big Band style.',
    hard: ['bebop', 'big-band'],
    soft: []
  }
]
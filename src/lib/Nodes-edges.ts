import type { Edge, Node, XYPosition } from "@xyflow/svelte"

enum Type {
    'Super' = 1,
    'Genre' = 2,
    'Sub' = 3,
    'Scene' = 4
}

interface IGenre {
    type: Type,
    label: string,
    id: string
    hard: string[],
    soft: string[],
    parent?: Type
}


interface IPositionGenreStruct {
    id:string
    positionX:number
    parent?: number
    positionY?: number
    NChildren: number
}

const TypeDictNode = ['SuperNode', 'SuperNode', 'MidNode', 'SubNode', 'SceneNode']

let genreAccum: IPositionGenreStruct[][] = [[],[],[],[], []]


const calculatePosition = (data: IGenre, genre: typeof genreAccum, variant = 0): XYPosition =>{
    let indexGenre
const currentStruct = data.type == 1? {
    id: data.id,
    positionX: genreAccum[data.type].length * 700,
    NChildren: 0
} : {
    id: data.id,
    positionX: (() => { 
      const  lookedGenre =  genreAccum[data.parent || 1].find(g => g.id == data.hard[0]) as IPositionGenreStruct
       indexGenre = genreAccum[data.parent || 1].indexOf(lookedGenre)
      genreAccum[data.parent || 1][indexGenre].NChildren = lookedGenre?.NChildren + 1
        return (lookedGenre.positionX +((lookedGenre.NChildren + 1) * (130 * data.hard.length))) -(450 + genreAccum[data.type].length * 5)

    })(),
    NChildren: 0,
    parent: indexGenre
}
genreAccum[data.type].push(currentStruct)

return ({
    x: currentStruct.positionX,
    y: (data.parent || 0) * 70,
}) 
}
const edgeMapper = (id: string, connections: string[], type: 'hardEdge' | 'softEdge') => connections.map((x) => ({
    id: x + '+' + id,
    type: 'default',
    source: x,
    target: id,
    class: type
}))

const sortNodes = (genres: IGenre[]) => genres.sort((a, b) => a.type - b.type)

export const GenreMapper = (arr: IGenre[]): [Node[], Edge[]] => {
    const sortedArr = sortNodes(arr)
    const newNodes = sortedArr.map(x => ({
        id: x.id,
        type: TypeDictNode[x.type],
        data: { label: x.label },
        position: calculatePosition(x, genreAccum)
})) || []

console.log(newNodes)
    const newEdges = sortedArr.map(x => [...edgeMapper(x.id, x.hard, 'hardEdge'), ...edgeMapper(x.id, x.soft, 'softEdge')]).flat()
    return [newNodes, newEdges]
}

export const Genres: IGenre[] = [
    {
        type: Type.Super,
        label: 'Avant Garde',
        id: 'avant-garde',
        hard: [],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Harsh Noise',
        id: 'harsh-noise',
        hard: ['noise'],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Noise',
        id: 'noise',
        hard: ['avant-garde'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'GoreNoise',
        id: 'gorenoise',
        hard: ['noise'],
        soft: []
    },
    {
        type: Type.Sub,
        parent: Type.Sub,
        label: 'Harsh Noise Wall',
        id: 'harsh-noise-wall',
        hard: ['harsh-noise'],
        soft: []
    },
    {
        type: Type.Super,
        label: 'Rock',
        id: 'rock',
        hard: [ ],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Punk',
        id: 'punk',
        hard: ['rock' ],
        soft: []
    },
    {
        type: Type.Genre,
        parent: Type.Super,
        label: 'Industrial',
        id: 'industrial',
        hard: ['avant-garde', 'punk' ],
        soft: [ 'musique-concrete', 'electronic']
    },
    {
        type: Type.Sub,
        parent: Type.Genre,
        label: 'Industrial Rock',
        id: 'industrial-rock',
        hard: ['industrial', 'rock' ],
        soft: [ ]
    },
]
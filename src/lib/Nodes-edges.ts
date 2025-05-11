import type { Edge, Node, XYPosition } from "@xyflow/svelte"
import { Genres, Type, type IGenre } from "./GenreData/GenreData"


interface IPositionGenreStruct {
    id: string
    positionX: number
    parent?: number
    positionY?: number
    NChildren: number
}

const TypeDictNode = ['SuperNode', 'SuperNode', 'MidNode', 'SubNode', 'SceneNode', 'TheorynFusion']

let genreAccum: IPositionGenreStruct[][] = [[], [], [], [], [], []]

const genresYDict: { [key: string]: number } = {
    'rock': 400,
    'metal': 900,
    'electronics': -600,
    'hiphop': 400,
    'classical': -600
}


const genresXDict: { [key: string]: number } = {
    'metal': 900
}

const genresParameters: { [key: string]: {
    Y?: number
    X?: number
    Bleeding?: number
} } =
{
    'rock': {
        Y: 400,
        
    },
    'metal': {
        Y: 900,
        X: 900
    },
    'electronics': {
        Y:-600
    },
    'hiphop': {
        Y: 400
    },
    'classical': {
        Y: -600,
        Bleeding: 200
    },
    'opera': {
        Y: -600,
        Bleeding: 200
    },
    'gamelan': {
        Y: -600,
        Bleeding: 180
    },
    'balinese-gamelan': {
        Y: -600,
        Bleeding: 180
    },
    'world-music': {
        Y: 800,
      //  Bleeding: 180
    }
}



const calculatePosition = (data: IGenre): XYPosition => {
    let indexGenre
    let lookedGenre
    let currentStruct = {} as any
    try {

        currentStruct = data.type == 1 ? {
            id: data.id,
            positionX: genreAccum[data.type].length * 700,
            positionY: (genresParameters[data.id]?.Y || 70),

            NChildren: 0
        } : {
            id: data.id,
            positionX: (() => {
                lookedGenre = genreAccum[data.parent || 1].find(g => g.id == data.hard[0]) as IPositionGenreStruct
                indexGenre = genreAccum[data.parent || 1].indexOf(lookedGenre)
                genreAccum[data.parent || 1][indexGenre].NChildren = lookedGenre?.NChildren + 1
                return (lookedGenre.positionX + ((lookedGenre.NChildren + 1) * (genresParameters[data.hard[0]]?.Bleeding || 130))) - (genresXDict[lookedGenre.id] || 450)

            })(),
            positionY: (data.parent ? (lookedGenre?.positionY || 1 * data.parent) : 0) + 70,
            NChildren: 0,
            parent: indexGenre
        }
        genreAccum[data.type].push(currentStruct)

    } catch (error) {
        console.warn('on data:' + JSON.stringify(data))
        console.warn('error', error)
    } finally {
        return ({
            x: currentStruct.positionX,
            y: currentStruct.positionY,
        })
    }
}
const edgeMapper = (id: string, connections: string[], type: 'hardEdge' | 'softEdge') => connections.map((x) => ({
    id: x + '+' + id,
    type: 'default',
    source: x,
    target: id,
    class: type
}))

const sortNodes = (genres: IGenre[]) =>
    genres.sort((a, b) => a.type - b.type
    );

const exceptions: { [key: string]: Type } = {
    //'industrial': 2
}


export const GenreMapper = (arr: IGenre[]): [Node[], Edge[]] => {
    const sortedArr = sortNodes(arr)
    const newNodes = sortedArr.map(x => ({
        id: x.id,
        type: TypeDictNode[exceptions[x.id] || x.type],
        data: {
            label: x.label,
            under: x.sub, 
            desc: x.desc, 
            dates: x?.dates,
            type: exceptions[x.id] || x.type, 
            hard: x.hard, 
            soft: x.soft
        },
        position: calculatePosition(x),
    })) || []

    const newEdges = sortedArr.map(x => [...edgeMapper(x.id, x.hard, 'hardEdge'), ...edgeMapper(x.id, x.soft, 'softEdge')]).flat()
    return [newNodes, newEdges]
}


import type { Edge, Node, XYPosition } from "@xyflow/svelte"
import { Genres, type IGenre } from "./GenreData"


interface IPositionGenreStruct {
    id:string
    positionX:number
    parent?: number
    positionY?: number
    NChildren: number
}

const TypeDictNode = ['SuperNode', 'SuperNode', 'MidNode', 'SubNode', 'SceneNode', 'TheorynFusion']

let genreAccum: IPositionGenreStruct[][] = [[],[],[],[], []]

const genresYDict:{ [key:string] : number} = {
    'rock': 400,
    'metal': 800,
    'electronics': -600,
    'hiphop': -400
}

const calculatePosition = (data: IGenre): XYPosition => {
    let indexGenre
    let lookedGenre
    let currentStruct = {} as any
    try {


        currentStruct = data.type == 1 ? {
            id: data.id,
            positionX: genreAccum[data.type].length * 700,
            positionY: (genresYDict[data.id] || 70),

            NChildren: 0
        } : {
            id: data.id,
            positionX: (() => {
                lookedGenre = genreAccum[data.parent || 1].find(g => g.id == data.hard[0]) as IPositionGenreStruct
                indexGenre = genreAccum[data.parent || 1].indexOf(lookedGenre)

                genreAccum[data.parent || 1][indexGenre].NChildren = lookedGenre?.NChildren + 1
                return (lookedGenre.positionX + ((lookedGenre.NChildren + 1) * (130))) - (450 / data.hard.length)

            })(),
            positionY: (data.parent ? (lookedGenre?.positionY || 1 * data.parent) : 0) + 70,
            NChildren: 0,
            parent: indexGenre
        }
        genreAccum[data.type].push(currentStruct)

    } catch (error) {
        console.warn('on data:' + JSON.stringify(data))
        console.warn('error')
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

const sortNodes = (genres: IGenre[]) => genres.sort((a, b) => a.type - b.type)

export const GenreMapper = (arr: IGenre[]): [Node[], Edge[]] => {
    const sortedArr = sortNodes(arr)
    const newNodes = sortedArr.map(x => ({
        id: x.id,
        type: TypeDictNode[x.type],
        data: { label: x.label, under: x.sub, desc: x.desc },
        position: calculatePosition(x)
})) || []

    const newEdges = sortedArr.map(x => [...edgeMapper(x.id, x.hard, 'hardEdge'), ...edgeMapper(x.id, x.soft, 'softEdge')]).flat()
    return [newNodes, newEdges]
}


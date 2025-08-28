// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
// imp
import { writable } from "svelte/store";
import { Genres } from "$lib/GenreData/GenreData";
import { GenreMapper } from "$lib/Nodes-edges";
const [newNodes, newEdges] = GenreMapper(Genres);
const nodes = writable([...newNodes]);
// same for edges
const edges = writable([...newEdges]);

export { nodes, edges }

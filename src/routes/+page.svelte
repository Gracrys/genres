<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		MiniMap,
		Handle,
		Position,
		type Edge,
		type Node
	} from '@xyflow/svelte';
	import SuperNode from '$lib/Components/SuperNode.svelte';
	// 👇 this is important! You need to import the styles for Svelte Flow to work
	import '@xyflow/svelte/dist/style.css';
	import MidNode from '$lib/Components/MidNode.svelte';
	import SubNode from '$lib/Components/SubNode.svelte';
	import {GenreMapper } from '$lib/Nodes-edges';
	import Aside from '$lib/Components/Aside.svelte';
	import { Genres } from '$lib/GenreData/GenreData';
	import SceneNode from '$lib/Components/SceneNode.svelte';
    import TheorynFusion from '$lib/Components/TheorynFusion.svelte';
	const [newNodes, newEdges] = GenreMapper(Genres);
	let data = $state({});
	let isAsideOpen = $state(false);
    const closeAside = () => isAsideOpen = false
	const onNodeClick = (node: Node) => {
		data = node.data;
		isAsideOpen = true;
	};
	// We are using writables for the nodes and edges to sync them easily. When a user drags a node for example, Svelte Flow updates its position.
	const nodes = writable([
	
		...newNodes
	]);
	// same for edges
	const edges = writable([

		...newEdges
	]);

	const nodeTypes = {
		SuperNode,
		MidNode,
		SubNode,
        SceneNode,
        TheorynFusion,
	};
	const snapGrid: [number, number] = [25, 25];
</script>
<section class="flex bg-indigo-950">
<main class="w-screen h-screen">
	<SvelteFlow
		{nodes}
		{nodeTypes}
		{edges}
		fitView
		on:nodeclick={(event) => onNodeClick(event.detail.node)}
	>
		<Background bgColor="#0a0a0a" variant={BackgroundVariant.Cross} />
	</SvelteFlow>
</main>
{#if isAsideOpen}
	<Aside {data} {closeAside}/>
{/if}
</section>
<style>
	:global(.hardEdge) {
		--xy-edge-stroke: #00ffff;
	}
	:global(.softEdge) {
		--xy-edge-stroke: #ee00ff;
	}
</style>

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
		// 👇 this is important! You need to import the styles for Svelte Flow to work
		import '@xyflow/svelte/dist/style.css';
	import SuperNode from '$lib/Components/Nodes/SuperNode.svelte';
	import SubNode from '$lib/Components/Nodes/SubNode.svelte';
	import SceneNode from '$lib/Components/Nodes/SceneNode.svelte';
    import TheorynFusion from '$lib/Components/Nodes/TheorynFusion.svelte';
	import MidNode from '$lib/Components/Nodes/MidNode.svelte';
	import {GenreMapper } from '$lib/Nodes-edges';
	import Aside from '$lib/Components/Aside.svelte';
	import { Genres } from '$lib/GenreData/GenreData';

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
	onlyRenderVisibleElements={true}
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

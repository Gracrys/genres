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
	import MainEdge from '$lib/Components/customEdges/mainEdge.svelte';
	import MidNode from '$lib/Components/MidNode.svelte';
	import SubNode from '$lib/Components/SubNode.svelte';
	import {GenreMapper } from '$lib/Nodes-edges';
	import Aside from '$lib/Components/Aside.svelte';
	import { Genres } from '$lib/GenreData';
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
		/*  {
      id: '1',
      type: 'SuperNode',
      data: { label: 'Input' },
      position: { x: 0, y: 0 }
    },
    {
      id: '2',
      type: 'MidNode',
      data: { label: 'Node' },
      position: { x: 0, y: 150 }
    },
    {
      id: '3',
      type: 'SubNode',
      data: { label: 'Node' },
      position: { x: 0, y: 300 }
    },*/
		...newNodes
	]);
	// same for edges
	const edges = writable([
		/*{
      id: '1-2',
      type: 'default',
      source: '1',
      target: '2',
    },
    {
      id: '2-3',
      type: 'default',
      source: '2',
      target: '3',
      class: 'hardEdge',
    },
    {
      id: '1-3',
      type: 'default',
      source: '1',
      target: '3',
      class: 'hardEdge',
    },*/
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

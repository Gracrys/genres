<script lang="ts">
	import { writable } from 'svelte/store';
	import {
		SvelteFlow,
		SvelteFlowProvider,
		useSvelteFlow,
		Controls,
		Background,
		BackgroundVariant,
		MiniMap,
		Handle,
		Position,
		type Edge,
		type Node
	} from '@xyflow/svelte';
	import '@xyflow/svelte/dist/style.css';
	import SuperNode from '$lib/Components/Nodes/SuperNode.svelte';
	import SubNode from '$lib/Components/Nodes/SubNode.svelte';
	import SceneNode from '$lib/Components/Nodes/SceneNode.svelte';
	import TheorynFusion from '$lib/Components/Nodes/TheorynFusion.svelte';
	import MidNode from '$lib/Components/Nodes/MidNode.svelte';
	import { GenreMapper } from '$lib/Nodes-edges';
	import Aside from '$lib/Components/Aside.svelte';
	import { Genres } from '$lib/GenreData/GenreData';
	import Searcher from '$lib/Components/Searcher.svelte';
	import { nodes, edges } from '$lib/stores/stores.svelte';
	import Randomer from '$lib/Components/Randomer.svelte';
	let data = $state({});

	let isAsideOpen = $state(false);
	const closeAside = () => (isAsideOpen = false);
	const onNodeClick = (node: Node) => {
		data = node.data;
		isAsideOpen = true;
	};

	const nodeTypes = {
		SuperNode,
		MidNode,
		SubNode,
		SceneNode,
		TheorynFusion
	};

	const snapGrid: [number, number] = [25, 25];




</script>

<section class="flex bg-indigo-950">
	<main class="relative h-screen w-screen">
		<SvelteFlowProvider>
			<header
				class="absolute top-0 left-[calc(50%-200px)] z-50 m-auto mt-2 flex   rounded-2xl text-white align-top gap-2"
			>
			<div class="flex-col  overflow-auto max-w-[400px] min-w-[400px]">
				<Searcher bind:data bind:isAsideOpen />

			</div>
			<Randomer bind:data bind:isAsideOpen/>
			</header>

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
		</SvelteFlowProvider>
	</main>
	{#if isAsideOpen}
		<Aside {data} {closeAside} />
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

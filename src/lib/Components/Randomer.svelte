<script lang="ts">
	import { nodes } from "$lib/stores/stores.svelte";
	import { useSvelteFlow } from "@xyflow/svelte";
    	import random from '$lib/assets/music-random.svg';
	let { data = $bindable(), isAsideOpen = $bindable() } = $props();


	const svelteFlowTest = useSvelteFlow();
	const randomNodeFinder = () => {
		const node = $nodes[Math.floor(Math.random() * $nodes.length)];
        data = node.data;
        isAsideOpen = !!node.data;
				svelteFlowTest.setCenter(node.position.x, node.position.y);

	};

</script>
<button class="bg-indigo-600 hover:bg-indigo-600 rounded-md"><img class="w-7 p-1 cursor-pointer" src={random} alt="random" on:click={randomNodeFinder}></button>

<script lang="ts">
	import { nodes } from '$lib/stores/stores.svelte';
	import { type Node, useSvelteFlow } from '@xyflow/svelte';
	import { type INodeData } from '$lib/Nodes-edges';

	let { data = $bindable(), isAsideOpen = $bindable() } = $props();
	let search = $state('');

	const svelteFlowTest = useSvelteFlow();

	let result = $derived(
		search
			? $nodes.filter((n: Node) =>
					(n.data as unknown as INodeData).label.toLowerCase().includes(search.toLowerCase().trim())
				)
			: []
	);

	const focus = (node: Node) => {
		console.log(node.position);
		svelteFlowTest.setCenter(node.position.x, node.position.y);
		search = '';
		data = node.data;
		isAsideOpen = !!node.data;
	};
</script>

<header
	class="absolute top-0 left-[calc(50%-200px)] z-50 m-auto mt-2 flex max-w-[400px] min-w-[400px] flex-col overflow-auto rounded-2xl text-white"
>
	<input type="text" bind:value={search} class="bg-indigo-500 px-2 font-bold" />
	<div>
		<ul class="no-scrollbar max-h-40 overflow-y-auto bg-indigo-400" style="scrollbar-width: 0;">
			{#each result as res}
				<li class="cursor-pointertransition-all hover:bg-indigo-600">
					<button class="block w-full p-1" onclick={() => focus(res)}>{res.data.label} </button>
				</li>
				<hr />
			{/each}
		</ul>
	</div>
</header>

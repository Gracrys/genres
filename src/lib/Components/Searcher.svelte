<script lang="ts">
	import { nodes } from '$lib/stores/stores.svelte';
	import { type Node, useSvelteFlow } from '@xyflow/svelte';
	import { type INodeData } from '$lib/Nodes-edges';

	let { data = $bindable(), isAsideOpen = $bindable() } = $props();
	let search = $state('');


	let result = $derived(
		search
			? $nodes.filter((n: Node) =>
					(n.data as unknown as INodeData).label.toLowerCase().includes(search.toLowerCase().trim())
				)
			: []
	);
	const svelteFlowTest = useSvelteFlow();


	const focus = (node: Node) => {
		svelteFlowTest.setCenter(node.position.x, node.position.y);
		search = '';
		data = node.data;
		isAsideOpen = !!node.data;
	};
</script>


	<input type="text" bind:value={search} class="bg-indigo-500 px-2 font-bold rounded-md w-full" />
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

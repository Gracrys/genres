<script lang="ts">
	import { fly, fade } from "svelte/transition";
	import { type Node, useSvelteFlow } from '@xyflow/svelte';
	import { type INodeData } from '$lib/Nodes-edges';

    	import { nodes } from '$lib/stores/stores.svelte';

    let {data, closeAside} = $props()

    const stringify = (data:any) => {
        return JSON.stringify($nodes.find(x => x.id == data.id))}

   let childrens = $derived($nodes.filter((n: Node) =>
					(n.data as unknown as INodeData).hard.includes(data.id)
			)) 
</script>
<aside in:fly={{ x: 200 }} out:fly={{ x: 200 }} class="absolute w-[25vw] right-0 top-0 h-screen bg-indigo-950 min-w-[300px]">
<span class=" flex justify-end">
    <button class="rounded bg-red-600 text-white font-semibold p-2 py-1 shadow-none" onclick={closeAside}>
        Close X
    </button>
</span>
<section class="p-4  text-white h-[95%] flex flex-col">
    <h1 class=" font-semibold text-2xl">{data.label}</h1>
    <article>
        {data.desc}
    </article>
    <span>
<i>
    {data.dates}
</i>
    </span>
    <span>
        <b>
            Notable Artists
        </b>
        <br>
        {data.artists}
    </span>

    <footer class="mt-auto">
        {#if data.hard?.length}
        <span class="flex">
            <b class="mr-2">Influenced by: </b>
            <p> {data?.hard.join(', ')}</p>
        </span>
        {/if}
        {#if data.soft?.length}
        <span class="flex">
            <b class="mr-2">Other influences: </b>
            <p> {data?.soft.join(', ')}</p>
        </span>
        {/if}
         {#if childrens?.length}
        <span class="flex">
            <b class="mr-2">Children: </b>
            <p> {childrens.map(x => x.data.label).join(', ' )} </p>
        </span>
        {/if}
    </footer>
</section>
</aside>
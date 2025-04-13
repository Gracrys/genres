<script lang="ts">
	import { fly, fade } from "svelte/transition";

    let {data, closeAside} = $props()
   
</script>
<aside in:fly={{ x: 200 }} out:fly={{ x: 200 }} class="absolute w-[25vw] right-0 top-0 h-screen bg-indigo-950 min-w-[300px]">
<span class=" flex justify-end">
    <button class="rounded bg-red-600 text-white font-semibold p-2 py-1 shadow-none" onclick={closeAside}>
        Close X
    </button>
</span>
<section class="p-4  text-white">
    <h1 class=" font-semibold text-2xl">{data.label}</h1>
    <article>
        {data.desc}
    </article>
    <span>
        {data.notableBands}
    </span>
</section>
</aside>
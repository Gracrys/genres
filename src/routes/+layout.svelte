
<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	// @ts-ignore
	const appVersion = __APP_VERSION__;

	let { children } = $props();
</script>

{@render children()}
<sub class="absolute bottom-1 text-amber-50 z-50  text-xs">
	<a href="https://github.com/Gracrys/genres" class="block w-6" target="_blank">
		<img src="/github-mark-white.svg" alt="" class="w-full">
	</a>
	pre-alpha {appVersion} 
	<br>
	Made by hazy
	
</sub>

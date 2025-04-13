<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}
<sub class="absolute bottom-1 text-amber-50 z-50  text-xs">
	pre-alpha V - 0.0.1
	<br>
	Made by hazy
</sub>

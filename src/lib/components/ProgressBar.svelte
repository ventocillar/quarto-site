<script lang="ts">
	import { onMount } from 'svelte';

	let progress = $state(0);

	onMount(() => {
		function onScroll() {
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div
	class="fixed top-0 left-0 z-[100] h-0.5"
	style="width: {progress}%; background: var(--accent-primary); transition: width 50ms linear;"
></div>

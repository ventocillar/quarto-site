<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	let { children } = $props();
</script>

<ProgressBar />
<Navbar />

<main class="pt-16">
	{#key page.url.pathname}
		<div class="page-transition">
			{@render children()}
		</div>
	{/key}
</main>

<Footer />

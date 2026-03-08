<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import SubstackArticle from '$lib/components/SubstackArticle.svelte';
	import { siteData } from '$lib/data/site';
	import { Newspaper } from 'lucide-svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Writing &mdash; {siteData.name}</title>
	<meta name="description" content="{siteData.substackTagline}" />
</svelte:head>

<section class="px-6 pt-28 pb-20">
	<div class="mx-auto max-w-4xl">
		<ScrollReveal>
			<SectionHeading overline="Newsletter" title="Writing" />
			<p class="mb-4 -mt-4 max-w-2xl" style="color: var(--text-secondary);">
				{siteData.substackTagline}
			</p>
			<a
				href={siteData.social.substack}
				target="_blank"
				rel="noopener noreferrer"
				class="mb-10 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all"
				style="background: var(--accent-primary); color: var(--bg-page);"
			>
				<Newspaper size={16} />
				Subscribe on Substack
			</a>
		</ScrollReveal>

		{#if data.articles && data.articles.length > 0}
			<div class="mt-8 space-y-4">
				{#each data.articles as article, i}
					<ScrollReveal delay={i * 80}>
						<SubstackArticle {article} />
					</ScrollReveal>
				{/each}
			</div>
		{:else}
			<div class="py-16 text-center">
				<p style="color: var(--text-muted);">Articles are loading from Substack...</p>
				<a
					href={siteData.social.substack}
					target="_blank"
					rel="noopener noreferrer"
					class="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
					style="color: var(--accent-primary);"
				>
					Visit the newsletter directly
				</a>
			</div>
		{/if}
	</div>
</section>

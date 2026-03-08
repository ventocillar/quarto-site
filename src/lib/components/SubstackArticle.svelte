<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import type { SubstackPost } from '$lib/utils/substack';

	let { article }: { article: SubstackPost } = $props();

	let formattedDate = $derived(new Date(article.date).toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}));
</script>

<a
	href={article.link}
	target="_blank"
	rel="noopener noreferrer"
	class="card-hover group flex flex-col rounded-xl border p-6"
	style="background: var(--bg-card); border-color: var(--border-default);"
>
	<p class="mb-2 text-xs font-medium" style="color: var(--text-muted);">
		{formattedDate}
	</p>

	<h3 class="mb-2 text-lg font-semibold" style="font-family: var(--font-display);">
		<span class="inline-flex items-center gap-1">
			{article.title}
			<ArrowUpRight size={16} class="opacity-0 transition-opacity group-hover:opacity-100" style="color: var(--accent-primary);" />
		</span>
	</h3>

	{#if article.excerpt}
		<p class="text-sm leading-relaxed" style="color: var(--text-secondary);">
			{article.excerpt}
		</p>
	{/if}
</a>

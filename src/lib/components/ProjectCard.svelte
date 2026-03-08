<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<div
	class="card-hover glass flex flex-col rounded-2xl border p-6"
	style="background: var(--bg-card); border-color: var(--border-default);"
>
	<div class="mb-3 flex items-center justify-between">
		<span
			class="rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider"
			style="background: var(--bg-muted); color: var(--accent-secondary);"
		>
			{project.category}
		</span>
		{#if project.github}
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-1 text-xs transition-colors"
				style="color: var(--text-muted);"
				aria-label="View on GitHub"
			>
				<ExternalLink size={14} />
			</a>
		{/if}
	</div>

	<h3 class="mb-2 text-lg font-semibold" style="font-family: var(--font-display);">
		{project.title}
	</h3>

	<p class="mb-4 flex-1 text-sm leading-relaxed" style="color: var(--text-secondary);">
		{project.description}
	</p>

	<div class="flex flex-wrap gap-2">
		{#each project.tags as tag}
			<span
				class="rounded-full px-2.5 py-0.5 text-xs font-medium"
				style="background: var(--bg-muted); color: var(--text-muted);"
			>
				{tag}
			</span>
		{/each}
	</div>
</div>

<script lang="ts">
	import { BarChart3, Code, GraduationCap } from 'lucide-svelte';
	import type { MentoringArea } from '$lib/data/mentoring';

	let { area }: { area: MentoringArea } = $props();

	const icons: Record<string, typeof BarChart3> = { BarChart3, Code, GraduationCap };
	let Icon = $derived(icons[area.icon] ?? BarChart3);
</script>

<div
	class="card-hover rounded-2xl border-l-4 p-6"
	style="background: var(--bg-card); border-color: var(--accent-primary); border-right: 1px solid var(--border-default); border-top: 1px solid var(--border-default); border-bottom: 1px solid var(--border-default);"
>
	<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style="background: var(--bg-muted); color: var(--accent-primary);">
		<Icon size={20} />
	</div>

	<h3 class="mb-2 text-lg font-semibold" style="font-family: var(--font-display);">
		{area.title}
	</h3>

	<p class="mb-4 text-sm leading-relaxed" style="color: var(--text-secondary);">
		{area.description}
	</p>

	<ul class="space-y-1.5">
		{#each area.topics as topic}
			<li class="flex items-start gap-2 text-sm" style="color: var(--text-muted);">
				<span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style="background: var(--accent-secondary);"></span>
				{topic}
			</li>
		{/each}
	</ul>
</div>

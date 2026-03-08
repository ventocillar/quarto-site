<script lang="ts">
	import { BarChart3, Code, PieChart } from 'lucide-svelte';
	import type { SkillCategory } from '$lib/data/skills';

	let { skill }: { skill: SkillCategory } = $props();

	const icons: Record<string, typeof BarChart3> = { BarChart3, Code, PieChart };
	let Icon = $derived(icons[skill.icon] ?? BarChart3);
</script>

<div
	class="card-hover rounded-2xl border p-6"
	style="background: var(--bg-card); border-color: var(--border-default); border-top: 3px solid var(--accent-primary);"
>
	<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg" style="background: var(--bg-muted); color: var(--accent-primary);">
		<Icon size={20} />
	</div>
	<h3 class="mb-3 text-lg font-semibold" style="font-family: var(--font-display);">
		{skill.title}
	</h3>
	<div class="flex flex-wrap gap-2">
		{#each skill.skills as item}
			<span
				class="rounded-full px-3 py-1 text-xs font-medium"
				style="background: var(--bg-muted); color: var(--text-secondary);"
			>
				{item}
			</span>
		{/each}
	</div>
</div>

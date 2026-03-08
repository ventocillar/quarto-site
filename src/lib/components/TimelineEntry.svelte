<script lang="ts">
	import type { TimelineItem } from '$lib/data/experience';

	let { item, isLast = false }: { item: TimelineItem; isLast?: boolean } = $props();
</script>

<div class="relative flex gap-6 pb-10">
	<!-- Timeline line -->
	<div class="flex flex-col items-center">
		<div class="h-3 w-3 shrink-0 rounded-full" style="background: var(--accent-primary); margin-top: 0.375rem;"></div>
		{#if !isLast}
			<div class="w-px flex-1" style="background: var(--border-accent);"></div>
		{/if}
	</div>

	<!-- Content -->
	<div class="pb-2">
		<p class="mb-1 text-xs font-semibold uppercase tracking-wider" style="color: var(--accent-secondary);">
			{item.period}
		</p>
		<h3 class="text-lg font-semibold" style="font-family: var(--font-display);">
			{item.role}
		</h3>
		<p class="text-sm font-medium" style="color: var(--text-muted);">
			{item.organization}
		</p>
		<p class="mt-2 text-sm leading-relaxed" style="color: var(--text-secondary);">
			{item.description}
		</p>
	</div>
</div>

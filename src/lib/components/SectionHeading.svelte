<script lang="ts">
	let { overline = '', title }: { overline?: string; title: string } = $props();
</script>

<div class="mb-10">
	{#if overline}
		<p class="mb-2 text-xs font-semibold uppercase tracking-widest" style="color: var(--accent-secondary);">
			{overline}
		</p>
	{/if}
	<h2 class="text-2xl font-bold md:text-3xl" style="font-family: var(--font-display);">
		{title}
	</h2>
	<div class="mt-3 h-0.5 w-12" style="background: var(--accent-primary);"></div>
</div>

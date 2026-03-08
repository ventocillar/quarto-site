<script lang="ts">
	let { number, title, description }: { number: number; title: string; description: string } = $props();
</script>

<div class="flex gap-4">
	<div
		class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
		style="background: var(--accent-primary); color: var(--bg-page);"
	>
		{number}
	</div>
	<div>
		<h3 class="text-base font-semibold" style="font-family: var(--font-display);">
			{title}
		</h3>
		<p class="mt-1 text-sm leading-relaxed" style="color: var(--text-secondary);">
			{description}
		</p>
	</div>
</div>

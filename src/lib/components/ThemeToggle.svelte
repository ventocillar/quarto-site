<script lang="ts">
	import { themeStore } from '$lib/stores/theme.svelte';
	import { Sun, Moon } from 'lucide-svelte';
</script>

<button
	onclick={() => themeStore.toggle()}
	class="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors"
	style="color: var(--text-secondary); background: var(--bg-muted);"
	aria-label="Toggle theme"
>
	<span
		class="absolute transition-all duration-300"
		style="opacity: {themeStore.current === 'light' ? 1 : 0}; transform: rotate({themeStore.current === 'light' ? '0deg' : '180deg'})"
	>
		<Sun size={18} />
	</span>
	<span
		class="absolute transition-all duration-300"
		style="opacity: {themeStore.current === 'dark' ? 1 : 0}; transform: rotate({themeStore.current === 'dark' ? '0deg' : '-180deg'})"
	>
		<Moon size={18} />
	</span>
</button>

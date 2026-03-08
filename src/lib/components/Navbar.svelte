<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/projects', label: 'Projects' },
		{ href: '/mentoring', label: 'Mentoring' },
		{ href: '/writing', label: 'Writing' }
	];

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}

	onMount(() => {
		function onScroll() {
			scrolled = window.scrollY > 10;
		}
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
	style="
		background: {scrolled ? 'var(--bg-page)' : 'transparent'};
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid {scrolled ? 'var(--border-default)' : 'transparent'};
	"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6" style="height: var(--navbar-height);">
		<a href="/" class="text-lg font-bold tracking-tight" style="font-family: var(--font-display); color: var(--text-primary);">
			Renato<span style="color: var(--accent-primary);">.</span>
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 md:flex">
			{#each nav as { href, label }}
				<a
					{href}
					class="relative px-3 py-2 text-sm font-medium transition-colors"
					style="color: {isActive(href) ? 'var(--accent-primary)' : 'var(--text-secondary)'};"
					onclick={() => (mobileOpen = false)}
				>
					{label}
					{#if isActive(href)}
						<span
							class="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
							style="background: var(--accent-primary);"
						></span>
					{/if}
				</a>
			{/each}
			<div class="ml-2">
				<ThemeToggle />
			</div>
		</div>

		<!-- Mobile menu button -->
		<div class="flex items-center gap-2 md:hidden">
			<ThemeToggle />
			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="flex h-9 w-9 items-center justify-center rounded-full"
				style="color: var(--text-secondary); background: var(--bg-muted);"
				aria-label="Toggle menu"
			>
				{#if mobileOpen}
					<X size={18} />
				{:else}
					<Menu size={18} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile nav -->
	{#if mobileOpen}
		<div
			class="border-t px-6 py-4 md:hidden"
			style="background: var(--bg-page); border-color: var(--border-default);"
		>
			<div class="flex flex-col gap-1">
				{#each nav as { href, label }}
					<a
						{href}
						class="rounded-lg px-4 py-2.5 text-sm font-medium transition-colors"
						style="color: {isActive(href) ? 'var(--accent-primary)' : 'var(--text-secondary)'}; background: {isActive(href) ? 'var(--bg-muted)' : 'transparent'};"
						onclick={() => (mobileOpen = false)}
					>
						{label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<script lang="ts">
	import { Linkedin, Github, Newspaper, Mail } from 'lucide-svelte';
	import { siteData } from '$lib/data/site';

	let { variant = 'compact' }: { variant?: 'compact' | 'full' } = $props();

	const links = [
		{ href: siteData.social.linkedin, label: 'LinkedIn', icon: Linkedin },
		{ href: siteData.social.github, label: 'GitHub', icon: Github },
		{ href: siteData.social.substack, label: 'Substack', icon: Newspaper },
		{ href: `mailto:${siteData.email}`, label: 'Email', icon: Mail }
	];

	const size = variant === 'compact' ? 16 : 20;
	const btnSize = variant === 'compact' ? 'h-8 w-8' : 'h-10 w-10';
</script>

<div class="flex items-center gap-3">
	{#each links as link}
		<a
			href={link.href}
			target={link.href.startsWith('mailto:') ? undefined : '_blank'}
			rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
			aria-label={link.label}
			class="flex items-center justify-center rounded-full transition-colors {btnSize}"
			style="color: var(--text-muted); background: var(--bg-muted);"
		>
			<link.icon {size} />
		</a>
	{/each}
</div>

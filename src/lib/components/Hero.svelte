<script lang="ts">
	import { Linkedin, Github, Newspaper, Mail, ArrowRight } from 'lucide-svelte';
	import { siteData } from '$lib/data/site';

	let { heading, tagline }: { heading: string; tagline: string } = $props();
</script>

<section class="relative overflow-hidden px-6 py-24 md:py-32">
	<!-- Dot pattern background -->
	<div class="pointer-events-none absolute inset-0" style="
		background-image: radial-gradient(circle, var(--accent-tertiary) 1px, transparent 1px);
		background-size: 24px 24px;
		opacity: 0.03;
	"></div>

	<div class="relative mx-auto max-w-6xl">
		<div class="max-w-3xl">
			<h1
				class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
				style="font-family: var(--font-display); line-height: 1.1;"
			>
				{@html heading}
			</h1>

			<p class="mt-6 text-lg md:text-xl" style="color: var(--text-secondary); max-width: 38rem;">
				{tagline}
			</p>

			<div class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href="/projects"
					class="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
					style="background: var(--accent-primary); color: var(--bg-page);"
				>
					View Projects
					<ArrowRight size={16} />
				</a>
				<a
					href="/about"
					class="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all"
					style="border-color: var(--border-accent); color: var(--text-primary);"
				>
					About Me
				</a>
			</div>

			<!-- Social links row -->
			<div class="mt-8 flex items-center gap-3">
				<a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
					class="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-muted);"
				>
					<Linkedin size={16} />
				</a>
				<a href={siteData.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
					class="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-muted);"
				>
					<Github size={16} />
				</a>
				<a href={siteData.social.substack} target="_blank" rel="noopener noreferrer" aria-label="Substack"
					class="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-muted);"
				>
					<Newspaper size={16} />
				</a>
				<a href="mailto:{siteData.email}" aria-label="Email"
					class="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-muted);"
				>
					<Mail size={16} />
				</a>
			</div>
		</div>
	</div>
</section>

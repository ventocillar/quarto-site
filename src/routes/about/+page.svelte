<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import TimelineEntry from '$lib/components/TimelineEntry.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { siteData } from '$lib/data/site';
	import { experience } from '$lib/data/experience';
	import { skills } from '$lib/data/skills';
	import { Linkedin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About &mdash; {siteData.name}</title>
	<meta name="description" content="Learn more about {siteData.name}: background, experience, and skills." />
</svelte:head>

<!-- Page header -->
<section class="px-6 pt-24 pb-16">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<p class="mb-2 text-xs font-semibold uppercase tracking-widest" style="color: var(--accent-secondary);">
				About
			</p>
			<h1 class="text-3xl font-bold md:text-4xl" style="font-family: var(--font-display);">
				Hello, I'm Renato
			</h1>
			<div class="mt-3 h-0.5 w-12" style="background: var(--accent-primary);"></div>
		</ScrollReveal>
	</div>
</section>

<!-- Bio -->
<section class="px-6 pb-16">
	<div class="mx-auto max-w-3xl space-y-5 text-base leading-relaxed" style="color: var(--text-secondary);">
		<ScrollReveal>
			<p>
				I'm a social data scientist and visualization designer with a background in economics and journalism.
				I specialize in creating clear, insightful visualizations that tell compelling stories through data.
			</p>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<p>
				My interdisciplinary approach combines analytical rigor with effective communication skills
				to make complex data accessible and meaningful for diverse audiences. From econometric modelling
				to interactive dashboards, I bring a focus on clarity, reproducibility, and design.
			</p>
		</ScrollReveal>

		<ScrollReveal delay={200}>
			<p>
				Currently pursuing an MSc in Economics at the University of Bath, where my thesis explores
				ordoliberalism, institutional design, and political polarisation in the Eurozone sovereign debt crisis.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Career Timeline -->
<section class="px-6 py-16" style="background: var(--bg-muted);">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading overline="Journey" title="Career Timeline" />
		</ScrollReveal>

		<div class="mt-2">
			{#each experience as item, i}
				<ScrollReveal delay={i * 100}>
					<TimelineEntry {item} isLast={i === experience.length - 1} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Skills Summary -->
<section class="px-6 py-16">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading overline="Toolkit" title="Skills & Expertise" />
		</ScrollReveal>

		<div class="space-y-6">
			{#each skills as category, i}
				<ScrollReveal delay={i * 100}>
					<div>
						<h3 class="mb-2 text-sm font-semibold uppercase tracking-wider" style="color: var(--accent-primary);">
							{category.title}
						</h3>
						<div class="flex flex-wrap gap-2">
							{#each category.skills as skill}
								<span
									class="rounded-full px-3 py-1 text-sm"
									style="background: var(--bg-card); color: var(--text-secondary); border: 1px solid var(--border-default);"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Connect -->
<section class="px-6 py-16" style="background: var(--bg-muted);">
	<div class="mx-auto max-w-3xl text-center">
		<ScrollReveal>
			<SectionHeading overline="Connect" title="Let's Get in Touch" />
			<p class="mx-auto mb-8 max-w-lg -mt-4" style="color: var(--text-secondary);">
				The best way to reach me is through LinkedIn or email. I'm always happy to chat about data, economics, or potential collaborations.
			</p>
			<a
				href={siteData.social.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
				style="background: var(--accent-primary); color: var(--bg-page);"
			>
				<Linkedin size={16} />
				Connect on LinkedIn
			</a>
		</ScrollReveal>
	</div>
</section>

<ContactCTA />

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
<section class="px-6 pt-28 pb-10">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<!-- Profile photo -->
			<div class="mb-8 flex justify-center">
				<img
					src="/images/profile.svg"
					alt="Renato Ventocilla Franco"
					class="h-28 w-28 rounded-full object-cover ring-4"
					style="--tw-ring-color: var(--accent-tertiary); background: var(--bg-muted);"
				/>
			</div>
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
<section class="px-6 pb-20">
	<div class="mx-auto max-w-3xl space-y-6 text-base leading-relaxed" style="color: var(--text-secondary);">
		<ScrollReveal>
			<p>
				I've always been drawn to the space where numbers meet narrative. Trained first as a journalist
				and then as an economist, I learned early on that the most powerful insights are the ones people
				can actually understand — and that good design is what bridges that gap.
			</p>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<blockquote
				class="border-l-4 pl-5 italic"
				style="font-family: var(--font-display); color: var(--accent-primary); border-color: var(--accent-tertiary);"
			>
				"Data only matters when it changes how people see the world."
			</blockquote>
		</ScrollReveal>

		<ScrollReveal delay={200}>
			<p>
				Today I work as a social data scientist and visualization designer, building interactive
				dashboards and crafting visual stories that make complex information feel intuitive. Whether
				it's an econometric model or a D3-powered chart, I care about clarity, reproducibility,
				and the human context behind every dataset.
			</p>
		</ScrollReveal>

		<ScrollReveal delay={300}>
			<p>
				I'm currently finishing an MSc in Economics at the University of Bath, where my thesis
				investigates ordoliberalism, institutional design, and political polarisation during the
				Eurozone sovereign debt crisis — combining panel econometrics with the kind of historical
				storytelling that first drew me to this field.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- Career Timeline -->
<section class="px-6 py-20" style="background: var(--bg-muted);">
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
<section class="px-6 py-20">
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
<section class="px-6 py-20" style="background: var(--bg-muted);">
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
				class="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
				style="background: var(--accent-primary); color: var(--bg-page);"
			>
				<Linkedin size={16} />
				Connect on LinkedIn
			</a>
		</ScrollReveal>
	</div>
</section>

<ContactCTA />

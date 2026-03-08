<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import SkillCard from '$lib/components/SkillCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SubstackArticle from '$lib/components/SubstackArticle.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { skills } from '$lib/data/skills';
	import { projects } from '$lib/data/projects';
	import { siteData } from '$lib/data/site';
	import { ArrowRight } from 'lucide-svelte';

	let { data } = $props();

	const featuredProject = projects.find((p) => p.featured);
</script>

<svelte:head>
	<title>{siteData.name} &mdash; {siteData.title}</title>
	<meta name="description" content={siteData.description} />
</svelte:head>

<!-- Hero -->
<Hero
	heading="Data, design<br />& <span style='color: var(--accent-primary)'>storytelling</span>"
	tagline={siteData.description}
/>

<!-- Skills -->
<section class="px-6 py-20">
	<div class="mx-auto max-w-6xl">
		<ScrollReveal>
			<SectionHeading overline="Expertise" title="Skills & Tools" />
		</ScrollReveal>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each skills as skill, i}
				<ScrollReveal delay={i * 100}>
					<SkillCard {skill} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- Featured Project -->
{#if featuredProject}
	<section class="px-6 py-20" style="background: var(--bg-muted);">
		<div class="mx-auto max-w-6xl">
			<ScrollReveal>
				<SectionHeading overline="Featured" title="Latest Project" />
			</ScrollReveal>

			<ScrollReveal delay={100}>
				<ProjectCard project={featuredProject} />
			</ScrollReveal>

			<ScrollReveal delay={200}>
				<div class="mt-8 text-center">
					<a
						href="/projects"
						class="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
						style="color: var(--accent-primary);"
					>
						View all projects
						<ArrowRight size={16} />
					</a>
				</div>
			</ScrollReveal>
		</div>
	</section>
{/if}

<!-- Latest Substack Articles -->
{#if data.articles && data.articles.length > 0}
	<section class="px-6 py-20">
		<div class="mx-auto max-w-6xl">
			<ScrollReveal>
				<SectionHeading overline="Writing" title="Latest from Substack" />
				<p class="mb-8 -mt-6 text-sm" style="color: var(--text-muted);">
					{siteData.substackTagline}
				</p>
			</ScrollReveal>

			<div class="grid gap-8 md:grid-cols-3">
				{#each data.articles as article, i}
					<ScrollReveal delay={i * 100}>
						<SubstackArticle {article} />
					</ScrollReveal>
				{/each}
			</div>

			<ScrollReveal delay={300}>
				<div class="mt-8 text-center">
					<a
						href="/writing"
						class="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
						style="color: var(--accent-primary);"
					>
						See all articles
						<ArrowRight size={16} />
					</a>
				</div>
			</ScrollReveal>
		</div>
	</section>
{/if}

<!-- Contact CTA -->
<ContactCTA />

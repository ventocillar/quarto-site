<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { projects } from '$lib/data/projects';
	import { siteData } from '$lib/data/site';

	type Filter = 'all' | 'project' | 'experiment';
	let activeFilter = $state<Filter>('all');

	const filtered = $derived(
		activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)
	);

	const filters: { key: Filter; label: string }[] = [
		{ key: 'all', label: 'All' },
		{ key: 'project', label: 'Projects' },
		{ key: 'experiment', label: 'Experiments' }
	];
</script>

<svelte:head>
	<title>Projects &mdash; {siteData.name}</title>
	<meta name="description" content="Data science projects and experiments by {siteData.name}." />
</svelte:head>

<section class="px-6 pt-28 pb-20">
	<div class="mx-auto max-w-6xl">
		<ScrollReveal>
			<SectionHeading overline="Portfolio" title="Projects & Experiments" />
			<p class="mb-8 -mt-4 max-w-2xl" style="color: var(--text-secondary);">
				A collection of data-driven projects, interactive dashboards, and analytical experiments.
			</p>
		</ScrollReveal>

		<!-- Filter tabs -->
		<ScrollReveal delay={100}>
			<div class="mb-8 flex gap-2">
				{#each filters as filter}
					<button
						onclick={() => (activeFilter = filter.key)}
						class="rounded-full px-4 py-1.5 text-sm font-medium transition-all"
						style="
							background: {activeFilter === filter.key ? 'var(--accent-primary)' : 'var(--bg-card)'};
							color: {activeFilter === filter.key ? 'var(--bg-page)' : 'var(--text-secondary)'};
							border: 1px solid {activeFilter === filter.key ? 'var(--accent-primary)' : 'var(--border-default)'};
						"
					>
						{filter.label}
					</button>
				{/each}
			</div>
		</ScrollReveal>

		<!-- Project grid -->
		<div class="grid gap-8 md:grid-cols-2">
			{#each filtered as project, i (project.title)}
				<ScrollReveal delay={i * 100}>
					<ProjectCard {project} />
				</ScrollReveal>
			{/each}
		</div>

		{#if filtered.length === 0}
			<p class="py-12 text-center text-sm" style="color: var(--text-muted);">
				No projects in this category yet.
			</p>
		{/if}
	</div>
</section>

<ContactCTA />

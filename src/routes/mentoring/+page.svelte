<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import MentoringCard from '$lib/components/MentoringCard.svelte';
	import ProcessStep from '$lib/components/ProcessStep.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { mentoringAreas, processSteps } from '$lib/data/mentoring';
	import { siteData } from '$lib/data/site';
	import { Mail } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Mentoring &mdash; {siteData.name}</title>
	<meta name="description" content="Mentoring and office hours for data science, R/Python programming, and careers in economics." />
</svelte:head>

<section class="px-6 pt-28 pb-20">
	<div class="mx-auto max-w-6xl">
		<ScrollReveal>
			<SectionHeading overline="Mentoring" title="Learn & Grow Together" />
			<p class="mb-10 -mt-4 max-w-2xl" style="color: var(--text-secondary);">
				I offer one-on-one mentoring sessions for students, early-career professionals, and anyone looking to
				strengthen their data skills. Whether it's mastering R, building a portfolio, or navigating a career pivot,
				I'm here to help.
			</p>
		</ScrollReveal>

		<!-- Mentoring areas -->
		<div class="grid gap-8 md:grid-cols-3">
			{#each mentoringAreas as area, i}
				<ScrollReveal delay={i * 100}>
					<MentoringCard {area} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- How it works -->
<section class="px-6 py-20" style="background: var(--bg-muted);">
	<div class="mx-auto max-w-3xl">
		<ScrollReveal>
			<SectionHeading overline="Process" title="How It Works" />
		</ScrollReveal>

		<div class="space-y-8">
			{#each processSteps as step, i}
				<ScrollReveal delay={i * 100}>
					<ProcessStep number={step.number} title={step.title} description={step.description} />
				</ScrollReveal>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="px-6 py-20">
	<div class="mx-auto max-w-3xl text-center">
		<ScrollReveal>
			<h2 class="text-2xl font-bold md:text-3xl" style="font-family: var(--font-display);">
				Ready to get started?
			</h2>
			<p class="mx-auto mt-3 mb-8 max-w-lg" style="color: var(--text-secondary);">
				Reach out to book an introductory session. We'll discuss your goals and find the right approach for you.
			</p>
			<a
				href="mailto:{siteData.email}"
				class="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
				style="background: var(--accent-primary); color: var(--bg-page);"
			>
				<Mail size={16} />
				Book a Session
			</a>
		</ScrollReveal>
	</div>
</section>

<ContactCTA />

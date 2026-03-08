<script lang="ts">
	import { Mail, Linkedin } from 'lucide-svelte';
	import { siteData } from '$lib/data/site';
</script>

<section class="px-6 py-20">
	<div
		class="mx-auto max-w-3xl rounded-3xl border p-10 text-center md:p-14"
		style="background: var(--bg-card); border-color: var(--border-default);"
	>
		<h2 class="text-2xl font-bold md:text-3xl" style="font-family: var(--font-display);">
			Let's work together
		</h2>
		<p class="mx-auto mt-3 max-w-lg" style="color: var(--text-secondary);">
			Whether you have a project in mind, want to collaborate, or just want to connect — I'd love to hear from you.
		</p>
		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<a
				href="mailto:{siteData.email}"
				class="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
				style="background: var(--accent-primary); color: var(--bg-page);"
			>
				<Mail size={16} />
				Get in Touch
			</a>
			<a
				href={siteData.social.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold transition-all"
				style="border-color: var(--border-accent); color: var(--text-primary);"
			>
				<Linkedin size={16} />
				Connect on LinkedIn
			</a>
		</div>
	</div>
</section>

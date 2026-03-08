<script lang="ts">
	import { Linkedin, Github, Mail, Newspaper } from 'lucide-svelte';
	import { siteData } from '$lib/data/site';
</script>

<footer class="mt-24 border-t" style="border-color: var(--border-default); background: var(--bg-muted);">
	<div class="mx-auto max-w-6xl px-6 py-12">
		<div class="flex flex-col items-center gap-6 text-center">
			<!-- Social icons -->
			<div class="flex items-center gap-4">
				<a
					href={siteData.social.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-card);"
					aria-label="LinkedIn"
				>
					<Linkedin size={18} />
				</a>
				<a
					href={siteData.social.github}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-card);"
					aria-label="GitHub"
				>
					<Github size={18} />
				</a>
				<a
					href={siteData.social.substack}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-card);"
					aria-label="Substack"
				>
					<Newspaper size={18} />
				</a>
				<a
					href="mailto:{siteData.email}"
					class="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
					style="color: var(--text-muted); background: var(--bg-card);"
					aria-label="Email"
				>
					<Mail size={18} />
				</a>
			</div>

			<!-- Copyright & license -->
			<div class="space-y-1" style="color: var(--text-muted); font-size: var(--text-sm);">
				<p>&copy; 2026 {siteData.name}</p>
				<p>
					Licensed under
					<a
						href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
						target="_blank"
						rel="noopener noreferrer"
						class="underline underline-offset-2"
						style="color: var(--text-muted);"
					>
						CC BY-NC-SA 4.0
					</a>
				</p>
				<p style="color: var(--text-muted);">
					Built with <a href="https://svelte.dev/docs/kit" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2" style="color: var(--text-muted);">SvelteKit</a>
				</p>
			</div>
		</div>
	</div>
</footer>

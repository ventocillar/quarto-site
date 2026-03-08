import Parser from 'rss-parser';

export interface SubstackPost {
	title: string;
	date: string;
	excerpt: string;
	link: string;
	thumbnail?: string;
}

const parser = new Parser();

export async function fetchSubstackPosts(feedUrl: string, limit?: number): Promise<SubstackPost[]> {
	try {
		const feed = await parser.parseURL(feedUrl);

		const posts: SubstackPost[] = (feed.items ?? []).map((item) => {
			let excerpt = item.contentSnippet ?? item.content ?? '';
			// Trim excerpt to ~150 chars
			if (excerpt.length > 160) {
				excerpt = excerpt.slice(0, 157).replace(/\s+\S*$/, '') + '\u2026';
			}

			return {
				title: item.title ?? 'Untitled',
				date: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
				excerpt,
				link: item.link ?? '#',
				thumbnail: item.enclosure?.url
			};
		});

		return limit ? posts.slice(0, limit) : posts;
	} catch (err) {
		console.error('Failed to fetch Substack RSS:', err);
		return [];
	}
}

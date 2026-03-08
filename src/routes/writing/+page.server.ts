import { fetchSubstackPosts } from '$lib/utils/substack';
import { siteData } from '$lib/data/site';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const articles = await fetchSubstackPosts(siteData.substackFeed);
	return { articles };
};

export interface Project {
	title: string;
	description: string;
	tags: string[];
	category: 'project' | 'experiment';
	github?: string;
	live?: string;
	featured: boolean;
}

export const projects: Project[] = [
	{
		title: 'Eurozone Crisis Dashboard',
		description:
			'Interactive SvelteKit + D3 dashboard visualizing a quantitative analysis of the 2008\u20132015 Eurozone sovereign debt crisis across 9 countries and 32 quarters. The central finding: unemployment (+63.4 bps per 1%), not debt, dominated sovereign spread movements, and the ECB\u2019s OMT program cut spreads by 509 bps despite never being activated.',
		tags: ['SvelteKit', 'D3.js', 'Econometrics', 'R', 'Tailwind CSS'],
		category: 'project',
		github: 'https://github.com/ventocillar/eurozone-crisis-analysis',
		featured: true
	},
	{
		title: 'Eurozone Crisis R Pipeline',
		description:
			'Complete R econometric pipeline (5 scripts, 4 Quarto notebooks) for panel regression analysis of sovereign spreads. Includes two-way fixed effects, cluster-robust and Driscoll-Kraay standard errors, Granger causality, PCA, and 40+ statistical tests across 288 observations.',
		tags: ['R', 'Econometrics', 'Panel Data', 'Quarto'],
		category: 'project',
		github: 'https://github.com/ventocillar/eurozone-crisis-analysis',
		featured: false
	}
];

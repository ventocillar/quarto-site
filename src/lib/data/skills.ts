export interface SkillCategory {
	title: string;
	icon: string;
	skills: string[];
}

export const skills: SkillCategory[] = [
	{
		title: 'Data Analysis',
		icon: 'BarChart3',
		skills: ['Statistical Analysis', 'Econometrics', 'Time Series', 'Causal Inference', 'Panel Data']
	},
	{
		title: 'Programming',
		icon: 'Code',
		skills: ['R', 'Python', 'SQL', 'dbt', 'JavaScript', 'TypeScript', 'SvelteKit', 'Docker', 'Kubernetes']
	},
	{
		title: 'Visualization',
		icon: 'PieChart',
		skills: ['D3.js', 'ggplot2', 'Tableau', 'Interactive Dashboards', 'Quarto']
	}
];

export interface MentoringArea {
	title: string;
	icon: string;
	description: string;
	topics: string[];
}

export const mentoringAreas: MentoringArea[] = [
	{
		title: 'Data Science & Visualization',
		icon: 'BarChart3',
		description:
			'From crafting publication-quality visualizations to building interactive dashboards, I can help you communicate your data effectively.',
		topics: [
			'ggplot2 and D3.js',
			'Interactive dashboards (Shiny, SvelteKit)',
			'Data storytelling and presentation',
			'Statistical visualization best practices'
		]
	},
	{
		title: 'R & Python Programming',
		icon: 'Code',
		description:
			'Whether you\u2019re starting out or leveling up, I offer guidance on writing clean, reproducible analytical code.',
		topics: [
			'R tidyverse ecosystem',
			'Python data stack (pandas, scikit-learn)',
			'Reproducible research workflows',
			'Version control with Git'
		]
	},
	{
		title: 'Career in Economics & Data',
		icon: 'GraduationCap',
		description:
			'Navigate the intersection of economics, data science, and journalism with someone who\u2019s walked that path.',
		topics: [
			'Transitioning into data science',
			'Building a portfolio',
			'Academic to industry pathways',
			'Research methodology and design'
		]
	}
];

export const processSteps = [
	{
		number: 1,
		title: 'Reach Out',
		description: 'Send me a message describing what you\u2019d like to work on. We\u2019ll find a time for an introductory conversation.'
	},
	{
		number: 2,
		title: 'Introductory Chat',
		description: 'A relaxed first session where we discuss your goals, assess where you are, and outline a path forward.'
	},
	{
		number: 3,
		title: 'Ongoing Sessions',
		description: 'Regular sessions tailored to your pace and objectives. We\u2019ll track progress and adjust as needed.'
	}
];

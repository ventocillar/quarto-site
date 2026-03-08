export interface TimelineItem {
	period: string;
	role: string;
	organization: string;
	description: string;
}

export const experience: TimelineItem[] = [
	{
		period: '2024 \u2013 Present',
		role: 'MSc Economics',
		organization: 'University of Bath',
		description:
			'Pursuing a master\u2019s degree in economics with a focus on applied econometrics and quantitative methods. Thesis on ordoliberalism, institutional design, and political polarisation in the Eurozone crisis.'
	},
	{
		period: '2022 \u2013 2024',
		role: 'Data Analyst & Visualization Designer',
		organization: 'Freelance',
		description:
			'Delivered data visualization projects, interactive dashboards, and statistical analyses for clients across economics, policy, and journalism.'
	},
	{
		period: '2018 \u2013 2022',
		role: 'Economics & Journalism',
		organization: 'Peru',
		description:
			'Combined a background in economics with journalism, covering economic policy, public finance, and social data stories.'
	}
];

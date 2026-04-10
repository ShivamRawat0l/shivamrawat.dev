export type ProjectLink = {
	label: 'GitHub' | 'npm' | 'YouTube';
	url: string;
};

export type Experience = {
	company: string;
	role: string;
	duration: string;
	points: string[];
};

export type Project = {
	title: string;
	description: string;
	stack: string[];
	links?: ProjectLink[];
	image?: string;
};

export type Education = {
	level: string;
	school: string;
	score: string;
	year: string;
};

export type SocialLink = {
	label: string;
	url: string;
};

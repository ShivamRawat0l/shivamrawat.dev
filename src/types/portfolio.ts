export type ProjectLink = {
    label: 'GitHub' | 'npm' | 'YouTube' | 'Website';
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
    /** Resume-style bullets (shown for professional projects on the site). */
    points?: string[];
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

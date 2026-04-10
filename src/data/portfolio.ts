import type { Education, Experience, Project, SocialLink } from '../types/portfolio';

export const socialLinks: SocialLink[] = [
	{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/' },
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivam-rawat-b58975173/' },
	{ label: 'Medium', url: 'https://medium.com/@shivamrawat_756' },
	{ label: 'Email', url: 'mailto:shivamrawat2806@gmail.com' },
];

export const experiences: Experience[] = [
	{
		company: 'Mutual Mobile (Remote)',
		role: 'React Native / iOS Engineer',
		duration: 'Dec 2021 - Current',
		points: ['Led product features in React Native and iOS.', 'Built real-time messaging/video features with Twilio and Agora.'],
	},
	{
		company: 'Mutual Mobile (Remote)',
		role: 'Intern',
		duration: 'Aug 2021 - Nov 2021',
		points: ['Delivered production-ready features with QA collaboration.', 'Improved app quality with design + engineering sync.'],
	},
	{
		company: 'Scalability Engineer',
		role: 'Intern',
		duration: 'Jan 2021 - Apr 2021',
		points: ['Supported scalability-focused engineering tasks.', 'Contributed to sprint delivery and effort estimation.'],
	},
];

export const professionalProjects: Project[] = [
	{
		title: 'Experian iOS App',
		description: 'Developed server-driven UI screens and SSE pipelines for dynamic payment flows.',
		stack: ['Swift', 'GraphQL', 'SSE', 'UIKit'],
	},
	{
		title: 'Mars iOS Framework',
		description: 'Built and distributed an .xcframework for ML pet health workflows with 90% coverage.',
		stack: ['Swift', 'GraphQL', 'Testing'],
	},
	{
		title: 'CSC iOS App',
		description: 'Modernized a parenting app from UIKit to SwiftUI with clean architecture and concurrency.',
		stack: ['SwiftUI', 'UIKit', 'iOS'],
	},
	{
		title: 'Mint Dentistry App',
		description: 'Shipped React Native healthcare features with location services and production QA workflows.',
		stack: ['React Native', 'Maps', 'Notifications'],
	},
	{
		title: 'Ibble Social Media App',
		description: 'Extended social messaging with Twilio chat, read receipts, sharing flow, and Agora video calling.',
		stack: ['React Native', 'Twilio', 'Socket.IO'],
	},
	{
		title: 'Delivery App',
		description: 'Revamped delivery platform UI and shipped a reusable native bridge library published to npm.',
		stack: ['React Native', 'npm', 'Kotlin', 'Swift'],
	},
	{
		title: 'Server-Driven Survey Platform',
		description: 'Designed dynamic survey/question flow and custom GraphQL client architecture for smaller framework size.',
		stack: ['Swift', 'GraphQL', 'Testing'],
	},
];

export const personalProjects: Project[] = [
	{
		title: 'Annotate',
		description: 'A canvas-based React.js notes app in progress, focused on fast note capture and fluid UX.',
		stack: ['React.js', 'Canvas API', 'UI Design'],
		links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/Annotate' }],
	},
	{
		title: 'Native Menu',
		description: 'A React Native library bridging native menu components from UIKit and Kotlin.',
		stack: ['React Native', 'Swift', 'Kotlin', 'npm'],
		links: [
			{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+native+menu&type=repositories' },
			{ label: 'npm', url: 'https://www.npmjs.com/package/@rn-elementary/menu' },
		],
	},
	{
		title: 'Speed Reader',
		description: 'A React Native ebook reading experience optimized for speed-focused reading.',
		stack: ['React Native', 'Mobile UX'],
		links: [
			{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+speed+reader&type=repositories' },
			{ label: 'YouTube', url: 'https://www.youtube.com/results?search_query=Shivam+Rawat+speed+reader+react+native' },
		],
	},
	{
		title: 'Presence System',
		description: 'Socket-based real-time presence system inspired by collaborative editors.',
		stack: ['JavaScript', 'Socket.IO'],
		links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+presence+system&type=repositories' }],
	},
	{
		title: 'Loaders',
		description: 'A React Native loader animation library focused on reusable micro-interactions.',
		stack: ['React Native', 'npm', 'UI Design'],
		links: [
			{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+loaders+react+native&type=repositories' },
			{ label: 'npm', url: 'https://www.npmjs.com/search?q=shivam%20rawat%20react%20native%20loader' },
		],
	},
	{
		title: 'Instagram Clone',
		description: 'A SwiftUI implementation of Instagram-style social feed and interaction flows.',
		stack: ['SwiftUI', 'Swift', 'GitHub'],
		links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+instagram+clone+swiftui&type=repositories' }],
	},
	{
		title: 'Cheat Sheet',
		description: 'A web app to store and retrieve code syntax snippets for quick developer recall.',
		stack: ['React.js', 'JavaScript', 'Firebase'],
		links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+cheat+sheet&type=repositories' }],
	},
	{
		title: 'Stremio P2P',
		description: 'A Stremio add-on to host and stream videos through peer-to-peer architecture.',
		stack: ['JavaScript', 'Node.js', 'GitHub'],
		links: [{ label: 'GitHub', url: 'https://github.com/ShivamRawat0l/StremioP2P' }],
	},
	{
		title: 'RXDB Appwrite React Demo',
		description: 'An in-progress React project exploring local-first syncing patterns with Appwrite.',
		stack: ['React.js', 'TypeScript', 'UI Design'],
		links: [{ label: 'GitHub', url: 'https://github.com/search?q=ShivamRawat0l+rxdb+appwrite+react&type=repositories' }],
	},
];

export const education: Education[] = [
	{ level: 'B.Tech', school: 'DIT University', score: '8.0 CGPA', year: '2021' },
	{ level: 'Class XII', school: 'Kendriya Vidyalaya No.2, Dehradun', score: '95%', year: '2017' },
	{ level: 'Class X', school: 'Kendriya Vidyalaya No.2, Dehradun', score: '9.4 CGPA', year: '2015' },
];

export const skills = ['JavaScript', 'TypeScript', 'React Native', 'React.js', 'Swift', 'Node.js', 'GraphQL', 'Twilio', 'Socket.IO', 'Xcode'];

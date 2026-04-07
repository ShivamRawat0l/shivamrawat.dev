import { motion } from 'motion/react';
import './App.css';

type Experience = {
	company: string;
	role: string;
	duration: string;
	highlights: string[];
};

type Project = {
	name: string;
	description: string;
	highlights: string[];
	stack: string[];
};

const experiences: Experience[] = [
	{
		company: 'Scalability Engineer',
		role: 'Intern',
		duration: 'Jan 2021 - Apr 2021',
		highlights: ['Worked on engineering tasks focused on scalable app foundations.'],
	},
	{
		company: 'Mutual Mobile (Remote)',
		role: 'Intern',
		duration: 'Aug 2021 - Nov 2021',
		highlights: ['Contributed to mobile product work and shipped customer-facing improvements.'],
	},
	{
		company: 'Mutual Mobile (Remote)',
		role: 'React Native / iOS Engineer',
		duration: 'Dec 2021 - Present',
		highlights: [
			'Built and maintained production mobile apps for multiple domains.',
			'Collaborated across design, QA, and product to deliver reliable features.',
			'Improved architecture, performance, and code quality in legacy and modern codebases.',
		],
	},
];

const flagshipProjects: Project[] = [
	{
		name: 'Payment App',
		description: 'Built server-driven screens with real-time updates for a payment product.',
		highlights: [
			'Refactored legacy architecture to support server-driven UI.',
			'Implemented SSE handling for real-time data streaming.',
			'Used GraphQL to fetch and manage dynamic UI content.',
		],
		stack: ['React Native', 'GraphQL', 'SSE', 'Server-Driven UI'],
	},
	{
		name: 'Survey Framework',
		description: 'Created an iOS framework for ML-powered pet health surveys.',
		highlights: [
			'Packaged and distributed an .xcframework across repositories.',
			'Achieved 90% code coverage with unit tests.',
			'Built a custom GraphQL client without third-party dependencies.',
		],
		stack: ['Swift', 'iOS', 'GraphQL', 'XCFramework'],
	},
	{
		name: 'Parenting App',
		description: 'Modernized a UIKit app with updated UX and architecture.',
		highlights: [
			'Led migration from UIKit to SwiftUI with modern concurrency.',
			'Built bridge components to cover SwiftUI limitations.',
			'Worked with design early to de-risk implementation constraints.',
		],
		stack: ['SwiftUI', 'UIKit', 'iOS Concurrency'],
	},
	{
		name: 'Dentistry App',
		description: 'Enhanced a dental care app for clinics and patients.',
		highlights: [
			'Integrated Urban Airship push notifications.',
			'Built map and location-based functionality.',
			'Implemented background geolocation and fluid UI animations.',
		],
		stack: ['React Native', 'Maps', 'Push Notifications', 'Geolocation'],
	},
	{
		name: 'Social Platform App',
		description: 'Expanded messaging and communication features for a US market app.',
		highlights: [
			'Integrated Twilio direct messaging.',
			'Added share feature and read receipts in chat flow.',
			'Built video calling with Agora SDK.',
		],
		stack: ['React Native', 'Twilio', 'Agora'],
	},
	{
		name: 'Delivery App',
		description: 'Revamped a delivery platform aligned with a new design system.',
		highlights: [
			'Created and published a cross-platform native npm library.',
			'Built a performant reusable bottom sheet component.',
		],
		stack: ['React Native', 'iOS', 'Android', 'npm'],
	},
];

const personalProjects = [
	'Annotate (Web canvas based notes app in progress)',
	'Native Menu (RN native bridge library for UIKit/Kotlin)',
	'Speed Reader (React Native ebook reader)',
	'Loaders (React Native animation library)',
	'Instagram Clone (SwiftUI)',
	'Presence System (Socket.IO based real-time presence)',
	'Cheat Sheet (React.js + Firebase syntax saver)',
	'Stremio P2P Add-on',
];

const skillGroups = [
	{
		title: 'Core Languages',
		skills: ['JavaScript', 'TypeScript', 'Node.js', 'Swift'],
	},
	{
		title: 'Mobile & Web',
		skills: ['React Native', 'React.js', 'SwiftUI', 'UIKit', 'Server-Driven UI'],
	},
	{
		title: 'Realtime & Integrations',
		skills: ['GraphQL', 'SSE', 'Socket.IO', 'Twilio', 'Agora', 'Urban Airship'],
	},
	{
		title: 'Tooling',
		skills: ['Git', 'GitHub', 'Jira', 'Xcode', 'VSCode', 'Neovim', 'npm'],
	},
	{
		title: 'AI Assisted Development',
		skills: ['Cursor', 'GitHub Copilot'],
	},
];

const education = [
	'B.Tech, DIT University (2021) - 8.0 CGPA',
	'Class XII, CBSE - 95% (2017)',
	'Class X, CBSE - 9.4 CGPA (2015)',
];

function App() {
	return (
		<div className="portfolio-page">
			<div className="background-glow bg-one" />
			<div className="background-glow bg-two" />

			<header className="container hero">
				<motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="intro-line">
					Hello, I am
				</motion.p>
				<motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7 }}>
					Shivam Rawat
				</motion.h1>
				<motion.h2 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7 }}>
					React Native & iOS Engineer
				</motion.h2>
				<motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.75 }} className="hero-copy">
					I build reliable, high-quality mobile experiences using React Native, Swift, and modern UI architecture patterns.
					I focus on performance, real-time features, and polished product experiences.
				</motion.p>
				<motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32, duration: 0.75 }} className="cta-row">
					<a href="#projects" className="btn btn-primary">
						View Projects
					</a>
					<a href="mailto:shivamrawat2806@gmail.com" className="btn btn-secondary">
						Contact Me
					</a>
				</motion.div>
				<motion.div
					className="social-links"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.75 }}>
					<a href="https://github.com/ShivamRawat0l/" target="_blank" rel="noreferrer">
						GitHub
					</a>
					<a href="https://www.linkedin.com/in/shivam-rawat-b58975173/" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
				</motion.div>
			</header>

			<main className="container section-stack">
				<section id="experience">
					<motion.h3 initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
						Experience
					</motion.h3>
					<div className="card-grid single-column">
						{experiences.map((item, index) => (
							<motion.article
								key={`${item.company}-${item.role}`}
								className="glass-card"
								initial={{ opacity: 0, y: 28 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ delay: index * 0.08, duration: 0.5 }}>
								<div className="card-header">
									<div>
										<h4>{item.role}</h4>
										<p className="card-subtitle">{item.company}</p>
									</div>
									<span>{item.duration}</span>
								</div>
								<ul>
									{item.highlights.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</motion.article>
						))}
					</div>
				</section>

				<section id="projects">
					<motion.h3 initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
						Flagship Projects
					</motion.h3>
					<div className="card-grid two-column">
						{flagshipProjects.map((project, index) => (
							<motion.article
								key={project.name}
								className="glass-card"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.22 }}
								transition={{ delay: index * 0.05, duration: 0.5 }}>
								<h4>{project.name}</h4>
								<p className="project-description">{project.description}</p>
								<ul>
									{project.highlights.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
								<div className="tag-list">
									{project.stack.map((tag) => (
										<span key={tag} className="tag">
											{tag}
										</span>
									))}
								</div>
							</motion.article>
						))}
					</div>
				</section>

				<section id="skills">
					<motion.h3 initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
						Skills
					</motion.h3>
					<div className="card-grid two-column">
						{skillGroups.map((group, index) => (
							<motion.article
								key={group.title}
								className="glass-card"
								initial={{ opacity: 0, y: 26 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.25 }}
								transition={{ delay: index * 0.06, duration: 0.5 }}>
								<h4>{group.title}</h4>
								<div className="tag-list">
									{group.skills.map((skill) => (
										<span key={skill} className="tag">
											{skill}
										</span>
									))}
								</div>
							</motion.article>
						))}
					</div>
				</section>

				<section id="personal-projects">
					<motion.h3 initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
						Personal Projects
					</motion.h3>
					<motion.article
						className="glass-card"
						initial={{ opacity: 0, y: 26 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.5 }}>
						<ul className="compact-list">
							{personalProjects.map((project) => (
								<li key={project}>{project}</li>
							))}
						</ul>
					</motion.article>
				</section>

				<section id="education">
					<motion.h3 initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
						Education
					</motion.h3>
					<motion.article
						className="glass-card"
						initial={{ opacity: 0, y: 26 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.5 }}>
						<ul className="compact-list">
							{education.map((record) => (
								<li key={record}>{record}</li>
							))}
						</ul>
					</motion.article>
				</section>
			</main>

			<footer className="container footer">
				<p>Dehradun, India</p>
				<p>
					<a href="mailto:shivamrawat2806@gmail.com">shivamrawat2806@gmail.com</a> ·{' '}
					<a href="tel:+918979290927">+91 8979290927</a>
				</p>
			</footer>
		</div>
	);
}

export default App;

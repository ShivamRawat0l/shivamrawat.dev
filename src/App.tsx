import { motion, useScroll, useSpring } from 'motion/react';
import { blogPosts, education, experiences, personalProjects, professionalProjects, profile, skills, socialLinks } from './data/portfolio';
import { Nav } from './components/layout/Nav';
import { BlogSection } from './components/sections/BlogSection';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { HeroSection } from './components/sections/HeroSection';
import { PersonalProjectsSection } from './components/sections/PersonalProjectsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsStrip } from './components/sections/SkillsStrip';

const mediumUrl = socialLinks.find((link) => link.label === 'Medium')?.url;

export function App() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 });

	return (
		<div className="app-shell">
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
			<Nav />
			<main id="main">
				<HeroSection links={socialLinks} />
				<SkillsStrip skills={skills} />
				<ExperienceSection items={experiences} />
				<ProjectsSection items={professionalProjects} />
				<PersonalProjectsSection items={personalProjects} />
				<BlogSection posts={blogPosts} archiveUrl={mediumUrl} />
				<EducationSection items={education} />
			</main>
			<footer className="site-footer container">
				<span>
					© {new Date().getFullYear()} {profile.name}
				</span>
				<span>Built with React, TypeScript and Motion.</span>
			</footer>
		</div>
	);
}

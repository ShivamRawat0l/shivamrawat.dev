import { motion, useScroll, useSpring } from 'motion/react';
import { education, experiences, personalProjects, professionalProjects, skills, socialLinks } from './data/portfolio';
import { EducationSection } from './components/sections/EducationSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FooterSection } from './components/sections/FooterSection';
import { HeroSection } from './components/sections/HeroSection';
import { PersonalProjectsSection } from './components/sections/PersonalProjectsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';

export function App() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

	return (
		<div className="app-shell">
			<motion.div className="scroll-progress" style={{ scaleX: progress }} />
			<main className="container">
				<HeroSection links={socialLinks} />
				<ExperienceSection items={experiences} />
				<ProjectsSection items={professionalProjects} />
				<PersonalProjectsSection items={personalProjects} />
				<SkillsSection items={skills} />
				<EducationSection items={education} />
				<FooterSection />
			</main>
		</div>
	);
}

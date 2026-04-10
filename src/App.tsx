import { motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';
import { education, experiences, personalProjects, professionalProjects, skills, socialLinks } from './data/portfolio';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { FooterSection } from './components/sections/FooterSection';
import { HeroSection } from './components/sections/HeroSection';
import { PersonalProjectsSection } from './components/sections/PersonalProjectsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TopSkillsMarquee } from './components/sections/TopSkillsMarquee';
import { useRepelCards } from './hooks/useRepelCards';
import { useSectionSnap } from './hooks/useSectionSnap';

export function App() {
	const { scrollY, scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
	const [showScrollTop, setShowScrollTop] = useState(false);
	useRepelCards();
	useSectionSnap();
	useMotionValueEvent(scrollY, 'change', (value) => {
		setShowScrollTop(value > 120);
	});

	return (
		<div className="app-shell">
			<motion.div className="scroll-progress" style={{ scaleX: progress }} />
			<TopSkillsMarquee skills={skills} />
			<main className="container">
				<div className="page-section">
					<HeroSection links={socialLinks} />
				</div>
				<div className="page-section">
					<ExperienceSection items={experiences} />
				</div>
				<div className="page-section">
					<ProjectsSection items={professionalProjects} />
				</div>
				<div className="page-section personal-scroll-stage">
					<PersonalProjectsSection items={personalProjects} />
				</div>
				<div className="page-section">
					<FooterSection records={education} />
				</div>
			</main>
			<motion.button
				type="button"
				className="scroll-top-btn"
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				style={{ pointerEvents: showScrollTop ? 'auto' : 'none' }}
				initial={{ opacity: 0, y: 12 }}
				animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 12 }}
				transition={{ duration: 0.2 }}>
				Back to top
			</motion.button>
		</div>
	);
}

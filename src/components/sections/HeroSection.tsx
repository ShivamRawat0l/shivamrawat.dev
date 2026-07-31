import { motion } from 'motion/react';
import { FaArrowRight, FaBriefcase, FaDownload, FaMapMarkerAlt, FaMobileAlt } from 'react-icons/fa';
import { profile, yearsOfExperience } from '../../data/portfolio';
import type { SocialLink } from '../../types/portfolio';
import { SocialLinks } from './SocialLinks';

type HeroSectionProps = {
	links: SocialLink[];
};

const fadeUp = {
	initial: { opacity: 0, y: 12 },
	animate: { opacity: 1, y: 0 },
};

export function HeroSection({ links }: HeroSectionProps) {
	return (
		<header className="hero container" id="top">
			<div className="hero-content">
				<motion.span className="hero-status" {...fadeUp} transition={{ duration: 0.4 }}>
					<span className="status-dot" aria-hidden="true" />
					{profile.availability}
				</motion.span>

				<motion.h1 className="hero-name" {...fadeUp} transition={{ duration: 0.45, delay: 0.05 }}>
					{profile.name}
				</motion.h1>

				<motion.p className="hero-role" {...fadeUp} transition={{ duration: 0.45, delay: 0.1 }}>
					React Native <em>&</em> iOS Engineer
				</motion.p>

				<motion.p className="hero-copy" {...fadeUp} transition={{ duration: 0.45, delay: 0.15 }}>
					{profile.summary}
				</motion.p>

				<motion.ul className="hero-facts" {...fadeUp} transition={{ duration: 0.45, delay: 0.18 }}>
					<li>
						<FaBriefcase aria-hidden="true" />
						{yearsOfExperience}+ years
					</li>
					<li>
						<FaMapMarkerAlt aria-hidden="true" />
						{profile.location}
					</li>
					<li>
						<FaMobileAlt aria-hidden="true" />
						iOS · Android · Web
					</li>
				</motion.ul>

				<motion.div className="hero-actions" {...fadeUp} transition={{ duration: 0.45, delay: 0.2 }}>
					<a className="btn btn--primary" href={`mailto:${profile.email}`}>
						Get in touch
						<FaArrowRight aria-hidden="true" />
					</a>
					<a className="btn" href={profile.resume} download="Shivam-Rawat-Resume.pdf">
						<FaDownload aria-hidden="true" />
						Resume
					</a>
					<SocialLinks links={links} />
				</motion.div>
			</div>

			<motion.div
				className="hero-portrait"
				initial={{ opacity: 0, scale: 0.96 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5, delay: 0.1 }}>
				<img src="profile.webp" alt={profile.name} width={416} height={416} />
			</motion.div>
		</header>
	);
}

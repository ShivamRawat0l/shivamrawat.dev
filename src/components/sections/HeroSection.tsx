import { useState, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { useCountUp } from '../../hooks/useCountUp';
import { FaBriefcase, FaDownload, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import type { SocialLink } from '../../types/portfolio';
import { SocialLinks } from './SocialLinks';

type HeroSectionProps = {
	links: SocialLink[];
};

export function HeroSection({ links }: HeroSectionProps) {
	const years = useCountUp(4, 1400);
	const [repel, setRepel] = useState({ x: 0, y: 0, rx: 0, ry: 0 });

	const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;
		const dx = centerX - event.clientX;
		const dy = centerY - event.clientY;
		const distance = Math.hypot(dx, dy);
		const radius = 220;
		if (distance >= radius) {
			setRepel({ x: 0, y: 0, rx: 0, ry: 0 });
			return;
		}
		const strength = ((radius - distance) / radius) * 16;
		const safe = Math.max(distance, 0.01);
		const x = (dx / safe) * strength;
		const y = (dy / safe) * strength;
		const rx = (dy / safe) * 7;
		const ry = (-dx / safe) * 9;
		setRepel({ x, y, rx, ry });
	};

	return (
		<header className="hero hero-screen">
			<div className="hero-content">
				<div className="hero-meta">
					<span className="meta-item">
						<FaBriefcase />
						<span>Experience {years}+ years</span>
					</span>
					<span className="meta-item">
						<FaMapMarkerAlt />
						<span>Dehradun, India</span>
					</span>
					<a className="chip-link" href="/Resume.pdf" download="Shivam-Rawat-Resume.pdf">
						<FaDownload />
						<span>Resume</span>
					</a>
				</div>
				<motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="hero-name">
					Shivam Rawat
				</motion.h1>
				<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="hero-copy">
					◆ React Native & iOS Engineer building reliable, scalable mobile products with clean architecture and strong UX.
				</motion.p>
				<SocialLinks links={links} />
			</div>
			<motion.aside
				className="hero-aside"
				initial={{ opacity: 0, x: 24 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
				onMouseMove={handleMouseMove}
				onMouseLeave={() => setRepel({ x: 0, y: 0, rx: 0, ry: 0 })}>
				<div className="hero-image-plate">
					<div className="hero-image-stack">
						<motion.div
							className="hero-image-motion"
							style={{ transformPerspective: 900 }}
							animate={{ x: repel.x, y: repel.y, rotateX: repel.rx, rotateY: repel.ry }}
							transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
							<img
								className="hero-image"
								src="/profile.webp"
								alt="Shivam Rawat"
							/>
						</motion.div>
						<motion.div
							className="hero-image-corners"
							aria-hidden
							style={{ transformPerspective: 900 }}
							animate={{
								x: -repel.x,
								y: -repel.y,
								rotateX: -repel.rx,
								rotateY: -repel.ry,
							}}
							transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
							<span className="hero-corner hero-corner--tl" />
							<span className="hero-corner hero-corner--tr" />
							<span className="hero-corner hero-corner--bl" />
							<span className="hero-corner hero-corner--br" />
						</motion.div>
					</div>
				</div>
				<a className="chip-link" href="https://github.com/ShivamRawat0l/" target="_blank" rel="noreferrer">
					<FaGithub />
					<span>◆ github.com/ShivamRawat0l</span>
				</a>
			</motion.aside>
		</header>
	);
}

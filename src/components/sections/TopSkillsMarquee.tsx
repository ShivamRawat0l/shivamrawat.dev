import { useReducedMotion } from 'motion/react';

type TopSkillsMarqueeProps = {
	skills: string[];
};

export function TopSkillsMarquee({ skills }: TopSkillsMarqueeProps) {
	const reduceMotion = useReducedMotion();
	const loop = reduceMotion ? skills : [...skills, ...skills, ...skills];
	return (
		<div
			className={`top-skills-marquee${reduceMotion ? ' top-skills-marquee--static' : ''}`}
			aria-label="Core skills">
			<div className="skills-marquee-track">
				{loop.map((skill, index) => (
					<span key={`${skill}-${index}`} className="marquee-item">
						◆ {skill}
					</span>
				))}
			</div>
		</div>
	);
}

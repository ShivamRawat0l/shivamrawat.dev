import { useReducedMotion } from 'motion/react';
import { getTechIcon } from '../../utils/techIcons';

type SkillsStripProps = {
	skills: string[];
};

export function SkillsStrip({ skills }: SkillsStripProps) {
	const reduceMotion = useReducedMotion();
	// Three copies keep the -33% keyframe seamless; static layout needs only one.
	const loop = reduceMotion ? skills : [...skills, ...skills, ...skills];

	return (
		<div className="skills-strip container" aria-label="Core skills">
			<ul className="skills-track">
				{loop.map((skill, index) => {
					const Icon = getTechIcon(skill);
					return (
						<li key={`${skill}-${index}`} aria-hidden={index >= skills.length}>
							<Icon aria-hidden="true" />
							{skill}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import { getTechIcon } from '../../utils/techIcons';

type SkillsSectionProps = {
	items: string[];
};

export function SkillsSection({ items }: SkillsSectionProps) {
	return (
		<Section id="skills" title="Skills" subtitle="Focused toolkit for product quality, scale, and developer velocity.">
			<motion.div className="tags skills-list" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
				{items.map((skill, index) => {
					const Icon = getTechIcon(skill);
					return (
						<motion.span
							key={skill}
							className="tag"
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.03 }}>
							<Icon aria-hidden="true" />
							<span>{skill}</span>
						</motion.span>
					);
				})}
			</motion.div>
		</Section>
	);
}

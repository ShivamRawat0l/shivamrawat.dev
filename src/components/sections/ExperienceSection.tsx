import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import type { Experience } from '../../types/portfolio';

type ExperienceSectionProps = {
	items: Experience[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
	return (
		<Section id="experience" title="Experience" subtitle="Senior-level delivery across internships and full-time ownership.">
			<div className="stack-grid">
				{items.map((item, index) => (
					<motion.article
						className="experience-item"
						key={`${item.company}-${item.role}`}
						initial={{ opacity: 0, y: 28 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ delay: index * 0.08 }}>
						<div className="row-between">
							<h3 className="experience-role">{item.role}</h3>
							<span className="pill">◆ {item.duration}</span>
						</div>
						<p className="experience-company">{item.company}</p>
						<ul className="symbol-list">
							{item.points.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</motion.article>
				))}
			</div>
		</Section>
	);
}

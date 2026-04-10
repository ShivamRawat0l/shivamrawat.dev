import { useState } from 'react';
import { motion } from 'motion/react';
import { Section } from '../layout/Section';
import type { Education } from '../../types/portfolio';

type EducationSectionProps = {
	items: Education[];
};

export function EducationSection({ items }: EducationSectionProps) {
	const [active, setActive] = useState<string | null>(null);

	return (
		<Section id="education" title="Education" subtitle="Academic foundation in engineering, built on strong fundamentals and consistent performance.">
			<div className="education-grid">
				{items.map((item, index) => {
					const key = `${item.level}-${item.year}`;
					const isActive = active === key;
					return (
						<motion.button
							type="button"
							key={key}
							className="edu-card repel-card"
							onClick={() => setActive(isActive ? null : key)}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.08 }}>
							<div className={`edu-inner ${isActive ? 'is-rotated' : ''}`}>
								<div className="edu-face">
									<p>◆ {item.level}</p>
									<h3>✦ {item.school}</h3>
								</div>
								<div className="edu-back">
									<p>◆ Score: {item.score}</p>
									<p>◆ Year: {item.year}</p>
								</div>
							</div>
						</motion.button>
					);
				})}
			</div>
		</Section>
	);
}

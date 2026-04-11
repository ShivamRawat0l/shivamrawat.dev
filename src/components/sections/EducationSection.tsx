import { useState } from 'react';
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
				{items.map((item) => {
					const key = `${item.level}-${item.year}`;
					const isActive = active === key;
					return (
						<button
							type="button"
							key={key}
							className="edu-card repel-card"
							onClick={() => setActive(isActive ? null : key)}>
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
						</button>
					);
				})}
			</div>
		</Section>
	);
}

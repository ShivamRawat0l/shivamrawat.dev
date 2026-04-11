import { Section } from '../layout/Section';
import type { Experience } from '../../types/portfolio';

type ExperienceSectionProps = {
	items: Experience[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
	const lastRowStart = Math.floor((items.length - 1) / 2) * 2;
	return (
		<Section id="experience" title="Experience" subtitle="Senior-level delivery across internships and full-time ownership.">
			<div className="stack-grid">
				{items.map((item, index) => (
					<article
						className={`experience-item${index >= lastRowStart ? ' experience-item--last-row' : ''}`}
						key={`${item.company}-${item.role}`}>
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
					</article>
				))}
			</div>
		</Section>
	);
}

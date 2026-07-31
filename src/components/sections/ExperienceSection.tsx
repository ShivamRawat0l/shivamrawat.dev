import { Section } from '../layout/Section';
import type { Experience } from '../../types/portfolio';

type ExperienceSectionProps = {
	items: Experience[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
	return (
		<Section id="experience" index="01" title="Experience" subtitle="Where I've worked and what I owned.">
			<ol className="timeline">
				{items.map((item) => (
					<li className="timeline-item" key={`${item.company}-${item.role}`}>
						<div className="timeline-when">
							<span className="label">{item.duration}</span>
						</div>
						<div className="timeline-body">
							<h3>{item.role}</h3>
							<p className="timeline-company">{item.company}</p>
							<ul className="bullets">
								{item.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ol>
		</Section>
	);
}

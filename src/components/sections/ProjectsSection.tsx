import { FaChevronRight } from 'react-icons/fa';
import { Section } from '../layout/Section';
import type { Project } from '../../types/portfolio';
import { getTechIcon } from '../../utils/techIcons';

type ProjectsSectionProps = {
	items: Project[];
};

export function ProjectsSection({ items }: ProjectsSectionProps) {
	return (
		<Section
			id="work"
			index="02"
			title="Client work"
			subtitle="Products shipped at Mutual Mobile. Open a card for the delivery details.">
			<div className="grid-2">
				{items.map((item) => (
					<article key={item.title} className="card">
						<div className="card-title">
							<h3>{item.title}</h3>
						</div>
						<p>{item.description}</p>
						<div className="tags">
							{item.stack.map((stack) => {
								const Icon = getTechIcon(stack);
								return (
									<span key={stack} className="tag">
										<Icon aria-hidden="true" />
										{stack}
									</span>
								);
							})}
						</div>
						{item.points?.length ? (
							<details className="work-details">
								<summary>
									<FaChevronRight aria-hidden="true" />
									Highlights
								</summary>
								<ul className="bullets">
									{item.points.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</details>
						) : null}
					</article>
				))}
			</div>
		</Section>
	);
}

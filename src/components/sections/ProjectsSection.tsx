import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa';
import { Section } from '../layout/Section';
import type { Project } from '../../types/portfolio';
import { getTechIcon } from '../../utils/techIcons';

type ProjectsSectionProps = {
	items: Project[];
};

export function ProjectsSection({ items }: ProjectsSectionProps) {
	const lastRowStart = Math.floor((items.length - 1) / 2) * 2;
	return (
		<Section id="projects" title="Professional Projects" subtitle="Impact-driven builds shipped for products and users at scale.">
			<div className="stack-grid">
				{items.map((item, index) => (
					<motion.article
						key={item.title}
						className={`project-card${index >= lastRowStart ? ' project-card--last-row' : ''}`}
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.22 }}
						transition={{ delay: index * 0.06 }}>
						<h3>✦ {item.title}</h3>
						<p className="muted">◆ {item.description}</p>
						{item.points?.length ? (
							<ul className="symbol-list project-points">
								{item.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						) : null}
						<div className="tags">
							{item.stack.map((stack) => {
								const Icon = getTechIcon(stack);
								return (
									<span key={stack} className="tag">
										<Icon aria-hidden="true" />
										<span>{stack}</span>
									</span>
								);
							})}
						</div>
						{item.image ? <img className="project-image" src={item.image} alt={`${item.title} visual`} /> : null}
						{item.links?.length ? (
							<a className="project-link" href={item.links[0].url} target="_blank" rel="noreferrer">
								<FaGithub />
								<span>◆ View GitHub Project</span>
							</a>
						) : null}
					</motion.article>
				))}
			</div>
		</Section>
	);
}

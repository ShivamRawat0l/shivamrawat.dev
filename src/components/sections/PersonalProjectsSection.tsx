import { motion } from 'motion/react';
import { FaGithub, FaNpm, FaYoutube } from 'react-icons/fa';
import { Section } from '../layout/Section';
import type { Project } from '../../types/portfolio';
import { getTechIcon } from '../../utils/techIcons';

type PersonalProjectsSectionProps = {
	items: Project[];
};

const linkIconMap = {
	GitHub: FaGithub,
	npm: FaNpm,
	YouTube: FaYoutube,
};

export function PersonalProjectsSection({ items }: PersonalProjectsSectionProps) {
	return (
		<Section id="personal-projects" title="Personal Projects" subtitle="Side projects and libraries focused on experimentation and developer tools.">
			<div className="stack-grid">
				{items.map((item, index) => (
					<motion.article
						key={item.title}
						className="project-card"
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.22 }}
						transition={{ delay: index * 0.06 }}>
						<h3>✦ {item.title}</h3>
						<p className="muted">◆ {item.description}</p>
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
						{item.links?.length ? (
							<div className="project-links">
								{item.links.map((projectLink) => {
									const Icon = linkIconMap[projectLink.label];
									return (
										<a key={`${item.title}-${projectLink.label}`} className="project-link" href={projectLink.url} target="_blank" rel="noreferrer">
											<Icon />
											<span>◆ View {projectLink.label}</span>
										</a>
									);
								})}
							</div>
						) : null}
					</motion.article>
				))}
			</div>
		</Section>
	);
}

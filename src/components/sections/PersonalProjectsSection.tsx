import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaYoutube } from 'react-icons/fa';
import { SiNpm } from 'react-icons/si';
import type { IconType } from 'react-icons';
import { Section } from '../layout/Section';
import type { Project, ProjectLink } from '../../types/portfolio';
import { getTechIcon } from '../../utils/techIcons';

type PersonalProjectsSectionProps = {
	items: Project[];
};

const linkIcons: Record<ProjectLink['label'], IconType> = {
	GitHub: FaGithub,
	npm: SiNpm,
	YouTube: FaYoutube,
	Website: FaExternalLinkAlt,
};

const PREVIEW_COUNT = 6;

export function PersonalProjectsSection({ items }: PersonalProjectsSectionProps) {
	const [expanded, setExpanded] = useState(false);
	const visible = expanded ? items : items.slice(0, PREVIEW_COUNT);

	return (
		<Section
			id="projects"
			index="03"
			title="Side projects"
			subtitle="Libraries, tools and experiments I build outside client work.">
			<div className="grid-3">
				{visible.map((item) => (
					<article key={item.title} className="card">
						<h3>{item.title}</h3>
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
						{item.links?.length ? (
							<div className="card-links">
								{item.links.map((link) => {
									const Icon = linkIcons[link.label];
									return (
										<a
											key={link.label}
											className="card-link"
											href={link.url}
											target="_blank"
											rel="noreferrer">
											<Icon aria-hidden="true" />
											{link.label}
										</a>
									);
								})}
							</div>
						) : null}
					</article>
				))}
			</div>
			{items.length > PREVIEW_COUNT ? (
				<div className="section-more">
					<button type="button" className="btn" onClick={() => setExpanded((value) => !value)}>
						{expanded ? 'Show fewer' : `Show all ${items.length} projects`}
					</button>
				</div>
			) : null}
		</Section>
	);
}

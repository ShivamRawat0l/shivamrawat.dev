import { Section } from '../layout/Section';
import { getTechIcon } from '../../utils/techIcons';

type SkillsSectionProps = {
	items: string[];
};

export function SkillsSection({ items }: SkillsSectionProps) {
	return (
		<Section id="skills" title="Skills" subtitle="Focused toolkit for product quality, scale, and developer velocity.">
			<div className="tags skills-list">
				{items.map((skill) => {
					const Icon = getTechIcon(skill);
					return (
						<span key={skill} className="tag">
							<Icon aria-hidden="true" />
							<span>{skill}</span>
						</span>
					);
				})}
			</div>
		</Section>
	);
}

import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { Section } from '../layout/Section';
import { profile } from '../../data/portfolio';
import type { Education } from '../../types/portfolio';

type EducationSectionProps = {
	items: Education[];
};

export function EducationSection({ items }: EducationSectionProps) {
	return (
		<Section id="about" index="05" title="Education & contact" subtitle="Academic background, and the fastest ways to reach me.">
			<div className="edu-list">
				{items.map((item) => (
					<article className="edu-row" key={`${item.level}-${item.year}`}>
						<span className="label">{item.year}</span>
						<div>
							<h3>{item.level}</h3>
							<p className="edu-school">{item.school}</p>
						</div>
						<span className="edu-score">{item.score}</span>
					</article>
				))}
			</div>

			<div className="contact">
				<div>
					<h2>Let's build something.</h2>
					<p>Open to mobile engineering work — React Native, iOS, or the native glue between them.</p>
				</div>
				<div className="contact-actions">
					<a className="btn btn--primary" href={`mailto:${profile.email}`}>
						<FaEnvelope aria-hidden="true" />
						{profile.email}
					</a>
					<a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
						<FaPhone aria-hidden="true" />
						{profile.phone}
					</a>
					<a className="btn" href={profile.github} target="_blank" rel="noreferrer">
						<FaGithub aria-hidden="true" />
						{profile.githubHandle}
					</a>
				</div>
			</div>
		</Section>
	);
}

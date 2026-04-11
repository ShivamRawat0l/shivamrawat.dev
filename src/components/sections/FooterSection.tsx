import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { Section } from '../layout/Section';
import type { Education } from '../../types/portfolio';

type FooterSectionProps = {
	records: Education[];
};

export function FooterSection({ records }: FooterSectionProps) {
	return (
		<Section id="footer" title="Education & Contact" subtitle="Academic background and ways to connect.">
			<div className="footer-education-grid">
				{records.map((record) => (
					<article key={`${record.level}-${record.year}`} className="footer-education-card repel-card">
						<p>◆ {record.level}</p>
						<h3>{record.school}</h3>
						<p>◆ Score: {record.score}</p>
						<p>◆ Year: {record.year}</p>
					</article>
				))}
			</div>
			<footer className="footer">
				<p>
					<FaPhone /> ◆ Phone: +91 89792 90927
				</p>
				<p>
					<FaEnvelope /> ◆ Email: shivamrawat2806@gmail.com
				</p>
				<p>
					<FaGithub /> ◆ GitHub: ShivamRawat0l
				</p>
				<p>✦ Built with React, TypeScript, and Motion.</p>
			</footer>
		</Section>
	);
}

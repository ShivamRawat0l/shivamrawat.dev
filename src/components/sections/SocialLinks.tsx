import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import type { SocialLink } from '../../types/portfolio';

const iconMap = {
	GitHub: FaGithub,
	LinkedIn: FaLinkedin,
	Medium: FaMedium,
	Email: FaEnvelope,
};

type SocialLinksProps = {
	links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
	return (
		<div className="social-row">
			{links.map((link) => {
				const Icon = iconMap[link.label as keyof typeof iconMap];
				return (
					<a className="chip-link" key={link.label} href={link.url} target="_blank" rel="noreferrer">
						<span className="symbol">◆</span>
						{Icon ? <Icon aria-hidden="true" /> : null}
						<span>{link.label}</span>
					</a>
				);
			})}
		</div>
	);
}

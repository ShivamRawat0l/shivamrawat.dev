import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { IconType } from 'react-icons';
import type { SocialLink } from '../../types/portfolio';

const iconMap: Record<string, IconType> = {
	GitHub: FaGithub,
	LinkedIn: FaLinkedin,
	LeetCode: SiLeetcode,
	Medium: FaMedium,
	Email: FaEnvelope,
};

type SocialLinksProps = {
	links: SocialLink[];
	/** Email gets its own button in the hero, so it is dropped by default. */
	exclude?: string[];
};

export function SocialLinks({ links, exclude = ['Email'] }: SocialLinksProps) {
	return (
		<div className="row">
			{links
				.filter((link) => !exclude.includes(link.label))
				.map((link) => {
					const Icon = iconMap[link.label] ?? FaGithub;
					return (
						<a
							className="icon-link"
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							title={link.label}
							aria-label={link.label}>
							<Icon aria-hidden="true" />
						</a>
					);
				})}
		</div>
	);
}

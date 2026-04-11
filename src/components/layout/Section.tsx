import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
	id: string;
	title: string;
	subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
	return (
		<section id={id} className="section">
			<header className="section-header">
				<div className="section-header-inner">
					<h2>✦ {title}</h2>
					{subtitle ? <p className="section-header-subtitle">{subtitle}</p> : null}
				</div>
			</header>
			{children}
		</section>
	);
}

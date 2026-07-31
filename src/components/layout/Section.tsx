import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
	id: string;
	title: string;
	/** Small mono counter shown above the title, e.g. "02". */
	index?: string;
	subtitle?: string;
}>;

export function Section({ id, title, index, subtitle, children }: SectionProps) {
	return (
		<section id={id} className="section container">
			<header className="section-header">
				{index ? (
					<div className="section-eyebrow">
						<span className="label">{index}</span>
					</div>
				) : null}
				<h2>{title}</h2>
				{subtitle ? <p>{subtitle}</p> : null}
			</header>
			{children}
		</section>
	);
}

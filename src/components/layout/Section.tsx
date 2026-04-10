import type { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

type SectionProps = PropsWithChildren<{
	id: string;
	title: string;
	subtitle?: string;
}>;

export function Section({ id, title, subtitle, children }: SectionProps) {
	return (
		<section id={id} className="section">
			<motion.header
				className="section-header"
				initial={{ opacity: 0, y: 22 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.5 }}>
				<h2>✦ {title}</h2>
				{subtitle ? <p>{subtitle}</p> : null}
			</motion.header>
			{children}
		</section>
	);
}

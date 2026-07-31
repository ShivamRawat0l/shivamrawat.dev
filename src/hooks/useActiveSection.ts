import { useEffect, useState } from 'react';

/** Tracks which section id is currently closest to the top of the viewport. */
export function useActiveSection(ids: string[]) {
	const [active, setActive] = useState(ids[0] ?? '');

	useEffect(() => {
		const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
		if (!elements.length) {
			return;
		}

		const visible = new Map<string, number>();
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible.set(entry.target.id, entry.intersectionRatio);
					} else {
						visible.delete(entry.target.id);
					}
				});
				// Earliest section in document order wins ties, so the nav doesn't flicker.
				const next = ids.find((id) => visible.has(id));
				if (next) {
					setActive(next);
				}
			},
			{ rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] },
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, [ids]);

	return active;
}

import { useEffect } from 'react';

export function useRepelCards() {
	useEffect(() => {
		const cards = Array.from(document.querySelectorAll<HTMLElement>('.repel-card'));
		const cleanups: Array<() => void> = [];

		cards.forEach((card) => {
			const onMove = (event: MouseEvent) => {
				const rect = card.getBoundingClientRect();
				const centerX = rect.left + rect.width / 2;
				const centerY = rect.top + rect.height / 2;
				const dx = centerX - event.clientX;
				const dy = centerY - event.clientY;
				const distance = Math.max(Math.hypot(dx, dy), 0.01);
				const radius = 200;

				if (distance > radius) {
					card.style.setProperty('--repel-x', '0px');
					card.style.setProperty('--repel-y', '0px');
					card.style.setProperty('--repel-rx', '0deg');
					card.style.setProperty('--repel-ry', '0deg');
					return;
				}

				const strength = ((radius - distance) / radius) * 10;
				const x = (dx / distance) * strength;
				const y = (dy / distance) * strength;
				card.style.setProperty('--repel-x', `${x.toFixed(2)}px`);
				card.style.setProperty('--repel-y', `${y.toFixed(2)}px`);
				card.style.setProperty('--repel-rx', `${((dy / distance) * 4).toFixed(2)}deg`);
				card.style.setProperty('--repel-ry', `${((-dx / distance) * 5).toFixed(2)}deg`);
			};

			const onLeave = () => {
				card.style.setProperty('--repel-x', '0px');
				card.style.setProperty('--repel-y', '0px');
				card.style.setProperty('--repel-rx', '0deg');
				card.style.setProperty('--repel-ry', '0deg');
			};

			card.addEventListener('mousemove', onMove);
			card.addEventListener('mouseleave', onLeave);
			cleanups.push(() => {
				card.removeEventListener('mousemove', onMove);
				card.removeEventListener('mouseleave', onLeave);
			});
		});

		return () => cleanups.forEach((cleanup) => cleanup());
	}, []);
}

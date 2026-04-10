import { useEffect, useRef } from 'react';

function canScrollWithin(target: EventTarget | null, deltaY: number): boolean {
	if (!(target instanceof HTMLElement)) {
		return false;
	}

	let node: HTMLElement | null = target;
	while (node && node !== document.body) {
		const style = window.getComputedStyle(node);
		const overflowY = style.overflowY;
		const isScrollable = (overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight + 1;

		if (isScrollable) {
			const canScrollDown = node.scrollTop + node.clientHeight < node.scrollHeight - 1;
			const canScrollUp = node.scrollTop > 1;
			if ((deltaY > 0 && canScrollDown) || (deltaY < 0 && canScrollUp)) {
				return true;
			}
		}
		node = node.parentElement;
	}
	return false;
}

export function useSectionSnap() {
	const wheelAccumRef = useRef(0);
	const isLockedRef = useRef(false);

	useEffect(() => {
		const onWheel = (event: WheelEvent) => {
			const sections = Array.from(document.querySelectorAll<HTMLElement>('.page-section'));
			if (!sections.length || canScrollWithin(event.target, event.deltaY)) {
				return;
			}

			event.preventDefault();
			if (isLockedRef.current) {
				return;
			}

			wheelAccumRef.current += event.deltaY;
			const threshold = 130;
			if (Math.abs(wheelAccumRef.current) < threshold) {
				return;
			}

			const currentY = window.scrollY;
			let closestIndex = 0;
			let closestDistance = Number.POSITIVE_INFINITY;
			sections.forEach((section, index) => {
				const distance = Math.abs(section.offsetTop - currentY);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});

			const direction = wheelAccumRef.current > 0 ? 1 : -1;
			const nextIndex = Math.max(0, Math.min(sections.length - 1, closestIndex + direction));
			wheelAccumRef.current = 0;

			if (nextIndex === closestIndex) {
				return;
			}

			isLockedRef.current = true;
			window.scrollTo({ top: sections[nextIndex].offsetTop, behavior: 'smooth' });
			window.setTimeout(() => {
				isLockedRef.current = false;
			}, 620);
		};

		window.addEventListener('wheel', onWheel, { passive: false });
		return () => window.removeEventListener('wheel', onWheel);
	}, []);
}

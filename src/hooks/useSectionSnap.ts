import { useEffect, useRef } from 'react';

/** Accumulated wheel delta before moving to the next/previous section. */
const WHEEL_THRESHOLD = 120;
const SECTION_EDGE_SLACK = 12;
function canScrollWithinNestedTarget(target: EventTarget | null, deltaY: number): boolean {
	if (!(target instanceof HTMLElement)) {
		return false;
	}
	let node: HTMLElement | null = target;
	while (node && node !== document.body) {
		const style = window.getComputedStyle(node);
		const overflowY = style.overflowY;
		const scrollable =
			(overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight + 1;
		if (scrollable) {
			const canDown = node.scrollTop + node.clientHeight < node.scrollHeight - 1;
			const canUp = node.scrollTop > 1;
			if ((deltaY > 0 && canDown) || (deltaY < 0 && canUp)) {
				return true;
			}
		}
		node = node.parentElement;
	}
	return false;
}

function sectionDocTop(el: HTMLElement): number {
	return window.scrollY + el.getBoundingClientRect().top;
}

function sectionDocBounds(el: HTMLElement) {
	const r = el.getBoundingClientRect();
	const y = window.scrollY;
	return { top: y + r.top, bottom: y + r.bottom };
}

/** Window can still scroll within this section (content extends past the viewport edge). */
function canScrollInsideSection(section: HTMLElement, deltaY: number): boolean {
	const { top, bottom } = sectionDocBounds(section);
	const viewTop = window.scrollY;
	const viewBottom = window.scrollY + window.innerHeight;
	const s = SECTION_EDGE_SLACK;
	if (deltaY > 0) {
		return viewBottom < bottom - s;
	}
	if (deltaY < 0) {
		return viewTop > top + s;
	}
	return false;
}

function activeSectionIndex(sections: HTMLElement[], scrollY: number): number {
	const anchor = scrollY + 1;
	let active = 0;
	for (let i = 0; i < sections.length; i++) {
		if (sectionDocTop(sections[i]) <= anchor) {
			active = i;
		} else {
			break;
		}
	}
	return active;
}

function wheelDeltaY(event: WheelEvent): number {
	if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
		return event.deltaY * 16;
	}
	if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
		return event.deltaY * window.innerHeight * 0.9;
	}
	return event.deltaY;
}

/**
 * Wheel: scroll inside the current section first; at the edge, accumulate delta past a
 * threshold then move to the adjacent section. Uses `behavior: 'auto'` so `html`’s
 * `scroll-behavior` controls smoothing (no long JS smooth scroll fighting the wheel).
 */
export function useSectionSnap() {
	const accumRef = useRef(0);

	useEffect(() => {
		const sectionsEls = () => Array.from(document.querySelectorAll<HTMLElement>('.page-section'));

		const onWheel = (event: WheelEvent) => {
			if (event.ctrlKey || event.metaKey) {
				return;
			}

			const sections = sectionsEls();
			if (!sections.length || canScrollWithinNestedTarget(event.target, event.deltaY)) {
				return;
			}

			const scrollY = window.scrollY;
			const active = activeSectionIndex(sections, scrollY);
			const section = sections[active];
			if (!section) {
				return;
			}

			if (canScrollInsideSection(section, event.deltaY)) {
				accumRef.current = 0;
				return;
			}

			const dir = event.deltaY > 0 ? 1 : -1;
			const next = Math.max(0, Math.min(sections.length - 1, active + dir));
			if (next === active) {
				accumRef.current = 0;
				return;
			}

			event.preventDefault();

			const dy = wheelDeltaY(event);
			const sign = Math.sign(dy);
			if (accumRef.current !== 0 && Math.sign(accumRef.current) !== sign) {
				accumRef.current = 0;
			}
			accumRef.current += dy;

			if (Math.abs(accumRef.current) < WHEEL_THRESHOLD) {
				return;
			}

			accumRef.current = 0;
			window.scrollTo({ top: sectionDocTop(sections[next]), left: 0, behavior: 'auto' });
		};

		window.addEventListener('wheel', onWheel, { passive: false });
		return () => window.removeEventListener('wheel', onWheel);
	}, []);
}

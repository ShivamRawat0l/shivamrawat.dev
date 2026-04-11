import { useEffect, useRef } from 'react';

/** Wheel delta (px) to accumulate before snapping to the next/previous section. */
const SNAP_THRESHOLD = 120;
const SECTION_EDGE_SLACK = 12;
const ACCUM_CAP = 280;

/** Positive = user scrolled “down” the page (content moves up) → next section. Negative → previous. */
function effectiveWheelDeltaY(event: WheelEvent): number {
	let dy = wheelDeltaY(event);
	const extended = event as WheelEvent & { webkitDirectionInvertedFromDevice?: boolean };
	if (extended.webkitDirectionInvertedFromDevice) {
		dy = -dy;
	}
	return dy;
}

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
 * Wheel: scroll inside a tall `.page-section` first; at the edge, pass a threshold then
 * jump: accumulated delta down the page (positive) goes to the next section; negative to the previous.
 */
export function useSectionSnap() {
	const accumRef = useRef(0);
	const pendingTargetRef = useRef<number | null>(null);
	const rafIdRef = useRef<number | null>(null);

	useEffect(() => {
		const sectionsEls = () => Array.from(document.querySelectorAll<HTMLElement>('.page-section'));

		const flushJump = () => {
			rafIdRef.current = null;
			const target = pendingTargetRef.current;
			pendingTargetRef.current = null;
			if (target === null) {
				return;
			}
			const sections = sectionsEls();
			const el = sections[target];
			if (!el) {
				return;
			}
			window.scrollTo({ top: sectionDocTop(el), left: 0, behavior: 'instant' });
		};

		const scheduleJump = (targetIndex: number) => {
			pendingTargetRef.current = targetIndex;
			if (rafIdRef.current !== null) {
				return;
			}
			rafIdRef.current = requestAnimationFrame(flushJump);
		};

		const onWheel = (event: WheelEvent) => {
			if (event.ctrlKey || event.metaKey) {
				return;
			}

			const dy0 = effectiveWheelDeltaY(event);
			const sections = sectionsEls();
			if (!sections.length || canScrollWithinNestedTarget(event.target, dy0)) {
				return;
			}

			const scrollY = window.scrollY;
			const active = activeSectionIndex(sections, scrollY);
			const section = sections[active];
			if (!section) {
				return;
			}

			if (canScrollInsideSection(section, dy0)) {
				accumRef.current = 0;
				pendingTargetRef.current = null;
				return;
			}

			if (dy0 === 0) {
				return;
			}

			/** +1 = toward next section, -1 = toward previous */
			const step = dy0 > 0 ? 1 : -1;
			const tentativeNext = Math.max(0, Math.min(sections.length - 1, active + step));
			if (tentativeNext === active) {
				accumRef.current = 0;
				pendingTargetRef.current = null;
				return;
			}

			event.preventDefault();

			const sign = Math.sign(dy0) as -1 | 1;
			if (accumRef.current !== 0 && Math.sign(accumRef.current) !== sign) {
				accumRef.current = 0;
			}
			accumRef.current += dy0;
			accumRef.current = Math.max(-ACCUM_CAP, Math.min(ACCUM_CAP, accumRef.current));

			if (Math.abs(accumRef.current) < SNAP_THRESHOLD) {
				return;
			}

			const jumpStep = accumRef.current > 0 ? 1 : -1;
			accumRef.current = 0;
			const target = Math.max(0, Math.min(sections.length - 1, active + jumpStep));
			if (target === active) {
				return;
			}
			scheduleJump(target);
		};

		window.addEventListener('wheel', onWheel, { passive: false });
		return () => {
			window.removeEventListener('wheel', onWheel);
			if (rafIdRef.current !== null) {
				cancelAnimationFrame(rafIdRef.current);
				rafIdRef.current = null;
			}
			pendingTargetRef.current = null;
		};
	}, []);
}

import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, durationMs = 1200) {
	const [value, setValue] = useState(0);
	const frameRef = useRef<number>(0);

	useEffect(() => {
		const start = performance.now();
		const step = (now: number) => {
			const progress = Math.min((now - start) / durationMs, 1);
			setValue(Math.floor(progress * target));
			if (progress < 1) {
				frameRef.current = requestAnimationFrame(step);
			}
		};
		frameRef.current = requestAnimationFrame(step);
		return () => cancelAnimationFrame(frameRef.current);
	}, [target, durationMs]);

	return value;
}

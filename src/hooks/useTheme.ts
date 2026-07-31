import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function currentTheme(): Theme {
	return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

/** Reads the theme applied by the inline script in `index.html` and toggles it. */
export function useTheme() {
	const [theme, setTheme] = useState<Theme>(currentTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	const toggle = useCallback(() => {
		setTheme((previous) => {
			const next = previous === 'dark' ? 'light' : 'dark';
			try {
				localStorage.setItem(STORAGE_KEY, next);
			} catch {
				/* private mode — the choice just won't persist */
			}
			return next;
		});
	}, []);

	return { theme, toggle };
}

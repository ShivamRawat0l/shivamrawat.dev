import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../hooks/useTheme';

const NAV_ITEMS = [
	{ id: 'experience', label: 'Experience' },
	{ id: 'work', label: 'Work' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'writing', label: 'Writing' },
	{ id: 'about', label: 'About' },
];

/** `top` is observed but has no nav link, so nothing is highlighted in the hero. */
const NAV_IDS = ['top', ...NAV_ITEMS.map((item) => item.id)];

export function Nav() {
	const { theme, toggle } = useTheme();
	const active = useActiveSection(NAV_IDS);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav className="nav" data-scrolled={scrolled}>
			<div className="container nav-inner">
				<a className="nav-brand" href="#top">
					Shivam Rawat<span>.</span>
				</a>
				<div className="nav-links">
					{NAV_ITEMS.map((item) => (
						<a key={item.id} className="nav-link" href={`#${item.id}`} aria-current={active === item.id}>
							{item.label}
						</a>
					))}
				</div>
				<div className="nav-actions">
					<button
						type="button"
						className="theme-toggle"
						onClick={toggle}
						aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
						{theme === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
					</button>
				</div>
			</div>
		</nav>
	);
}

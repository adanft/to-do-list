import type { ThemeType } from '@/types/theme';

export function getTheme(): ThemeType | null {
	if (typeof window === 'undefined') return null;

	let theme: ThemeType;
	const defaultTheme = localStorage.getItem('theme') as ThemeType;

	if (defaultTheme === null) {
		theme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
	} else {
		theme = defaultTheme;
	}

	localStorage.setItem('theme', theme);

	return theme;
}

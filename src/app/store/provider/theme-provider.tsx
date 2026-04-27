'use client';

import { type ReactElement, useContext, useSyncExternalStore } from 'react';
import { getTheme } from '@/helpers/setTheme';
import type { ChildrenNodeType } from '@/types/children-node';
import type { ThemeType } from '@/types/theme';
import type { ThemeContextType } from '@/types/theme-context';
import { ThemeContext } from '../states/theme-context';

const THEME_CHANGE_EVENT = 'theme-change';

function getThemeSnapshot(): ThemeType {
	return getTheme() ?? 'light';
}

function getServerThemeSnapshot(): ThemeType {
	return 'light';
}

function subscribeToThemeChange(callback: () => void): () => void {
	window.addEventListener('storage', callback);
	window.addEventListener(THEME_CHANGE_EVENT, callback);

	return () => {
		window.removeEventListener('storage', callback);
		window.removeEventListener(THEME_CHANGE_EVENT, callback);
	};
}

function ThemeProvider({ children }: ChildrenNodeType): ReactElement {
	const theme = useSyncExternalStore(
		subscribeToThemeChange,
		getThemeSnapshot,
		getServerThemeSnapshot,
	);

	const toggle = (): void => {
		const themeColor = theme === 'light' ? 'dark' : 'light';

		localStorage.setItem('theme', themeColor);
		window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			<div className={`${theme} w-full min-h-screen bg-primary`}>{children}</div>
		</ThemeContext.Provider>
	);
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export default ThemeProvider;

'use client';

import { type ChildrenNodeType } from '@/types/children-node';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../states/theme-context';
import { type ThemeContextType } from '@/types/theme-context';
import { type ThemeType } from '@/types/theme';
import { getTheme } from '@/helpers/setTheme';

function ThemeProvider({ children }: ChildrenNodeType): JSX.Element | null {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState<ThemeType | null>(getTheme);

	const toggle = (): void => {
		const themeColor = theme === 'light' ? 'dark' : 'light';

		setTheme(themeColor);
		localStorage.setItem('theme', themeColor);
	};

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<ThemeContext.Provider value={{ theme, toggle }}>
			<div className={`${theme ?? 'light'} w-full min-h-screen bg-primary`}>{children}</div>
		</ThemeContext.Provider>
	);
}

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export default ThemeProvider;

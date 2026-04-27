import { createContext } from 'react';
import type { ThemeContextType } from '@/types/theme-context';

const themeContextInitialState: ThemeContextType = {
	theme: null,
	toggle: () => {
		console.log('Toggle theme function must be overridden!!!');
	},
};

export const ThemeContext = createContext<ThemeContextType>(themeContextInitialState);

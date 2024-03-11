import { type ThemeContextType } from '@/types/theme-context';
import { createContext } from 'react';

const themeContextInitialState: ThemeContextType = {
	theme: null,
	toggle: () => {
		console.log('Toggle theme function must be overridden!!!');
	},
};

export const ThemeContext = createContext<ThemeContextType>(themeContextInitialState);

'use client';
import type { ReactElement } from 'react';
import { useTheme } from '@/app/store/provider/theme-provider';
import styles from './styles.module.css';

function Toggle(): ReactElement {
	const { theme, toggle } = useTheme();

	function handleToggle(): void {
		toggle();
	}

	return (
		<label className="relative inline-block w-12 h-6 cursor-pointer">
			<span className={styles.sun}>
				<i className="nf nf-oct-sun"></i>
			</span>
			<span className={styles.moon}>
				<i className="nf nf-fa-moon_o"></i>
			</span>
			<input
				type="checkbox"
				className={styles.input}
				onChange={handleToggle}
				checked={theme === 'dark'}
			/>
			<span className={styles.slider}></span>
		</label>
	);
}

export default Toggle;

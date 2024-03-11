'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Toggle from '../toggle';
import styles from './styles.module.css';

function Navbar(): JSX.Element {
	return (
		<div
			className={`${styles.shadowBottom} fixed top-0 h-14 w-full bg-secondary px-4 text-color flex justify-between z-10`}
		>
			<Link href="/" className="flex h-full justify-center items-center gap-4">
				<Image src="/logo.png" width={40} height={40} alt="logo-img" />
				<span className="font-semibold text-xl text-title">To Do</span>
			</Link>
			<div className="flex items-center">
				<Toggle />
			</div>
		</div>
	);
}

export default Navbar;

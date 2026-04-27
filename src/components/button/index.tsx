import Link from 'next/link';
import type { ReactNode } from 'react';

function Button(props: PropsType) {
	const { className, content, icon, buttonType, linkHref } = props;
	const commonChild = (
		<>
			{content}
			{icon}
		</>
	);
	const jsxComponent = linkHref ? (
		<Link href={linkHref} className={className}>
			{commonChild}
		</Link>
	) : (
		<button type={buttonType} className={className}>
			{commonChild}
		</button>
	);

	return jsxComponent;
}

type PropsType = {
	className: string;
	content: string;
	icon: ReactNode;
	buttonType: undefined | 'button' | 'submit' | 'reset';
	linkHref: string | undefined;
};

export default Button;

import { useEffect, useRef } from 'react';

function useOutside(action: () => void) {
	const ref = useRef<HTMLElement | null>(null);
	useEffect(() => {
		const eventAction = (event: MouseEvent) => {
			if (ref.current !== null && !ref.current.contains(event.target as Node)) {
				action();
			}
		};
		document.addEventListener('mousedown', eventAction, true);

		return () => {
			document.removeEventListener('mousedown', eventAction, true);
		};
	}, [action]);

	return ref;
}

export default useOutside;

import { type ChangeEvent, useState } from 'react';

function useForm<T>(state: T): [T, (event: ChangeEvent<HTMLInputElement>) => void] {
	const [values, setValues] = useState(state);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
		const { target } = event;

		setValues({
			...values,
			[target.name]: target.value,
		});
	}

	return [values, handleInputChange];
}

export default useForm;

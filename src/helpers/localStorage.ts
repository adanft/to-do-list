function saveData<T>(name: string, data: T) {
	localStorage.setItem(name, JSON.stringify(data));
}

function getData<T>(name: string): T | null {
	const data = localStorage.getItem(name);
	return data === null ? null : JSON.parse(data);
}

function deleteData(name: string) {
	localStorage.removeItem(name);
}

export { deleteData, getData, saveData };

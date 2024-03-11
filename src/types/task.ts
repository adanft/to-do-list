export type TaskType = {
	id: string;
	title: string;
	description: string;
	date: string;
	status: 'TO DO' | 'DOING' | 'DONE';
};

import { TaskType } from './task';

export type TaskStateType = {
	task: TaskType | null;
	tasks: TaskType[];
	loading: boolean;
};

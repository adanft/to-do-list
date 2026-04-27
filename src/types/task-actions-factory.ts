import type { Dispatch, SetStateAction } from 'react';
import type { TaskType } from './task';

export type TaskActionsFactoryType = {
	onGetTasks: () => void;
	onCreateTask: (payload: TaskType) => void;
	onGetTask: (payload: string, setData: Dispatch<SetStateAction<TaskType | undefined>>) => void;
	onDeleteTask: (payload: TaskType) => void;
	onUpdateTask: (payload: TaskType) => void;
};

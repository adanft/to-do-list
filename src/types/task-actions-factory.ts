import { type Dispatch, type SetStateAction } from 'react';
import { TaskType } from './task';

export type TaskActionsFactoryType = {
	onGetTasks: () => void;
	onCreateTask: (payload: TaskType) => void;
	onGetTask: (payload: string, setData: Dispatch<SetStateAction<TaskType | undefined>>) => void;
	onDeleteTask: (payload: TaskType) => void;
	onUpdateTask: (payload: TaskType) => void;
};

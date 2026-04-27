import type { TaskStateType } from '@/types/task-state';

export const InitialTaskContextState: TaskStateType = {
	task: null,
	tasks: [],
	loading: false,
};

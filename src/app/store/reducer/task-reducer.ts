/* eslint-disable indent */

import { produce } from 'immer';
import { TaskKeys } from '../keys/task-keys';
import { TaskType } from '@/types/task';
import { TaskStateType } from '@/types/task-state';

function TaskReducer(
	state: TaskStateType,
	action: { type: string; payload: boolean | TaskType | TaskType[] },
) {
	const { type, payload } = action;
	return produce(state, (draft: TaskStateType) => {
		switch (type) {
			case TaskKeys.CreateTask: {
				const task = payload as TaskType;
				draft.tasks.push(task);
				break;
			}
			case TaskKeys.GetTask:
				draft.task = payload as TaskType;
				break;
			case TaskKeys.GetTasks:
				draft.tasks = payload as TaskType[];
				break;
			case TaskKeys.DeleteTask:
				draft.tasks = draft.tasks.filter((task) => task.id !== (payload as TaskType).id);
				break;
			case TaskKeys.UpdateTask: {
				const newTask = payload as TaskType;
				const task = draft.tasks.find((task) => task.id === newTask.id);

				if (task === undefined) break;

				task.title = newTask.title;
				task.description = newTask.description;
				task.date = newTask.date;
				task.status = newTask.status;
				break;
			}
			case TaskKeys.Loading:
				draft.loading = payload as boolean;
				break;
			default:
				break;
		}
	});
}

export default TaskReducer;

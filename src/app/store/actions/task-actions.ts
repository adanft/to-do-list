import type { Dispatch, SetStateAction } from 'react';
import { getData, saveData } from '@/helpers/localStorage';
import type { TaskType } from '@/types/task';
import type { TaskActionsFactoryType } from '@/types/task-actions-factory';
import type { DispatchType } from '@/types/task-dispatch';
import { TaskKeys } from '../keys/task-keys';

function getTasks(dispatch: DispatchType) {
	const tasks = getData<TaskType[]>('tasks');

	if (tasks != null) {
		dispatch({ type: TaskKeys.GetTasks, payload: tasks });
	} else {
		dispatch({ type: TaskKeys.GetTasks, payload: [] });
	}
}

function createTask(payload: TaskType, dispatch: DispatchType) {
	let tasks = getData<TaskType[]>('tasks');

	if (tasks != null) {
		tasks.push(payload);
	} else {
		tasks = [payload];
	}

	saveData<TaskType[]>('tasks', tasks);
	dispatch({ type: TaskKeys.CreateTask, payload });
}

function getTask(
	payload: string,
	dispatch: DispatchType,
	setData: Dispatch<SetStateAction<TaskType | undefined>>,
) {
	const tasks = getData<TaskType[]>('tasks');

	dispatch({ type: TaskKeys.Loading, payload: true });

	const task = tasks?.find((task) => task.id === payload);
	if (task !== undefined) {
		saveData<TaskType>('task', task);
		setData(task);
		dispatch({ type: TaskKeys.GetTask, payload: task });
	}
	dispatch({ type: TaskKeys.Loading, payload: false });
}

function deleteTask(payload: TaskType, dispatch: DispatchType) {
	if (!window.confirm('Are you sure you want to delete this task?')) {
		return;
	}

	let tasks = getData<TaskType[]>('tasks');

	if (tasks != null) {
		tasks = tasks.filter((task) => task.id !== payload.id);
		dispatch({ type: TaskKeys.DeleteTask, payload });
		saveData<TaskType[]>('tasks', tasks);
	}
}

function updateTask(payload: TaskType, dispatch: DispatchType) {
	const tasks = getData<TaskType[]>('tasks');

	if (tasks != null) {
		const index = tasks.findIndex((task) => task.id === payload.id);
		tasks[index] = payload;
		saveData<TaskType[]>('tasks', tasks);
		dispatch({ type: TaskKeys.UpdateTask, payload });
	}
}

export default function TaskActionsFactory(dispatch: DispatchType): TaskActionsFactoryType {
	return {
		onGetTasks: () => getTasks(dispatch),
		onCreateTask: (payload: TaskType) => createTask(payload, dispatch),
		onGetTask: (payload: string, setData: Dispatch<SetStateAction<TaskType | undefined>>) =>
			getTask(payload, dispatch, setData),
		onDeleteTask: (payload: TaskType) => deleteTask(payload, dispatch),
		onUpdateTask: (payload: TaskType) => updateTask(payload, dispatch),
	};
}

'use client';

import { createContext, useContext, useReducer, useState } from 'react';
import TaskReducer from '../reducer/task-reducer';
import { InitialTaskContextState } from '../states/task-context';
import { ChildrenNodeType } from '@/types/children-node';
import TaskActionsFactory from '../actions/task-actions';
import { TaskStateType } from '@/types/task-state';
import { TaskActionsFactoryType } from '@/types/task-actions-factory';

const TaskState = createContext<TaskStateType | null>(null);
const TaskDispatch = createContext<TaskActionsFactoryType | null>(null);

export function TaskDataProvider({ children }: ChildrenNodeType) {
	const [state, dispatch] = useReducer(TaskReducer, InitialTaskContextState);
	const [actions] = useState(TaskActionsFactory(dispatch));

	return (
		<TaskState.Provider value={state}>
			<TaskDispatch.Provider value={actions}>{children}</TaskDispatch.Provider>
		</TaskState.Provider>
	);
}

export function useTask(): [TaskStateType, TaskActionsFactoryType] {
	const state = useContext(TaskState);
	const actions = useContext(TaskDispatch);

	if (!state || !actions) {
		throw new Error('useAuth must be used inside AuthProvider');
	}

	return [state, actions];
}

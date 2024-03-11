'use client';

import { useTask } from '@/app/store/provider/task-provider';
import TaskForm from '@/components/task-form';
import { TaskType } from '@/types/task';
import React, { useEffect, useState } from 'react';
import 'react-day-picker/dist/style.css';

type PropsType = {
	params: { id: string };
};

function UpdateTask(props: PropsType) {
	const [, actions] = useTask();
	const [task, setTask] = useState<TaskType>();

	useEffect(() => {
		actions.onGetTask(props.params.id, setTask);
	}, [actions, props.params.id]);

	return (
		<>
			{task !== undefined ? (
				<TaskForm task={task} formTitle="Update Task" formType="Update" />
			) : (
				'Loading...'
			)}
		</>
	);
}

export default UpdateTask;

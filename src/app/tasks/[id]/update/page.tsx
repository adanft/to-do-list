'use client';

import { useEffect, useState } from 'react';
import { useTask } from '@/app/store/provider/task-provider';
import TaskForm from '@/components/task-form';
import type { TaskType } from '@/types/task';
import 'react-day-picker/dist/style.css';
import { useParams } from 'next/navigation';

function UpdateTask() {
	const [, actions] = useTask();
	const [task, setTask] = useState<TaskType>();
	const [loaded, setLoaded] = useState(false);
	const params = useParams<{ id: string }>();

	useEffect(() => {
		actions.onGetTask(decodeURIComponent(params.id), setTask);
		setLoaded(true);
	}, [actions, params.id]);

	return (
		<>
			{task !== undefined ? (
				<TaskForm task={task} formTitle="Update Task" formType="Update" />
			) : loaded ? (
				<div className="box p-4 max-w-screen-md mx-auto text-center">Task not found.</div>
			) : (
				'Loading...'
			)}
		</>
	);
}

export default UpdateTask;

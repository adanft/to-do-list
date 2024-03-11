'use client';

import { useEffect } from 'react';
import { useTask } from './store/provider/task-provider';
import Card from '@/components/card';
import { TaskType } from '@/types/task';
import Button from '@/components/button';

export default function Home() {
	const [state, actions] = useTask();
	const tasks = state.tasks;

	useEffect(() => {
		actions.onGetTasks();
	}, [actions]);

	return (
		<>
			<div className="text-right mb-4">
				<Button
					linkHref="/tasks/create"
					content="Add To Do"
					className="rounded-full inline-block bg-primary-color text-white px-4 py-2"
					icon={<i className="nf nf-fa-plus ml-4" />}
					buttonType="button"
				/>
			</div>
			<div className="flex flex-col gap-4">
				{tasks.map((task: TaskType) => (
					<Card
						task={task}
						deleteTask={actions.onDeleteTask}
						key={task.id}
						updateTask={actions.onUpdateTask}
					/>
				))}
			</div>
		</>
	);
}

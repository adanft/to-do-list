'use client';

import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useTask } from '@/app/store/provider/task-provider';
import type { TaskType } from '@/types/task';
import 'react-day-picker/dist/style.css';
import { useParams } from 'next/navigation';

function InfoTask() {
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
				<div className="flex flex-col box pt-4 max-w-screen-md mx-auto">
					<span className="px-4 text-title font-medium text-sm">Title</span>
					<h2 className="px-4">{task.title}</h2>
					<span className="px-4 pt-4 text-title font-medium text-sm">Description</span>
					<p className="px-4">{task.description}</p>
					<span className="text-title pt-4 font-medium text-sm text-center">Date</span>
					<div className="flex justify-center">
						<DayPicker
							modifiersClassNames={{
								today: 'select-today-picker',
								selected: 'select-day-picker',
							}}
							selected={new Date(task.date)}
							defaultMonth={new Date(task.date)}
						/>
					</div>
				</div>
			) : loaded ? (
				<div className="box p-4 max-w-screen-md mx-auto text-center">Task not found.</div>
			) : (
				'Loading...'
			)}
		</>
	);
}

export default InfoTask;

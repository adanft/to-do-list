'use client';

import { useTask } from '@/app/store/provider/task-provider';
import { TaskType } from '@/types/task';
import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

type PropsType = {
	params: { id: string };
};

function InfoTask(props: PropsType) {
	const [, actions] = useTask();
	const [task, setTask] = useState<TaskType>();

	useEffect(() => {
		actions.onGetTask(props.params.id, setTask);
	}, [actions, props.params.id]);

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
			) : (
				'Loading...'
			)}
		</>
	);
}

export default InfoTask;

'use client';

import { type FormEvent, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { useTask } from '@/app/store/provider/task-provider';
import Button from '@/components/button';
import useForm from '@/hooks/use-form';
import type { TaskType } from '@/types/task';
import 'react-day-picker/dist/style.css';
import { useRouter } from 'next/navigation';

type PropsType = {
	task: TaskType;
	formTitle: string;
	formType: 'Create' | 'Update';
};

function TaskForm(props: PropsType) {
	const [, actions] = useTask();
	const router = useRouter();
	const [task, setTask] = useForm<TaskType>(props.task);
	const [day, setDay] = useState<Date | undefined>(
		props.formType === 'Update' ? new Date(task.date) : new Date(),
	);

	const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (day === undefined) return;

		const newTak = { ...task, date: day.toISOString(), id: task.id };

		actions.onUpdateTask(newTak);
		router.push('/');
	};

	const handleCreate = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (day === undefined) return;

		const newTak = { ...task, date: day.toISOString(), id: crypto.randomUUID() };

		actions.onCreateTask(newTak);
		router.push('/');
	};

	return (
		<form
			className="flex flex-col box py-4 gap-4 max-w-screen-md mx-auto"
			onSubmit={props.formType === 'Create' ? handleCreate : handleUpdate}
		>
			<h2 className="text-title text-center font-bold text-2xl">{props.formTitle}</h2>
			<fieldset className="flex flex-wrap gap-4">
				<legend className="mb-2 font-semibold text-title px-4">Task Data</legend>
				<div className="flex flex-col grow gap-1 w-full px-4">
					<input
						className="w-full border outline-none border-gray-500/40 bg-secondary rounded-sm leading-4 px-2 py-2 text-color"
						type="text"
						name="title"
						id="title"
						placeholder="Enter the title"
						defaultValue={task.title}
						onChange={setTask}
					/>
					<label className="order-first text-sm font-medium" htmlFor="title">
						Title
					</label>
				</div>
				<div className="flex flex-col grow gap-1 w-full px-4">
					<input
						className="w-full border outline-none border-gray-500/40 bg-secondary rounded-sm leading-4 px-2 py-2 text-color"
						type="text"
						name="description"
						id="description"
						placeholder="Enter the last name"
						defaultValue={task.description}
						onChange={setTask}
					/>
					<label className="order-first text-sm font-medium " htmlFor="description">
						Description
					</label>
				</div>
				<div className="flex flex-col grow gap-1">
					<div className="flex justify-center">
						<DayPicker
							modifiersClassNames={{
								today: 'select-today-picker',
								selected: 'select-day-picker',
							}}
							defaultMonth={day}
							mode="single"
							selected={day}
							onSelect={setDay}
						/>
					</div>
					<label className="order-first text-sm font-medium text-center" htmlFor="date">
						Date
					</label>
				</div>
			</fieldset>
			<div className="text-center">
				<Button
					icon={undefined}
					content={props.formType}
					className="bg-primary-color rounded-full text-white px-4 py-2"
					buttonType="submit"
					linkHref={undefined}
				/>
			</div>
		</form>
	);
}

export default TaskForm;

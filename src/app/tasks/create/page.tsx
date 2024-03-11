'use client';

import TaskForm from '@/components/task-form';
import { TaskType } from '@/types/task';
import React from 'react';
import 'react-day-picker/dist/style.css';

function CreateTask() {
	const task: TaskType = {
		id: '',
		title: '',
		description: '',
		status: 'TO DO',
		date: '',
	};

	return <TaskForm task={task} formTitle="Create Task" formType="Create" />;
}

export default CreateTask;

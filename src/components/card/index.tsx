import moment from 'moment';
import Link from 'next/link';
import { type LegacyRef, useState } from 'react';
import useOutside from '@/hooks/use-outside';
import type { TaskType } from '@/types/task';

type PropsType = {
	task: TaskType;
	deleteTask: (task: TaskType) => void;
	updateTask: (task: TaskType) => void;
};

function Card(props: PropsType) {
	const { task, deleteTask, updateTask } = props;
	const [active, setActive] = useState(false);
	const taskHrefId = encodeURIComponent(task.id);

	const asideRef = useOutside(() => {
		setActive(false);
	});

	function getStatusColor(color: string) {
		if ('TO DO' === color) return 'text-red-500';
		if ('DOING' === color) return 'text-orange-400';
		if ('DONE' === color) return 'text-emerald-500';
	}

	function getUpdateStatus(status: string): string[] {
		if ('TO DO' === status) return ['DOING', 'DONE'];
		if ('DOING' === status) return ['TO DO', 'DONE'];
		return ['TO DO', 'DOING'];
	}

	function getStatus(state: string): 'TO DO' | 'DOING' | 'DONE' {
		if ('TO DO' === state) return 'TO DO';
		if ('DOING' === state) return 'DOING';
		return 'DONE';
	}

	return (
		<div className="flex">
			<div className="flex-auto grid items-center grid-cols-9 gap-4 box-border-shadow bg-secondary py-2 px-4 rounded-s-md">
				<div className="col-span-6 flex flex-col md:col-span-5 lg:col-span-6">
					<h3 className="font-medium text-title max-w-[640px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
						{task.title}
					</h3>
					<span className="inline-block max-w-[640px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
						{task.description}
					</span>
				</div>
				<div className="hidden md:flex flex-col col-span-2">
					<span className="font-medium text-title">Date</span>
					<span className="inline-block max-w-[640px] w-full overflow-hidden text-ellipsis whitespace-nowrap">
						{moment(task.date).format('MMMM D, YYYY')}
					</span>
				</div>
				<div className="tooltip-container cursor-pointer flex items-center text-xs sm:text-base flex-col col-span-2 lg:col-span-1 relative">
					<span className="font-medium hidden sm:inline text-title">Status</span>
					<div>
						<span className={`font-semibold ${getStatusColor(task.status)}`}>
							{task.status}
						</span>
						<div className="hidden tooltip-content bg-primary-color p-2 rounded-md absolute flex-col gap-2 right-full top-1/2 -translate-y-1/2 z-20">
							{getUpdateStatus(task.status)?.map((state) => (
								<button
									type="button"
									key={state}
									className="text-white font-semibold text-nowrap text-left"
									onClick={() =>
										updateTask({ ...task, status: getStatus(state) })
									}
								>
									{state}
								</button>
							))}
						</div>
					</div>
				</div>
				<div
					ref={asideRef as LegacyRef<HTMLDivElement>}
					className="md:hidden relative col-span-1 flex justify-end"
				>
					<button
						type="button"
						onClick={() => {
							setActive(!active);
						}}
					>
						<i className="nf nf-md-dots_vertical text-primary text-2xl" />
					</button>
					{active && (
						<div className="absolute rounded-md text-2xl text-white bg-primary-color z-20 overflow-hidden flex flex-col box-border-shadow top-full right-6">
							<Link href={`/tasks/${taskHrefId}/update`} className="p-4 leading-4">
								<i className="nf nf-fa-edit" />
							</Link>
							<button
								type="button"
								className="p-4 leading-4"
								onClick={() => deleteTask(task)}
							>
								<i className="nf nf-md-delete_outline" />
							</button>
							<Link href={`/tasks/${taskHrefId}/info`} className="p-4 leading-4">
								<i className="nf nf-oct-info" />
							</Link>
						</div>
					)}
				</div>
			</div>
			<div className="hidden md:flex ml-1 box-border-shadow items-center justify-between bg-primary-color text-white text-2xl rounded-e-md">
				<Link
					href={`/tasks/${taskHrefId}/update`}
					className="p-4 leading-4 hidden md:inline"
				>
					<i className="nf nf-fa-edit" />
				</Link>
				<button
					type="button"
					className="p-4 leading-4 hidden md:inline"
					onClick={() => deleteTask(task)}
				>
					<i className="nf nf-md-delete_outline" />
				</button>
				<Link href={`/tasks/${taskHrefId}/info`} className="p-4 leading-4 hidden md:inline">
					<i className="nf nf-oct-info" />
				</Link>
			</div>
		</div>
	);
}

export default Card;

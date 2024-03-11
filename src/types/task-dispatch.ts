import { TaskType } from './task';

export type DispatchType = (dispatch: {
	type: string;
	payload: boolean | TaskType | TaskType[];
}) => void;

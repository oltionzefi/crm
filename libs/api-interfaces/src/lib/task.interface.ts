export interface Task {
	_id?: string;
	title: string;
	description: string;
	longDescription: string;
	active: boolean;
	dueDate: string;
	status: number;
}

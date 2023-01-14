import { Observable, of } from 'rxjs';

import { Task } from '@crm/api-interfaces';

export const tasks: Task[] = [
  {
    _id: 'abc',
    title: 'Finish Math Homework',
    description: 'All homework given by teacher in Math should be done',
    active: true,
    status: 'open',
  },
  {
    _id: 'cde',
    title: 'Clean code a bit ',
    description: 'Take time to clean project a bit.',
    active: true,
    status: 'open',
  },
];

export const ContactServiceMock = {
  getAll(): Observable<Task[]> {
    return of(tasks);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(task: Task): Observable<Task> {
    return of(tasks[0]);
  },
};

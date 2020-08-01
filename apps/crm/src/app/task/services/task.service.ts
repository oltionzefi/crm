import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '@crm/api-interfaces';

@Injectable()
export class TaskService {
	constructor(private readonly http: HttpClient) {}

	getAll(): Observable<Task[]> {
		return this.http.get<Task[]>('/api/tasks');
	}

	create(task: Task): Observable<Task> {
		return this.http.post<Task>('/api/tasks', task);
	}
}

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Note } from '@crm/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {
	constructor(private readonly http: HttpClient) {}

	getAll(): Observable<Note[]> {
		return this.http.get<Note[]>('/api/notes');
	}

	create(note: Note): Observable<Note> {
		return this.http.post<Note>('/api/notes', note);
	}
}

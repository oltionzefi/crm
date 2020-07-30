import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Note } from '@crm/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NoteService {
	constructor(private readonly http: HttpClient) {}

	getNotesLarge(): Observable<Note[]> {
		return this.http.get<Note[]>('/api/notes');
	}
}

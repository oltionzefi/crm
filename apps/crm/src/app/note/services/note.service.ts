import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Note } from '@crm/api-interfaces';

@Injectable()
export class NoteService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>('/api/notes');
  }

  create(note: Note): Observable<Note> {
    return this.http.post<Note>('/api/notes', note);
  }

  delete(notes: Note[]) {
    return this.http.delete('/api/notes', { body: notes });
  }
}

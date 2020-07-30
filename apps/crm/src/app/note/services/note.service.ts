import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Note } from '@crm/api-interfaces';

@Injectable()
export class NoteService {
	getNotesLarge(): Observable<Note[]> {
		return of([
			{
				_id: 'a',
				title: 'Hey there',
				description: 'Neeee',
			},
			{
				_id: 'b',
				title: 'Hey there again',
				description: 'Neeee again',
			},
		]);
	}
}

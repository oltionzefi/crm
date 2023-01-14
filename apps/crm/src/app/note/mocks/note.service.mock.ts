import { Observable, of } from 'rxjs';

import { Note } from '@crm/api-interfaces';

export const notes: Note[] = [
  {
    _id: 'abc',
    title: 'Hey dude',
    description: 'No dude is allowed here',
  },
  {
    _id: 'cde',
    title: 'Hey man',
    description: 'How are you?',
  },
];

export const NoteServiceMock = {
  getAll(): Observable<Note[]> {
    return of(notes);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(note: Note): Observable<Note> {
    return of(notes[0]);
  },
};

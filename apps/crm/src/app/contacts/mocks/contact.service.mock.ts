import { Observable, of } from 'rxjs';

import { Contact } from '@crm/api-interfaces';

export const contacts: Contact[] = [
  {
    _id: 'abc',
    firstname: 'Alex',
    lastname: 'Mustermann',
    active: true,
    email: 'alex.mustermann@mail.com',
  },
  {
    _id: 'cde',
    firstname: 'John',
    lastname: 'Doe',
    active: true,
    email: 'john.doe@mail.com',
  },
];

export const ContactServiceMock = {
  getAll(): Observable<Contact[]> {
    return of(contacts);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(task: Contact): Observable<Contact> {
    return of(contacts[0]);
  },
};

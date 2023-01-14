import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '@crm/api-interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>('/api/contacts');
  }

  create(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('/api/contacts', contact);
  }

  delete(contacts: Contact[]) {
    return this.http.delete('/api/contacts', { body: contacts });
  }
}

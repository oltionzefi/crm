import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Institution } from '@crm/api-interfaces';

@Injectable({
	providedIn: 'root',
})
export class InstitutionService {
	constructor(private readonly http: HttpClient) {}

	getAll(): Observable<Institution[]> {
		return this.http.get<Institution[]>('/api/institutions');
	}

	create(institution: Institution): Observable<Institution> {
		return this.http.post<Institution>('/api/institutions', institution);
	}
}

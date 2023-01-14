import { Institution } from '@crm/api-interfaces';
import { Observable, of } from 'rxjs';

export const institutions: Institution[] = [
  {
    _id: 'abc',
    title: 'Ground LLC',
    description: 'Company with operates in real estate',
    active: true,
  },
  {
    _id: 'cde',
    title: 'Floor LLC',
    description: 'Company with operates in real estate',
    active: true,
  },
];

export const InstitutionServiceMock = {
  getAll(): Observable<Institution[]> {
    return of(institutions);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(institution: Institution): Observable<Institution> {
    return of(institutions[0]);
  },
};

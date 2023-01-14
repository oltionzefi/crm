import { TestBed, async } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { InstitutionService } from './institution.service';

describe('InstitutionService', () => {
  let service: InstitutionService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InstitutionService],
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(InstitutionService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    http.verify();
  });
});

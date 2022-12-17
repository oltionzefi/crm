import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoaderInterceptor', () => {
  let service: LoaderInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoaderInterceptor],
    });
    service = TestBed.inject(LoaderInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

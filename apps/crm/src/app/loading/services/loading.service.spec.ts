import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be have isLoading as false', () => {
    service.isLoading.subscribe((value: boolean) => {
      expect(value).toBeFalsy();
    });
  });

  it('should be change behavious of isLoading to true', () => {
    service.isLoading.next(true);
    service.isLoading.subscribe((value: boolean) => {
      expect(value).toBeTruthy();
    });
  });
});

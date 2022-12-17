import { TestBed, async } from '@angular/core/testing';

import { TaskService } from './task.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaskService', () => {
  let service: TaskService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService],
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(TaskService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    http.verify();
  });
});

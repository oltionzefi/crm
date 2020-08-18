import { TestBed } from '@angular/core/testing';

import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
	let service: LoaderInterceptor;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LoaderInterceptor],
		});
		service = TestBed.inject(LoaderInterceptor);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});

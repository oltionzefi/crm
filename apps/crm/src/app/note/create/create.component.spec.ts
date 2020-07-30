import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NoteService } from '../services';
import { NoteServiceMock } from '../mocks';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

describe('CreateComponent', () => {
	let component: CreateComponent;
	let fixture: ComponentFixture<CreateComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([]),
				ToolbarModule,
				InputTextModule,
				InputTextareaModule,
				ReactiveFormsModule,
				ButtonModule,
			],
			declarations: [CreateComponent],
			providers: [
				{
					provide: NoteService,
					useValue: NoteServiceMock,
				},
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

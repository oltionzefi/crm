import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';

import { ListComponent } from './list.component';
import { TaskService } from '../services';
import { TaskServiceMock } from '../mocks';
import { ActivatedRouteMock } from '../../mocks';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        TableModule,
      ],
      declarations: [ListComponent],
      providers: [
        {
          provide: TaskService,
          useValue: TaskServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: ActivatedRouteMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

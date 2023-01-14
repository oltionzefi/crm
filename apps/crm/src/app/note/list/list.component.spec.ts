import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { NoteService } from '../services';
import { NoteServiceMock } from '../mocks';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ActivatedRouteMock } from '../../mocks';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        TableModule,
      ],
      providers: [
        {
          provide: NoteService,
          useValue: NoteServiceMock,
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
    component.splitButtons = [
      { label: 'Delete', icon: 'pi pi-trash' },
      { label: 'Download', icon: 'pi pi-download' },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

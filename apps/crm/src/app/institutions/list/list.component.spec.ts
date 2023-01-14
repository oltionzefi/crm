import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { ListComponent } from './list.component';
import { TableModule } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';

import { ActivatedRouteMock } from '../../mocks';
import { InstitutionService } from '../services';
import { InstitutionServiceMock } from '../mocks';

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
          provide: InstitutionService,
          useValue: InstitutionServiceMock,
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

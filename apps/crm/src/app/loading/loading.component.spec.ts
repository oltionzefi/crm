import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingComponent } from './loading.component';
import { By } from '@angular/platform-browser';
import { LoadingService } from './services/loading.service';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let service: LoadingService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProgressSpinnerModule],
      declarations: [LoadingComponent],
      providers: [LoadingService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(LoadingService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render loading spinner', () => {
    const spinner = fixture.debugElement.query(By.css('p-progressSpinner'));
    expect(spinner).toBeFalsy();
  });

  it('should render spinner when loading did change to true', fakeAsync(() => {
    service.isLoading.next(true);
    tick();
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('p-progressSpinner')).nativeElement;

    expect(spinner).toBeTruthy();
  }));

  it('should stop rendering spinner when loading did change to false', fakeAsync(() => {
    service.isLoading.next(false);
    tick();
    fixture.detectChanges();
    const spinner = fixture.debugElement.query(By.css('p-progressSpinner'));

    expect(spinner).toBeFalsy();
  }));
});

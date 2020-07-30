import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [HttpClientModule, TabMenuModule, RouterTestingModule],
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});
});

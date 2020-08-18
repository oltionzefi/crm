import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { LoadingModule, LoaderInterceptor } from './loading';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		TabMenuModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		LoadingModule,
	],
	providers: [
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}

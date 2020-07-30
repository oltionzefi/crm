import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule],
	providers: [AuthGuard],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ListComponent } from './list/list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ContactService } from './services';

@NgModule({
	declarations: [ListComponent],
	imports: [
		CommonModule,
		ContactsRoutingModule,
		ToolbarModule,
		ButtonModule,
		SplitButtonModule,
	],
	providers: [ContactService],
})
export class ContactsModule {}

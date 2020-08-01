import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
	declarations: [ListComponent],
	imports: [CommonModule, ContactsRoutingModule],
})
export class ContactsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteRoutingModule } from './note-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
	declarations: [ListComponent],
	imports: [CommonModule, NoteRoutingModule],
})
export class NoteModule {}

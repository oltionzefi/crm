import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NoteRoutingModule } from './note-routing.module';
import { ListComponent } from './list/list.component';
import { TableModule } from 'primeng/table';
import { NoteService } from './services/note.service';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
	declarations: [ListComponent, CreateComponent],
	imports: [
		CommonModule,
		NoteRoutingModule,
		ToolbarModule,
		TableModule,
		ButtonModule,
		SplitButtonModule,
		ReactiveFormsModule,
		InputTextModule,
		InputTextareaModule,
	],
	providers: [NoteService],
})
export class NoteModule {}

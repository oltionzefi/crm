import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { NoteRoutingModule } from './note-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NoteService } from './services/note.service';

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

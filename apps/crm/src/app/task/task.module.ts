import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { ListComponent } from './list/list.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskService } from './services';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  providers: [TaskService],
})
export class TaskModule {}

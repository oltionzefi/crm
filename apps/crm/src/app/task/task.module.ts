import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TaskRoutingModule } from './task-routing.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TaskService } from './services';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, TaskRoutingModule, ToolbarModule, ButtonModule, SplitButtonModule],
  providers: [TaskService],
})
export class TaskModule {}

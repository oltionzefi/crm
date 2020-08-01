import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
	declarations: [ListComponent],
	imports: [CommonModule, TaskRoutingModule],
})
export class TaskModule {}

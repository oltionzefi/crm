import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { InstitutionsRoutingModule } from './institutions-routing.module';

@NgModule({
	declarations: [ListComponent],
	imports: [CommonModule, InstitutionsRoutingModule],
})
export class InstitutionsModule {}

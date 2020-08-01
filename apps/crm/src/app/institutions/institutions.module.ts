import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { InstitutionsRoutingModule } from './institutions-routing.module';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InstitutionService } from './services';

@NgModule({
	declarations: [ListComponent],
	imports: [
		CommonModule,
		InstitutionsRoutingModule,
		ToolbarModule,
		ButtonModule,
		SplitButtonModule,
	],
	providers: [InstitutionService],
})
export class InstitutionsModule {}

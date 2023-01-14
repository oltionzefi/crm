import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { ListComponent } from './list/list.component';
import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionService } from './services';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    InstitutionsRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    ReactiveFormsModule,
    InputTextModule,
  ],
  providers: [InstitutionService],
})
export class InstitutionsModule {}

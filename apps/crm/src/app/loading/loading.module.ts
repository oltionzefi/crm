import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingService } from './services/loading.service';

@NgModule({
	declarations: [LoadingComponent],
	imports: [CommonModule, ProgressSpinnerModule],
	providers: [LoadingService],
})
export class LoadingModule {}

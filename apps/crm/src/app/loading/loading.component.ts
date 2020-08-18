import { Component } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
	selector: 'crm-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
	loading = false;

	constructor(private readonly loadingService: LoadingService) {
		this.loadingService.isLoading.subscribe((isLoading: boolean) => {
			this.loading = isLoading;
		});
	}
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@crm/api-interfaces';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'crm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	hello$ = this.http.get<Message>('/api/hello');
	constructor(private http: HttpClient) {}

	menuItems: MenuItem[];

	activeItem: MenuItem;

	ngOnInit(): void {
		this.menuItems = [
			{
				label: 'Contacts',
				icon: 'pi pi-fw pi-user',
				routerLink: '/contacts',
			},
			{
				label: 'Tasks',
				icon: 'pi pi-fw pi-ticket',
				routerLink: '/tasks',
			},
			{ label: 'Notes', icon: 'pi pi-fw pi-file', routerLink: '/notes' },
			{
				label: 'Institutions',
				icon: 'pi pi-fw pi-briefcase',
				routerLink: '/institutions',
			},
		];
	}
}

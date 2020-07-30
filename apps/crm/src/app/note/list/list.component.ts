import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { NoteService } from '../services';
import { Note } from '@crm/api-interfaces';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'crm-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	notes: Note[];

	selectedNotes: Note[];

	splitButtons: MenuItem[];

	loading = true;

	@ViewChild('dt') table: Table;

	constructor(
		private readonly notesService: NoteService,
		private readonly router: Router,
		private readonly route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.notesService.getAll().subscribe((notes: Note[]) => {
			this.notes = notes;
			this.loading = false;
		});

		this.splitButtons = [
			{ label: 'Delete', icon: 'pi pi-trash' },
			{ label: 'Download', icon: 'pi pi-download' },
		];
	}

	createNote(): void {
		this.router.navigate(['create'], { relativeTo: this.route });
	}
}

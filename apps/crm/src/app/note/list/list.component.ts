import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { NoteService } from '../services/note.service';
import { Note } from '@crm/api-interfaces';
import { MenuItem } from 'primeng/api';

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

	constructor(private readonly notesService: NoteService) {}

	ngOnInit() {
		this.notesService.getNotesLarge().subscribe((notes: Note[]) => {
			this.notes = notes;
			this.loading = false;
		});

		this.splitButtons = [
			{ label: 'Delete', icon: 'pi pi-trash' },
			{ label: 'Download', icon: 'pi pi-download' },
		];
	}
}

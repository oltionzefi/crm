import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { NoteService } from '../services/note.service';

interface Note {
	title: string;
	description: string;
}

@Component({
	selector: 'crm-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	notes: Note[];

	selectedNotes: Note[];

	loading: boolean = true;

	@ViewChild('dt') table: Table;

	constructor(private readonly notesService: NotesService) {}

	ngOnInit() {
		this.notesService.getNotesLarge().then(notes => {
			this.notes = notes;
			this.loading = false;
		});
	}
}

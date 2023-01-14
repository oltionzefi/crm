import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Note } from '@crm/api-interfaces';
import { NoteService } from '../services';

@Component({
  selector: 'crm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly notesService = inject(NoteService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  notes$: Observable<Note[]>;
  selectedNotes: Note[];
  splitButtons: MenuItem[];

  loading = true;
  @ViewChild('dt') table: Table;

  get showDelete(): boolean {
    return !!(this.selectedNotes && this.selectedNotes.length);
  }

  ngOnInit(): void {
    this.updateNotes();
    this.splitButtons = [
      { label: 'Delete', icon: 'pi pi-trash' },
      { label: 'Download', icon: 'pi pi-download' },
    ];
  }

  createNote(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  deleteNotes(): void {
    this.notesService.delete(this.selectedNotes).subscribe(() => {
      this.updateNotes();
      this.selectedNotes = [];
    });
  }

  private updateNotes(): void {
    this.notes$ = this.notesService.getAll();
    this.loading = false;
  }
}

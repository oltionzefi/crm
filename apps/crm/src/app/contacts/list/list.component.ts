import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table';

import { Contact } from '@crm/api-interfaces';
import { ContactService } from '../services';

@Component({
  selector: 'crm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly contactService = inject(ContactService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  contacts$: Observable<Contact[]>;
  selectedContacts: Contact[];
  splitButtons: MenuItem[];

  loading = true;
  @ViewChild('dt') table: Table;

  get showDelete(): boolean {
    return !!(this.selectedContacts && this.selectedContacts.length);
  }

  ngOnInit(): void {
    this.updateContacts();
    this.splitButtons = [
      { label: 'Delete', icon: 'pi pi-trash' },
      { label: 'Download', icon: 'pi pi-download' },
    ];
  }

  deleteContacts(): void {
    this.contactService.delete(this.selectedContacts).subscribe(() => {
      this.updateContacts();
      this.selectedContacts = [];
    });
  }

  private updateContacts(): void {
    this.contacts$ = this.contactService.getAll();
    this.loading = false;
  }
}

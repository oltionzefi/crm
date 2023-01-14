import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table';

import { Institution } from '@crm/api-interfaces';
import { InstitutionService } from '../services';

@Component({
  selector: 'crm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly institutionService = inject(InstitutionService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  institutions$: Observable<Institution[]>;
  selectedInstitutions: Institution[];
  splitButtons: MenuItem[];

  loading = true;
  @ViewChild('dt') table: Table;

  get showDelete(): boolean {
    return !!(this.selectedInstitutions && this.selectedInstitutions.length);
  }

  ngOnInit(): void {
    this.updateInstitutions();
    this.splitButtons = [
      { label: 'Delete', icon: 'pi pi-trash' },
      { label: 'Download', icon: 'pi pi-download' },
    ];
  }

  deleteInstitutions(): void {
    this.institutionService.delete(this.selectedInstitutions).subscribe(() => {
      this.updateInstitutions();
      this.selectedInstitutions = [];
    });
  }

  private updateInstitutions(): void {
    this.institutions$ = this.institutionService.getAll();
    this.loading = false;
  }
}

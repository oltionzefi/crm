import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Table } from 'primeng/table';

import { Task } from '@crm/api-interfaces';
import { TaskService } from '../services';

@Component({
  selector: 'crm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  private readonly taskService = inject(TaskService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  tasks$: Observable<Task[]>;
  selectedTasks: Task[];
  splitButtons: MenuItem[];

  loading = true;
  @ViewChild('dt') table: Table;

  get showDelete(): boolean {
    return !!(this.selectedTasks && this.selectedTasks.length);
  }

  ngOnInit(): void {
    this.updateTasks();
    this.splitButtons = [
      { label: 'Delete', icon: 'pi pi-trash' },
      { label: 'Download', icon: 'pi pi-download' },
    ];
  }

  deleteTasks(): void {
    this.taskService.delete(this.selectedTasks).subscribe(() => {
      this.updateTasks();
      this.selectedTasks = [];
    });
  }

  private updateTasks(): void {
    this.tasks$ = this.taskService.getAll();
    this.loading = false;
  }
}

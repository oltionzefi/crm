import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'crm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  splitButtons: MenuItem[];
}

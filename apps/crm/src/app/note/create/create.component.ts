import { Component } from '@angular/core';
import { NoteFormGroup } from '../form-group';
import { NoteService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  createEventFormGroup: NoteFormGroup = new NoteFormGroup();

  constructor(private readonly notesService: NoteService, private readonly router: Router) {}

  submit(): void {
    if (this.createEventFormGroup.valid) {
      this.notesService.create(this.createEventFormGroup.value).subscribe(
        () => this.router.navigate(['/notes']),
        err => console.log(err),
      );
    }
  }

  closeToolbar(): void {
    this.router.navigate(['/notes']);
  }
}

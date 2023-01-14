import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Note } from '@crm/api-interfaces';

export class NoteFormGroup extends FormGroup {
  constructor(data?: Note) {
    super({
      title: new FormControl(data?.title || '', [Validators.required]),
      description: new FormControl(data?.description || '', [Validators.required]),
    });
  }
}

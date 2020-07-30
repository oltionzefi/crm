import { NoteFormGroup } from './create.form-group';
import { notes } from '../mocks';

describe('NoteFormGroup', () => {
	let formGroup: NoteFormGroup;

	beforeEach(() => {
		formGroup = new NoteFormGroup();
	});

	it('should not be a valid form', () => {
		expect(formGroup.valid).toBeFalsy();
	});

	it('should have title & description with empty values', () => {
		expect(formGroup.get('title').value).toBe('');
		expect(formGroup.get('description').value).toBe('');
	});

	it('should be valid only after filling the values', () => {
		formGroup.get('title').setValue('No, this can be');
		formGroup.get('description').setValue('This is nothing!');
		expect(formGroup.valid).toBeTruthy();
	});

	describe('when creating form group with data', () => {
		beforeEach(() => {
			formGroup = new NoteFormGroup(notes[0]);
		});

		it('should be a valid form', () => {
			expect(formGroup.valid).toBeTruthy();
		});

		it('should have title & description with value', () => {
			expect(formGroup.get('title').value).toBe('Hey dude');
			expect(formGroup.get('description').value).toBe(
				'No dude is allowed here',
			);
		});
	});
});

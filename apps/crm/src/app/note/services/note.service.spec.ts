import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteService } from './note.service';
import { Note } from '@crm/api-interfaces';

describe('NoteService', () => {
  let service: NoteService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NoteService],
    });
  }));

  beforeEach(() => {
    service = TestBed.inject(NoteService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the notes', () => {
    const notes: Note[] = [
      {
        title: 'Hey dude',
        description: 'No dude is allowed here',
      },
      {
        title: 'Hey man',
        description: 'How are you?',
      },
    ];
    service.getAll().subscribe((nts: Note[]) => {
      expect(nts.length).toBe(2);
      expect(nts[0].title).toBe('Hey dude');
      expect(nts[1].description).toBe('How are you?');
    });

    const req = http.expectOne(() => true);
    expect(req.request.method).toBe('GET');
    req.flush(notes);
  });

  it('should create a note', () => {
    const note: Note = {
      _id: 'abc',
      title: 'Noooo it is not about you',
      description: 'Lets try to do something else',
    };

    service.create(note).subscribe((nt: Note) => {
      expect(nt._id).toBe('abc');
      expect(nt.title).toBe('Noooo it is not about you');
    });

    const req = http.expectOne(() => true);
    expect(req.request.method).toBe('POST');
    req.flush(note);
  });

  afterEach(() => {
    http.verify();
  });
});

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from '../models';

@Injectable()
export class NotesRepository {
  constructor(@InjectModel('Note') private noteModel: Model<Note>) {}

  async findAll(): Promise<Note[]> {
    return this.noteModel.find();
  }

  async findNoteByUrl(noteUrl: string): Promise<Note> {
    return this.noteModel.findOne({ url: noteUrl });
  }

  // This should return a promise
  updateNote(noteId: string, changes: Partial<Note>) {
    return this.noteModel.findOneAndUpdate({ _id: noteId }, changes, {
      new: true,
    });
  }

  deleteNote(noteId: string) {
    return this.noteModel.deleteOne({ _id: noteId });
  }

  async addNote(note: Partial<Note>): Promise<Note> {
    if (!('active' in note)) {
      note.active = true;
    }

    const newEntity = new this.noteModel(note);

    await newEntity.save();

    return newEntity;
  }
}

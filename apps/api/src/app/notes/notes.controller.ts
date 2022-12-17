import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  BadRequestException,
  Delete,
} from '@nestjs/common';
import { AuthGuard } from '../guards';
import { NotesRepository } from './repositories';
import { Note } from './models';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
  constructor(private notesDB: NotesRepository) {}

  @Post()
  @UseGuards(AuthGuard)
  async createNote(@Body() note: Note): Promise<Note> {
    return this.notesDB.addNote(note);
  }

  @Get()
  async findAllNotes(): Promise<Note[]> {
    return this.notesDB.findAll();
  }

  @Get(':noteUrl')
  async findNoteByUrl(@Param('noteUrl') noteUrl: string) {
    const note = await this.notesDB.findNoteByUrl(noteUrl);

    if (!note) {
      throw new NotFoundException('Could not find note for url' + noteUrl);
    }
  }

  @Put(':noteId')
  @UseGuards(AuthGuard)
  async updateNote(@Param('noteId') noteId: string, @Body() changes: Note): Promise<Note> {
    if (changes._id) {
      throw new BadRequestException('Can not update entity id');
    }

    return this.notesDB.updateNote(noteId, changes);
  }

  @Delete(':noteId')
  @UseGuards(AuthGuard)
  async deleteEntity(@Param('noteId') noteId: string) {
    return this.notesDB.deleteNote(noteId);
  }

  @Delete()
  @UseGuards(AuthGuard)
  async deleteBulk(@Body() notes: Note[]) {
    return this.notesDB.deleteBulk(notes);
  }
}

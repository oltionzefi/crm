import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Note, NoteSchema } from './schemas';
import { NotesController } from './notes.controller';
import { NotesRepository } from './repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }])],
  controllers: [NotesController],
  providers: [NotesRepository],
})
export class NotesModule {}

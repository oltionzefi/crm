import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Note extends Document {
  @Prop({
    type: String,
  })
  url?: string;

  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
  })
  longDescription?: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  active: boolean;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

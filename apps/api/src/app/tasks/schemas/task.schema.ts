import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Task extends Document {
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

  @Prop({
    type: Date,
  })
  dueDate: Date;

  @Prop({
    type: String,
    enum: ['open', 'close', 'done'],
    default: 'open',
  })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

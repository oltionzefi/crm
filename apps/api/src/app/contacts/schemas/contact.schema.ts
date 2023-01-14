import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import * as mongoose from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Contact extends Document {
  @Prop({
    type: String,
  })
  url?: string;

  @Prop({
    type: String,
    required: true,
  })
  firstname: string;

  @Prop({
    type: String,
    required: true,
  })
  lastname: string;

  @Prop({
    type: String,
    required: true,
  })
  email: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  active: boolean;
}
export const ContactSchema = SchemaFactory.createForClass(Contact);

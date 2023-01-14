import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Institution extends Document {
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
    type: Boolean,
    default: true,
  })
  active: boolean;
}
export const InstitutionSchema = SchemaFactory.createForClass(Institution);

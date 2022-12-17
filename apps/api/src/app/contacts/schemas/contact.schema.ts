import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
  url: String,
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  active: Boolean,
});

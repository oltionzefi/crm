import * as mongose from 'mongoose';

export interface IUser extends mongose.Document {
  email: string;
  roles: string[];
  passwordHash: string;
}

export const UserSchema = new mongose.Schema({
  email: String,
  roles: Array,
  passwordHash: String,
});

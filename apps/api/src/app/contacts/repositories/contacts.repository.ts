import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from '../models';

@Injectable()
export class ContactsRepository {
  constructor(@InjectModel('Contact') private contactModel: Model<Contact>) {}

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find();
  }

  async findContactByUrl(contactUrl: string): Promise<Contact> {
    return this.contactModel.findOne({ url: contactUrl });
  }

  // This should return a promise
  updateContact(contactId: string, changes: Partial<Contact>) {
    return this.contactModel.findOneAndUpdate({ _id: contactId }, changes, {
      new: true,
    });
  }

  deleteContact(contactId: string) {
    return this.contactModel.deleteOne({ _id: contactId });
  }

  async addContact(contact: Partial<Contact>): Promise<Contact> {
    const newEntity = new this.contactModel(contact);

    await newEntity.save();

    return newEntity;
  }
}

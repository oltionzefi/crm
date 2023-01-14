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
import { ContactsRepository } from './repositories';
import { Contact } from './models';

@Controller('contacts')
@UseGuards(AuthGuard)
export class ContactsController {
  constructor(private contactsRepository: ContactsRepository) {}

  @Post()
  @UseGuards(AuthGuard)
  async createContact(@Body() contact: Contact): Promise<Contact> {
    return this.contactsRepository.addContact(contact);
  }

  @Get()
  async findAllContacts(): Promise<Contact[]> {
    return this.contactsRepository.findAll();
  }

  @Get(':contactUrl')
  async findContactByUrl(@Param('contactUrl') contactUrl: string) {
    const contact = await this.contactsRepository.findContactByUrl(contactUrl);

    if (!contact) {
      throw new NotFoundException('Could not find contact for url' + contactUrl);
    }
  }

  @Put(':contactId')
  @UseGuards(AuthGuard)
  async updateContact(
    @Param('contactId') contactId: string,
    @Body() changes: Contact,
  ): Promise<Contact> {
    if (changes._id) {
      throw new BadRequestException('Can not update entity id');
    }

    return this.contactsRepository.updateContact(contactId, changes);
  }

  @Delete(':contactId')
  @UseGuards(AuthGuard)
  async deleteEntity(@Param('contactId') contactId: string) {
    return this.contactsRepository.deleteContact(contactId);
  }
}

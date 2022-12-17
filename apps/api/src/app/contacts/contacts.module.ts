import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactSchema } from './schemas';
import { ContactsController } from './contacts.controller';
import { ContactsRepository } from './repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }])],
  controllers: [ContactsController],
  providers: [ContactsRepository],
})
export class ContactsModule {}

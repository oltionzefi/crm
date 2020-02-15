import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InstitutionSchema } from './schemas';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsRepository } from './repositories';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Institution', schema: InstitutionSchema },
		]),
	],
	controllers: [InstitutionsController],
	providers: [InstitutionsRepository],
})
export class InstitutionsModule {}

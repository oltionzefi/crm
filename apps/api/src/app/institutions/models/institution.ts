import { IsBoolean, IsString, IsInt, IsMongoId } from 'class-validator';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Institution extends Document {
	@IsString()
	@IsMongoId()
	_id: string;

	@IsString({ always: false }) url: string;

	@ApiProperty({
		description: 'Title for institution',
		type: String,
	})
	@IsString()
	title: string;

	@ApiProperty({
		description: 'Description for institution',
		type: String,
	})
	@IsString()
	description: string;

	@ApiProperty({
		description: 'Institution can be active or deleted',
		type: Boolean,
		required: false,
	})
	@IsBoolean()
	active: boolean;
}

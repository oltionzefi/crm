import { IsBoolean, IsString, IsInt, IsMongoId } from 'class-validator';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Contact extends Document {
	@IsString()
	@IsMongoId()
	_id: string;
	@IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
	@IsString({ always: false }) url: string;

	@ApiProperty({
		description: 'Firstname of a contact',
		type: String,
	})
	@IsString()
	firstname: string;

	@ApiProperty({
		description: 'Lastname of a contact',
		type: String,
	})
	@IsString()
	lastname: string;

	@ApiProperty({
		description: 'Email of a contact',
		type: String,
	})
	@IsString()
	email: string;

	@ApiProperty({
		description: 'Contact can be active or deleted',
		type: Boolean,
		required: false,
	})
	@IsBoolean()
	active: boolean;
}
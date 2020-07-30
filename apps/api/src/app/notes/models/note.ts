import { IsBoolean, IsString, IsInt, IsMongoId } from 'class-validator';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Note extends Document {
	@IsString()
	@IsMongoId()
	_id: string;

	@IsString({ always: false }) url: string;

	@ApiProperty({
		description: 'Title for note',
		type: String,
	})
	@IsString()
	title: string;

	@ApiProperty({
		description: 'Description for the note',
		type: String,
	})
	@IsString()
	description: string;

	@ApiProperty({
		description: 'Long description for the note',
		type: String,
		required: false,
	})
	@IsString()
	longDescriptioon: string;

	@ApiProperty({
		description: 'Note can be active or not',
		type: Boolean,
		required: false,
	})
	@IsBoolean()
	active: boolean;
}

import { IsBoolean, IsString, IsInt, IsMongoId, IsDate } from 'class-validator';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Task extends Document {
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
		description: 'Description for a note',
		type: String,
	})
	@IsString()
	description: string;

	@ApiProperty({
		description: 'Long description for a note',
		type: String,
		required: false,
	})
	@IsString()
	longDescriptioon: string;

	@ApiProperty({
		description: 'Contact can be active or deleted',
		type: Boolean,
		required: false,
	})
	@IsBoolean()
	active: boolean;

	@ApiProperty({
		description: 'Due date for task',
		type: Date,
		required: true,
	})
	@IsDate()
	dueDate: Date;

	@ApiProperty({
		description: 'Different statuses',
		type: Number,
		required: false,
	})
	@IsInt()
	status: number;
}

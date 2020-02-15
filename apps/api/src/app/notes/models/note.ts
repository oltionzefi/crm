import { IsBoolean, IsString, IsInt, IsMongoId } from 'class-validator';
import { Document } from 'mongoose';

export class Note extends Document {
	@IsString()
	@IsMongoId()
	_id: string;
	@IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
	@IsString({ always: false }) url: string;
	@IsString() title: string;
	@IsString() description: string;
	@IsString() longDescriptioon: string;
	@IsBoolean() active: boolean;
}

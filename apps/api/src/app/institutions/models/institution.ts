import { IsBoolean, IsString, IsInt, IsMongoId } from 'class-validator';
import { Document } from 'mongoose';

export class Institution extends Document {
	@IsString()
	@IsMongoId()
	_id: string;
	@IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
	@IsString({ always: false }) url: string;
	@IsString() title: string;
	@IsString() description: string;
	@IsBoolean() active: boolean;
}

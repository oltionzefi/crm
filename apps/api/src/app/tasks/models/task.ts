import { IsBoolean, IsString, IsInt, IsMongoId, IsDate } from 'class-validator';
import { Document } from 'mongoose';

export class Task extends Document {
	@IsString()
	@IsMongoId()
	_id: string;
	@IsInt({ message: 'seqNo must be numeric' }) seqNo: number;
	@IsString({ always: false }) url: string;
	@IsString() title: string;
	@IsString() description: string;
	@IsString() longDescriptioon: string;
	@IsBoolean() active: boolean;
	@IsDate() dueDate: Date;
	@IsInt() status: number;
}

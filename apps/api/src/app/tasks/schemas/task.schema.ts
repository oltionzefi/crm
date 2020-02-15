import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
	seqNo: {
		type: Number,
		required: true,
	},
	url: String,
	title: String,
	description: String,
	longDescription: String,
	active: Boolean,
	dueDate: Date,
	status: String,
});

import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
	url: String,
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	longDescription: String,
	active: Boolean,
	dueDate: {
		type: Date,
		required: true,
	},
	status: String,
});

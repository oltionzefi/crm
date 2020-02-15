import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
	seqNo: {
		type: Number,
		required: true,
	},
	url: String,
	title: String,
	description: String,
	longDescription: String,
	active: Boolean,
});

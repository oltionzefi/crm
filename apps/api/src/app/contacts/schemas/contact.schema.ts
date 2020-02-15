import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
	seqNo: {
		type: Number,
		required: true,
	},
	url: String,
	firstname: String,
	lastname: String,
	email: String,
	active: Boolean,
});

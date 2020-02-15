import * as mongoose from 'mongoose';

export const InstitutionSchema = new mongoose.Schema({
	seqNo: {
		type: Number,
		required: true,
	},
	url: String,
	title: String,
	description: String,
	active: Boolean,
});

import * as mongoose from 'mongoose';

export const InstitutionSchema = new mongoose.Schema({
	url: String,
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	active: Boolean,
});

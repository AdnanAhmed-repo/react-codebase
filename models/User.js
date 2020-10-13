const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
	bname: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},

	stripeDetails: {},

	token: {
		type: String,
		default: null,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	addedEmails: [
		{
			type: Schema.Types.ObjectId,
			ref: "email",
		},
	],
	addedDevices: [
		{
			type: Schema.Types.ObjectId,
			ref: "device",
		},
	],
	addedUrls: [
		{
			type: Schema.Types.ObjectId,
			ref: "url",
		},
	],
});

module.exports = User = mongoose.model("user", UserSchema);

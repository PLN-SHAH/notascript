const mongoose = require('mongoose');

const dictionarySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	entries: [
		{
			key: String,
			value: String
		}
	]
});

module.exports = mongoose.model('Dictionary', dictionarySchema);

const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: 'No description yet'
	},
	symbols: {
		type: [String],
		default: '*'
	},
	Domains: {
		type: [String],
		default: 'important'
	}
});

module.exports = mongoose.model('Document', documentSchema);

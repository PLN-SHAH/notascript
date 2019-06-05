require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const Document = require('./models/Document');

app.get('/documents', (req, res) => {
	Document.find()
		.then(document => res.json(document))
		.catch(err => res.json(err));
});

app.post('/documents', (req, res) => {
	Document.create(req.body)
		.then(document => res.status(201).json(document))
		.catch(err => console.error(err));
	console.log('Successful Document Update');
});

const db = 'mongodb://localhost:27017/notascript';
const port = process.env.PORT || 4000;

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error(err));

app.listen(port, err => {
	err ? console.log(err) : console.log(`Server ready on port ${port}`);
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

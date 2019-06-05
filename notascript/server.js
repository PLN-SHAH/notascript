const setupServer = require('./setup-server');
const app = setupServer();

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

export function getDocuments() {
	return fetch('/documents').then(res => res.json());
}

export function postDocument(data) {
	return fetchCard('POST', data);
}

function fetchCard(method, data, id = '') {
	return fetch('/documents/' + id, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(res => res.json());
}

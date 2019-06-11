export function getDocuments() {
	return fetch('/documents').then(res => res.json());
}

export function postDocument(data) {
	return fetchDocument('POST', data);
}

export function deleteDocument(data, id) {
	return fetchDocument('DELETE', data, id);
}

export function patchDocument(data, id) {
	return fetchDocument('PATCH', data, id);
}

function fetchDocument(method, data, id = '') {
	return fetch('/documents/' + id, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(res => res.json());
}

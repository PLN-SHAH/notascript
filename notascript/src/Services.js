export function getDocuments() {
	return fetch('/documents').then(res => res.json());
}

export function postDocument(data) {
	console.log('in postDocument');
	return fetchDocument('POST', data);
}

export function deleteDocument(data, id) {
	return fetchDocument('DELETE', data, id);
}

export function patchDocument(data, id) {
	return fetchDocument('patch', data, id);
}

export function getIndex(list, item) {
	return list.findIndex(listItem => listItem.id === item.id);
}

function fetchDocument(method, data, id = '') {
	console.log('in fetch card');
	return fetch('/documents/' + id, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(res => res.json());
}

export function getDocuments() {
	return fetch('/documents').then(res => res.json());
}

export function getDictionaries() {
	return fetch('/dictionaries').then(res => res.json());
}

export function postDocument(data) {
	return fetchDocument('POST', data);
}

export function postDictionary(data) {
	return fetchDictionary('POST', data);
}

export function deleteDocument(data, id) {
	return fetchDocument('DELETE', data, id);
}

export function deleteDictionary(data, id) {
	return fetchDictionary('DELETE', data, id);
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

function fetchDictionary(method, data, id = '') {
	return fetch('/dictionaries/' + id, {
		method,
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(res => res.json());
}

export function getIndex(list, item) {
	return list.findIndex(listItem => listItem._id === item._id);
}

export function getDictionaries() {
	return fetch('/dictionaries').then(res => res.json());
}

export function postDictionary(data) {
	return fetchDictionary('POST', data);
}

export function deleteDictionary(data, id) {
	return fetchDictionary('DELETE', data, id);
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

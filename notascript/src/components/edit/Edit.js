import React from 'react';
import Form from './Form.js';
import PropType from 'prop-types';

export default function Edit({ onFormSubmit, selectedDocument, history }) {
	function handleSubmit(document) {
		onFormSubmit({
			...document
		});
		history.push('/');
	}
	return (
		<Form onFormSubmit={handleSubmit} selectedDocument={selectedDocument} />
	);
}

Edit.propType = {
	onFormSubmit: PropType.func,
	symbols: PropType.array,
	selectedDocument: PropType.object,
	history: PropType.object
};

import React from 'react';
import Form from './Form.js';
import PropType from 'prop-types';

export default function Edit({
	onFormSubmit,
	selectedDocument,
	domains,
	history
}) {
	function handleSubmit(document) {
		onFormSubmit({
			...document
		});
		history.push('/');
	}
	return (
		<Form
			onFormSubmit={handleSubmit}
			domains={domains}
			selectedDocument={selectedDocument}
		/>
	);
}

Edit.propType = {
	onFormSubmit: PropType.func,
	domains: PropType.array,
	symbols: PropType.array,
	selectedDocument: PropType.object,
	history: PropType.object
};

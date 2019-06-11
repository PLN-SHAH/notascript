import React from 'react';
import Form from './Form.js';
import PropType from 'prop-types';

export default function Edit({
	selectedDocument,
	onFormSubmit,
	domainList,
	history
}) {
	console.log('selectedDocument in edit', selectedDocument);
	function handleSubmit(doc) {
		onFormSubmit({
			...doc
		});
		history.push('/');
	}
	return (
		<Form
			onFormSubmit={handleSubmit}
			domainList={domainList}
			selectedDocument={selectedDocument}
		/>
	);
}

Edit.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array,
	symbols: PropType.array
};

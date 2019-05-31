import React from 'react';
import Form from '../app/Form.js';
import PropType from 'prop-types';

export default function Edit({
	selectedDocument,
	onFormSubmit,
	domainList,
	history,
	symbols
}) {
	function handleSubmit(doc) {
		onFormSubmit({
			...doc,
			symbols
		});
		history.push('/');
	}
	return (
		<Form
			onFormSubmit={handleSubmit}
			domainList={domainList}
			selectedDocument={selectedDocument}
			symbols={symbols}
		/>
	);
}

Edit.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array,
	symbols: PropType.array
};

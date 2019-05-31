import React from 'react';
import EditForm from './EditForm.js';
import PropType from 'prop-types';

export default function Edit({
	selectedDocument,
	onFormSubmit,
	domainList,
	history,
	symbols
}) {
	function handleSubmit(doc) {
		console.log(doc, 'after edit submit');
		onFormSubmit({
			...doc,
			symbols,
			id: selectedDocument.id
		});
		history.push('/');
	}
	return (
		<EditForm
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

import React from 'react';
import EditForm from './EditForm.js';
import PropType from 'prop-types';

export default function Edit({
	selectedDocument,
	onFormSubmit,
	domainList,
	history
}) {
	function handleSubmit(doc) {
		onFormSubmit({
			...doc
			//symbols
		});
		//console.log(symbols, 'in edit');
		history.push('/');
	}
	return (
		<EditForm
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

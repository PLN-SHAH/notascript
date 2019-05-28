import React from 'react';
import EditForm from './EditForm';
import PropType from 'prop-types';

export default function EditDocument({
	selectedDocument,
	onFormSubmit,
	domainList
}) {
	return (
		<EditForm
			selectedDocument={selectedDocument}
			onFormSubmit={onFormSubmit}
			domainList={domainList}
		/>
	);
}

EditDocument.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array
};

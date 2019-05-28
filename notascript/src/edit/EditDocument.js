import React from 'react';
import Edit from './Edit';
import PropType from 'prop-types';

export default function EditDocument({
	selectedDocument,
	onFormSubmit,
	domainList
}) {
	return (
		<Edit
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

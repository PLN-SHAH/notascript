import React from 'react';
import Edit from './Edit';
import PropType from 'prop-types';

export default function EditDocument({
	selectedDocument,
	onFormSubmit,
	domainList,
	history
}) {
	return (
		<Edit
			selectedDocument={selectedDocument}
			onFormSubmit={onFormSubmit}
			domainList={domainList}
			history={history}
			symbols={selectedDocument.symbols}
		/>
	);
}

EditDocument.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array
};

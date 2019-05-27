import React from 'react';
import EditForm from './EditForm';
import PropType from 'prop-types';

export default function EditDocument({
	selectedDocument,
	onFormSubmit,
	props
}) {
	return (
		<EditForm
			selectedDocument={selectedDocument}
			onFormSubmit={onFormSubmit}
			{...props}
		/>
	);
}

EditDocument.propType = {
	onFormSubmit: PropType.func
};

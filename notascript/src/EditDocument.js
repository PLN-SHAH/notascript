import React from 'react';
import EditForm from './EditForm';
import PropType from 'prop-types';

export default function EditDocument({ selectedDocument }) {
	return <EditForm selectedDocument={selectedDocument} />;
}

EditDocument.propType = {
	onFormSubmit: PropType.func
};

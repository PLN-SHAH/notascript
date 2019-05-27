import React from 'react';
import Form from './Form';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit, props }) {
	return <Form onFormSubmit={onFormSubmit} {...props} />;
}

CreateDocument.propType = {
	onFormSubmit: PropType.func
};

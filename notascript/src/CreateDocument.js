import React from 'react';
import Form from './Form';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit }) {
	return <Form onFormSubmit={onFormSubmit} />;
}

CreateDocument.propType = {
	onFormSubmit: PropType.func
};

import Form from './Form.js';
import PropType from 'prop-types';
import React from 'react';

export default function DocumentCreate({ onFormSubmit, history }) {
	function handleSubmit(document) {
		onFormSubmit(document);
		history.push('/');
	}

	return <Form onFormSubmit={handleSubmit} />;
}

DocumentCreate.propType = {
	onFormSubmit: PropType.func,
	history: PropType.object
};

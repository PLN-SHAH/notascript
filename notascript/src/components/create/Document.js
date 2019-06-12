import Form from './Form.js';
import PropType from 'prop-types';
import React from 'react';

export default function DocumentCreate({ onFormSubmit, domains, history }) {
	function handleSubmit(document) {
		onFormSubmit(document);
		history.push('/');
	}

	return <Form onFormSubmit={handleSubmit} domains={domains} />;
}

DocumentCreate.propType = {
	onFormSubmit: PropType.func,
	domains: PropType.array,
	history: PropType.object
};

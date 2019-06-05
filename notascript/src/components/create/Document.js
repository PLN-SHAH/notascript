import Form from './Form.js';
import PropType from 'prop-types';
import React from 'react';

export default function DocumentCreate({ onFormSubmit, domainList, history }) {
	function handleSubmit(doc) {
		onFormSubmit(doc);
		history.push('/');
	}

	return <Form onFormSubmit={handleSubmit} domainList={domainList} />;
}

DocumentCreate.propType = {
	onFormSubmit: PropType.func,
	domainList: PropType.array
};

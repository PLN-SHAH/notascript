import React from 'react';
import CreateForm from './CreateForm.js';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit, domainList, history }) {
	function handleSubmit(doc) {
		onFormSubmit(doc);
		history.push('/');
	}

	return <CreateForm onFormSubmit={handleSubmit} domainList={domainList} />;
}

CreateDocument.propType = {
	onFormSubmit: PropType.func,
	domainList: PropType.array
};

import React from 'react';
import Form from './Form';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit, props, domainList }) {
	console.log('domainlist createdoc', domainList[0]);
	return (
		<Form onFormSubmit={onFormSubmit} {...props} domainList={domainList} />
	);
}

CreateDocument.propType = {
	onFormSubmit: PropType.func
};

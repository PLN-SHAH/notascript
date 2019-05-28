import React from 'react';
import Form from './Form';
import PropType from 'prop-types';

export default function CreateDocument({ onFormSubmit, domainList }) {
	return <Form onFormSubmit={onFormSubmit} domainList={domainList} />;
}

CreateDocument.propType = {
	onFormSubmit: PropType.func
};

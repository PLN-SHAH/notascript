import React from 'react';
import Form from './Form';

export default function CreateDocument({ onFormSubmit }) {
	return (
		<>
			<Form onFormSubmit={onFormSubmit} />
		</>
	);
}

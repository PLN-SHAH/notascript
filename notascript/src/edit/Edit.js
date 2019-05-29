import PropType from 'prop-types';
import React, { useState } from 'react';
import Form from '../create/Form.js';

export default function Edit({
	onFormSubmit,
	selectedDocument,
	domainList,
	history,
	symbols
}) {
	function handleSubmit(doc) {
		onFormSubmit({
			...doc,
			symbols
		});
		history.push('/');
	}

	return (
		<Form
			onFormSubmit={handleSubmit}
			domainList={domainList}
			selectedDocument={selectedDocument}
			history={history}
		/>
	);
}

Edit.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array
};

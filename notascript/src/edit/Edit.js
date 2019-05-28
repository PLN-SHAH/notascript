import PropType from 'prop-types';
import React, { useState } from 'react';
import Form from '../create/Form.js';

export default function Edit({ onFormSubmit, selectedDocument, domainList }) {
	const [options, setOptions] = useState([]);

	function handleOnInputChange() {
		setOptions(
			domainList.map(domain => ({
				value: domain,
				label: domain
			}))
		);
	}

	function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;
		const domains = [];
		const domainMain = form.domainSelection.value;
		const domainSecond = form.domainSelectionSecond.value;
		domains.push(domainMain);
		domains.push(domainSecond);

		onFormSubmit({
			title,
			description,
			domains
		});
	}

	return (
		<Form
			onFormSubmit={onFormSubmit}
			domainList={domainList}
			selectedDocument={selectedDocument}
			options={options}
			handleOnInputChange={handleOnInputChange}
			handleOnSubmit={handleOnSubmit}
		/>
	);
}

Edit.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array
};

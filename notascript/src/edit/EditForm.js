import styled from 'styled-components';
import PropType from 'prop-types';
import React, { useState } from 'react';
import Select from 'react-select';

import { Formular, Input, Button } from '../misc/Style.js';

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)``;
const StyledButton = styled(Button)``;

const StyledTextarea = styled.textarea`
	border: 1px solid #ddd;
	font-size: 1rem;
	margin-bottom: 10px;
	padding-left: 5px;
	font-style: italic;
	min-height: 45px;
`;

export default function EditForm({
	onFormSubmit,
	selectedDocument,
	domainList
}) {
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
		<StyledForm onSubmit={handleOnSubmit}>
			<h4>Edit document</h4>
			<StyledInput
				name='title'
				defaultValue={selectedDocument.title}
				type='text'
			/>

			<StyledTextarea
				name='description'
				defaultValue={selectedDocument.description}
				type='text'
			/>
			<Select
				name='domainSelection'
				options={options}
				onInputChange={handleOnInputChange}
			/>
			<Select
				name='domainSelectionSecond'
				options={options}
				onInputChange={handleOnInputChange}
			/>
			<StyledButton>save</StyledButton>
		</StyledForm>
	);
}

EditForm.propType = {
	onFormSubmit: PropType.func,
	selectedDocument: PropType.object,
	domainList: PropType.array
};

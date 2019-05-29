import styled from 'styled-components';
import PropType from 'prop-types';
import React, { useState } from 'react';
import Select from 'react-select';
import { Formular, Input, Button, Label, Textarea } from '../misc/Style.js';

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledTextarea = styled(Textarea)``;

const StyledSelect = styled(Select)`
	font-size: 1rem;
	margin-bottom: 10px;
	font-style: italic;
`;

export default function Form({
	onFormSubmit,
	domainList,
	selectedDocument,
	isWork
}) {
	const { title, description } = selectedDocument || {};

	function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;
		const domains = [
			form.domainSelection.value,
			form.domainSelectionSecond.value
		];

		onFormSubmit({
			title,
			description,
			domains
		});
	}

	const options = domainList.map(domain => ({
		value: domain,
		label: domain
	}));

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel>
				New Title
				<StyledInput
					name='title'
					placeholder='type title here...'
					type='text'
					defaultValue={title}
					required
				/>
			</StyledLabel>
			<StyledLabel>
				New Description
				<StyledTextarea
					name='description'
					placeholder='type description here...'
					type='text'
					defaultValue={selectedDocument && description}
					required
				/>
			</StyledLabel>

			<StyledLabel>
				Choose domains
				<StyledSelect name='domainSelection' options={options} />
				<StyledSelect name='domainSelectionSecond' options={options} />
			</StyledLabel>
			<StyledButton>save</StyledButton>
			{isWork && <StyledButton>go work</StyledButton>}
		</StyledForm>
	);
}

Form.propType = {
	onFormSubmit: PropType.func.isRequired,
	domainList: PropType.array,
	selectedDocument: PropType.object
};

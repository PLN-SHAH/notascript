import styled from 'styled-components';
import PropType from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Formular, Input, Button, Label, Textarea } from '../misc/Style.js';

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledTextarea = styled(Textarea)``;
const StyledLabelTextarea = styled(Label)`
	grid-auto-rows: 35px auto;
`;

const StyledSelect = styled(Select)`
	font-size: 1rem;
	margin-bottom: 10px;
	font-style: italic;
`;

export default function EditForm({
	onFormSubmit,
	domainList,
	selectedDocument
}) {
	const { title, description, id, symbols } = selectedDocument || {};

	function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;
		const domains = [form.domainFirst.value, form.domainSecond.value];

		onFormSubmit({
			title,
			description,
			domains,
			symbols,
			id
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
					defaultValue={selectedDocument && title}
					required
				/>
			</StyledLabel>
			<StyledLabelTextarea>
				New Description
				<StyledTextarea
					name='description'
					placeholder='type description here...'
					type='text'
					defaultValue={selectedDocument && description}
					required
				/>
			</StyledLabelTextarea>
			<div>{selectedDocument && symbols}</div>
			<StyledLabel>
				Choose domains
				<StyledSelect
					name='domainFirst'
					options={options}
					defaultValue={options[0]}
				/>
				<StyledSelect
					name='domainSecond'
					options={options}
					defaultValue={options[1]}
				/>
			</StyledLabel>
			<StyledButton>save</StyledButton>
		</StyledForm>
	);
}

EditForm.propType = {
	onFormSubmit: PropType.func.isRequired,
	domainList: PropType.array,
	selectedDocument: PropType.object
};

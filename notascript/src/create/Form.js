import styled from 'styled-components';
import PropType from 'prop-types';
import React, { useState } from 'react';
import Select from 'react-select';
import { Formular, Input, Button, Label } from '../misc/FormStyle.js';

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;

const StyledTextarea = styled.textarea`
	border: 1px solid #ddd;
	font-size: 1rem;
	margin-bottom: 10px;
	padding-left: 5px;
	font-style: italic;
	min-height: 45px;
`;

export default function Form({ onFormSubmit, domainList }) {
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
			<StyledLabel htmlFor='title'>New Title</StyledLabel>
			<StyledInput name='title' placeholder='type title here...' type='text' />

			<StyledLabel htmlFor='description'>New Description</StyledLabel>
			<StyledTextarea
				name='description'
				placeholder='type description here...'
				type='text'
			/>

			<StyledLabel htmlFor='domainSelection'>Choose domains</StyledLabel>

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
			<div>selected</div>
			<StyledButton>save</StyledButton>
		</StyledForm>
	);
}

Form.propType = {
	onFormSubmit: PropType.func,
	domainList: PropType.array
};

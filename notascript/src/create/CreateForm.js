import styled from 'styled-components';
import PropType from 'prop-types';
import React from 'react';
import Select from 'react-select';
import uid from 'uid';
import { Button } from '../misc/Style.js';

const StyledButton = styled(Button)``;

const StyledSelect = styled(Select)`
	font-size: 1rem;
	margin-top: 10px;
	height: 45px;
`;

export default function createForm({ onFormSubmit, domainList }) {
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
			id: uid()
		});
	}

	const options = domainList.map(domain => ({
		value: domain,
		label: domain
	}));

	return (
		<form onSubmit={handleOnSubmit}>
			<label htmlFor='title'>New Title</label>
			<input
				name='title'
				placeholder='type title here...'
				type='text'
				required
			/>
			<label htmlFor='description'>New Description </label>
			<textarea
				name='description'
				placeholder='type description here...'
				type='text'
				required
			/>
			<label htmlFor='domainFirst'>
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
			</label>
			<StyledButton>save</StyledButton>
		</form>
	);
}

createForm.propType = {
	onFormSubmit: PropType.func.isRequired,
	domainList: PropType.array,
	selectedDocument: PropType.object
};

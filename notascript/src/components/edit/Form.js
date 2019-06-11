import PropType from 'prop-types';
import React from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { Button, NavIcon } from '../../misc/Style.js';

const StyledButton = styled(Button)`
	background-color: #7cd365;
`;
const StyledSelect = styled(Select)`
	font-size: 1rem;
	margin-top: 10px;
	height: 45px;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	color: #7cd365;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function EditForm({
	onFormSubmit,
	domainList,
	selectedDocument
}) {
	const { title, description, id, symbols } = selectedDocument || {};
	console.log('in edit form');
	console.log('in edit form selectedDocument', selectedDocument);

	function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;
		//const domains = [form.domainFirst.value, form.domainSecond.value];

		onFormSubmit({
			title,
			description,
			/*domains,*/
			symbols,
			id
		});
	}

	const options = domainList.map(domain => ({
		value: domain,
		label: domain
	}));

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<StyledLabel htmlFor='title'>New Title</StyledLabel>
				<input
					name='title'
					placeholder='type title here...'
					type='text'
					defaultValue={selectedDocument && title}
					required
				/>
				<StyledLabel htmlFor='description'>New Description</StyledLabel>
				<textarea
					name='description'
					placeholder='type description here...'
					type='text'
					defaultValue={selectedDocument && description}
					required
				/>
				<div>{selectedDocument && symbols}</div>
				{/* <label htmlFor='domainFirst'>Choose domains</label>
			<StyledSelect
				name='domainFirst'
				options={options}
				defaultValue={options[0]}
			/>
			<StyledSelect
				name='domainSecond'
				options={options}
				defaultValue={options[1]}
			/> */}
				<StyledButton>save</StyledButton>
			</form>
			<StyledNavIcon className='fas fa-copy' />
		</>
	);
}

EditForm.propType = {
	onFormSubmit: PropType.func.isRequired,
	domainList: PropType.array,
	selectedDocument: PropType.object
};

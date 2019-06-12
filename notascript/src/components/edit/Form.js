import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavIcon } from '../../misc/Style.js';

const StyledButton = styled.button`
	background-color: #7cd365;
`;

const StyledForm = styled.form`
	height: unset;
	grid-template-rows: unset;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	color: #7cd365;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function EditForm({ onFormSubmit, domains, selectedDocument }) {
	const { title, description, _id, symbols } = selectedDocument || {};

	function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;

		onFormSubmit({
			title,
			description,
			symbols,
			_id
		});
	}

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<StyledLabel htmlFor='title'>edit title</StyledLabel>
			<input
				name='title'
				placeholder='type title here...'
				type='text'
				defaultValue={selectedDocument && title}
				required
			/>
			<StyledLabel htmlFor='description'>edit description</StyledLabel>
			<textarea
				name='description'
				placeholder='type description here...'
				type='text'
				defaultValue={selectedDocument && description}
				required
			/>
			<section>{selectedDocument && symbols}</section>
			<StyledButton>save</StyledButton>
			<StyledNavIcon className='fas fa-copy' />
		</StyledForm>
	);
}

EditForm.propType = {
	onFormSubmit: PropType.func.isRequired,
	domains: PropType.array,
	selectedDocument: PropType.object
};

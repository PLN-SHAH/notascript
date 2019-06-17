import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavIcon } from '../../misc/Style.js';

const StyledForm = styled.form`
	border-top: 5px solid #7cd365;
	grid-template-rows: auto;
	height: unset;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	color: #7cd365;
`;

const StyledButton = styled.button`
	background: #7cd365;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function FormCreate({ onFormSubmit }) {
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;

		onFormSubmit({
			title,
			description
		});
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel htmlFor='title'>New title</StyledLabel>
				<input
					name='title'
					placeholder='type title here...'
					type='text'
					required
				/>
				<StyledLabel htmlFor='description'>New description </StyledLabel>
				<textarea
					name='description'
					placeholder='type description here...'
					type='text'
					required
				/>
				<StyledButton>save</StyledButton>
			</StyledForm>
			<StyledNavIcon className='far fa-plus-square' />
		</>
	);
}

FormCreate.propType = {
	onFormSubmit: PropType.func.isRequired,
	selectedDocument: PropType.object
};

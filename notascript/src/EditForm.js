import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: grid;
	padding: 20px;
`;

const StyledInput = styled.input`
	border: 1px solid #ddd;
	font-size: 1rem;
	margin-bottom: 10px;
	padding-left: 5px;
	font-style: italic;
	height: 45px;
`;

const StyledTextarea = styled.textarea`
	border: 1px solid #ddd;
	font-size: 1rem;
	margin-bottom: 10px;
	padding-left: 5px;
	font-style: italic;
	min-height: 45px;
`;

const StyledButton = styled.button`
	background: linear-gradient(135deg, #562323, #4c4a58);
	padding: 5px;
	color: white;
	font-family: 'Dancing Script', cursive;
	font-size: 2rem;
	text-align: center;
`;

export default function EditForm({ onFormSubmit, selectedDocument }) {
	function handleOnSubmit(event) {
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
			<StyledButton>save</StyledButton>
		</StyledForm>
	);
}

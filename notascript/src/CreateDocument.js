import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: grid;
`;

export default function CreateDocument() {
	function handleOnSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const title = form.title.value;
		const description = form.description.value;
		console.log(title, description);
	}

	return (
		<StyledForm onSubmit={handleOnSubmit}>
			<label htmlFor='title'>New Title</label>
			<input name='title' placeholder='type title here' type='text' />

			<label htmlFor='description'>New Description</label>
			<textarea
				name='description'
				placeholder='type description here'
				type='text'
			/>

			<label htmlFor='domainSelection'>Choose domains</label>
			<select name='domainSelection' size='5'>
				<option>domain option1</option>
				<option>domain option3</option>
				<option>domain option3</option>
			</select>
			<section>
				<button>save</button>
			</section>
		</StyledForm>
	);
}

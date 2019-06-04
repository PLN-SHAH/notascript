import React from 'react';
import PropType from 'prop-types';
import Dictionary from './Dictionary.js';
import styled from 'styled-components';
import { Title, Input, Formular, Label, Button } from '../misc/Style.js';

const StyledForm = styled(Formular)`
	grid-template-rows: auto;
	height: unset;
`;
const StyledTitle = styled(Title)`
	padding: 0 20px;
`;
const StyledLabel = styled(Label)``;
const StyledInput = styled(Input)``;
const StyledButton = styled(Button)``;

export default function DictionaryList({
	dictionaries,
	onDelete,
	onFormSubmit,
	onFormSubmitEntries
}) {
	function handleSubmit(event) {
		event.preventDefault();

		onFormSubmit({
			title: event.target.newDictionary.value
		});
	}

	return (
		<>
			<StyledTitle>Dictionaries</StyledTitle>
			<StyledTitle>create new dictionary</StyledTitle>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel>
					<StyledInput
						name='newDictionary'
						placeholder='type title here...'
						type='text'
						required
					/>
				</StyledLabel>
				<StyledButton>add</StyledButton>
			</StyledForm>
			{dictionaries.map(dictionary => (
				<Dictionary
					dictionary={dictionary}
					key={dictionary.id}
					onDelete={() => onDelete(dictionary)}
				/>
			))}
		</>
	);
}

DictionaryList.propType = {
	dictionaries: PropType.array,
	onDelete: PropType.func,
	onFormSubmit: PropType.func
};

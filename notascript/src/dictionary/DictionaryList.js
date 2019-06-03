import React from 'react';
import PropType from 'prop-types';
import Dictionary from './Dictionary.js';
import styled from 'styled-components';
import uid from 'uid';
import { Title, Input, Formular, Label, Button } from '../misc/Style.js';

const StyledTitle = styled(Title)`
	text-align: center;
`;

const StyledButton = styled(Button)``;

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)`
	grid-template-rows: auto;
	height: unset;
`;
const StyledLabel = styled(Label)``;

export default function DictionaryList({
	dictionaries,
	onDelete,
	onFormSubmit
}) {
	function handleSubmit(event) {
		event.preventDefault();

		const newDictionary = event.target.newDictionary.value;

		onFormSubmit({
			title: newDictionary,
			id: uid()
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

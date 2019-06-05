import React from 'react';
import PropType from 'prop-types';
import Dictionary from './Dictionary.js';
import styled from 'styled-components';
import { Button } from '../misc/Style.js';

const StyledForm = styled.form`
	grid-template-rows: auto;
	height: unset;
`;
const StyledButton = styled(Button)``;

export default function DictionaryList({
	dictionaries,
	onDelete,
	onFormSubmit,
	onDeleteEntry
}) {
	function handleSubmit(event) {
		event.preventDefault();

		onFormSubmit({
			title: event.target.newDictionary.value
		});
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='newDictionary'>New title</label>
				<input
					name='newDictionary'
					placeholder='type title here...'
					type='text'
					required
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>
			{dictionaries.map(dictionary => (
				<Dictionary
					dictionary={dictionary}
					key={dictionary.id}
					onDelete={() => onDelete(dictionary)}
					onDeleteEntry={entry => onDeleteEntry(entry)}
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

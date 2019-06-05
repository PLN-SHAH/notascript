import Dictionary from './Dictionary.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../../misc/Style.js';

const StyledButton = styled(Button)``;
const StyledForm = styled.form`
	grid-template-rows: auto;
	height: unset;
`;

export default function DictionaryList({
	dictionaryList,
	onDelete,
	onFormSubmit,
	onDeleteEntry
}) {
	function handleSubmit(event) {
		event.preventDefault();

		onFormSubmit({
			title: event.target.title.value
		});
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='title'>New title</label>
				<input
					name='title'
					placeholder='type title here...'
					type='text'
					required
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>

			{dictionaryList.map(dictionary => (
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
	dictionaryList: PropType.array,
	onDelete: PropType.func,
	onFormSubmit: PropType.func
};

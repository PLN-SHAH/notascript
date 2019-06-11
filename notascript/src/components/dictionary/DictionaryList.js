import Dictionary from './Dictionary.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Button, NavIcon } from '../../misc/Style.js';

const StyledButton = styled(Button)`
	background-color: #29c1ee;
`;
const StyledForm = styled.form`
	grid-template-rows: auto;
	height: unset;
	border-top: 5px solid #29c1ee;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	color: #29c1ee;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function DictionaryList({
	dictionaryList,
	onDelete,
	onFormSubmit,
	onDeleteEntry
}) {
	function handleSubmit(event) {
		const title = event.target.title;

		event.preventDefault();

		onFormSubmit({
			title: title.value,
			entries: []
		});

		title.value = '';
		title.focus();
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
				<StyledButton>add</StyledButton>
			</StyledForm>

			{dictionaryList.map(dictionary => (
				<Dictionary
					dictionary={dictionary}
					key={dictionary._id}
					onDelete={() => onDelete(dictionary)}
					onDeleteEntry={entry => onDeleteEntry(entry)}
				/>
			))}
			<StyledNavIcon className='fas fa-book' />
		</>
	);
}

DictionaryList.propType = {
	dictionaryList: PropType.array,
	onDelete: PropType.func,
	onFormSubmit: PropType.func
};

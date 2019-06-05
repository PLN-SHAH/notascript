import React, { useState } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Button } from '../misc/Style.js';

const StyledForm = styled.form`
	grid-template-rows: unset;
	height: unset;
`;

const StyledButton = styled(Button)`
	width: 100%;
`;

const StyledButtonDelete = styled.button`
	justify-self: end;
`;

const StyledTitle = styled.h4`
	text-align: center;
`;

const StyledList = styled.ul`
	padding: 20px;

	> li {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;

		> span {
			text-align: center;
		}
	}
`;

const StyledSynonym = styled.span`
	font-weight: normal;
`;

export default function AddDictionary({
	dictionary,
	onFormSubmitEntries,
	onDeleteEntry
}) {
	const { title, entries } = dictionary;

	let [synonyms, setSynonym] = useState(entries.key || []);
	let [meanings, setMeaning] = useState(entries.value || []);

	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const synonym = form.synonym.value;
		const meaning = form.meaning.value;

		setSynonym((synonyms = [...synonyms, synonym]));
		setMeaning((meanings = [...meanings, meaning]));

		onFormSubmitEntries({
			title,
			synonym,
			meaning
		});
	}

	return (
		<>
			<StyledTitle>{title}</StyledTitle>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='synonym'>Synonym</label>
				<input
					name='synonym'
					placeholder='type synonym here...'
					type='text'
					required
				/>
				<label htmlFor='meaning'>Meaning</label>
				<input
					name='meaning'
					placeholder='type meaning here...'
					type='text'
					required
				/>
				<StyledButton>add</StyledButton>
			</StyledForm>
			<StyledList>
				<li>
					<StyledSynonym>Synonyms</StyledSynonym>
					<span>Meanings</span>
				</li>
				{entries.map(entry => (
					<li key={entries.key}>
						<StyledSynonym>{entry.key}</StyledSynonym>
						<span>{entry.value}</span>
						<StyledButtonDelete onClick={onDeleteEntry}>
							<i className='fas fa-trash-alt' />
						</StyledButtonDelete>
					</li>
				))}
			</StyledList>
		</>
	);
}

AddDictionary.propType = {
	dictionary: PropType.obj,
	onFormSubmitEntries: PropType.func
};

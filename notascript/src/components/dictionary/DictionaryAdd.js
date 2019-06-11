import PropType from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Subtitle, NavIcon } from '../../misc/Style.js';

const StyledForm = styled.form`
	grid-template-rows: unset;
	height: unset;
	border-top: 5px solid #2eadd3;
`;

const StyledButton = styled(Button)`
	width: 100%;
	background-color: #2eadd3;
`;

const StyledButtonDelete = styled.button`
	justify-self: end;
	background: white;
`;

const StyledSubtitle = styled(Subtitle)``;

const StyledTitle = styled.h4`
	text-align: center;
	display: grid;
	margin-bottom: 10px;
`;

const StyledLabel = styled.label`
	font-weight: bold;
	color: #2eadd3;
`;

const StyledNavIcon = styled(NavIcon)``;

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

export default function DictionaryAdd({
	dictionary,
	onFormSubmitEntries,
	onDeleteEntry
}) {
	const { title, entries } = dictionary;
	console.log(dictionary, 'in dictionary');

	let [synonyms, setSynonyms] = useState(entries.key || []);
	let [meanings, setMeanings] = useState(entries.value || []);

	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const synonym = form.synonym.value;
		const meaning = form.meaning.value;

		setSynonyms((synonyms = [...synonyms, synonym]));
		setMeanings((meanings = [...meanings, meaning]));

		onFormSubmitEntries({
			title,
			synonym,
			meaning
		});
	}

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<StyledTitle>
					<StyledSubtitle>dictionary</StyledSubtitle>
					{title}
				</StyledTitle>
				<StyledLabel htmlFor='synonym'>Synonym</StyledLabel>
				<input
					name='synonym'
					placeholder='type synonym here...'
					type='text'
					required
				/>
				<StyledLabel htmlFor='meaning'>Meaning</StyledLabel>
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
			<StyledNavIcon className='fas fa-book' />
		</>
	);
}

DictionaryAdd.propType = {
	dictionary: PropType.obj,
	onFormSubmitEntries: PropType.func
};

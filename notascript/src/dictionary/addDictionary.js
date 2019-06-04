import React, { useState } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Title, Input, Label, Button } from '../misc/Style.js';

const StyledInput = styled(Input)`
	margin-top: 10px;
	margin-bottom: 5px;
`;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)`
	width: 100%;
`;
const StyledTitle = styled(Title)`
	text-align: center;
`;

const StyledGrid = styled.section`
	display: grid;
	grid-template-columns: 50% 50%;
`;

const StyledEntry = styled.li`
	padding-left: 20px;
`;

const StyledContainer = styled.section`
	padding: 20px;
`;

export default function AddDictionary({ dictionary, onFormSubmitEntries }) {
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
			synonyms,
			meanings
		});
	}

	return (
		<StyledContainer>
			<StyledTitle>{title}</StyledTitle>
			<form onSubmit={handleSubmit}>
				<StyledLabel>
					Synonym
					<StyledInput
						name='synonym'
						placeholder='type synonym here...'
						type='text'
						required
					/>
				</StyledLabel>
				<StyledLabel>
					Meaning
					<StyledInput
						name='meaning'
						placeholder='type meaning here...'
						type='text'
						required
					/>
				</StyledLabel>
				<StyledButton>add</StyledButton>
			</form>
			<StyledGrid>
				<p>Synonyms</p>
				<p>Meanings</p>
			</StyledGrid>
			<StyledGrid>
				<ul>
					{entries.map(entry => (
						<StyledEntry>{entry.key}</StyledEntry>
					))}
					{synonyms.map(synonym => (
						<StyledEntry>{synonym}</StyledEntry>
					))}
				</ul>
				<ul>
					{entries.map(entry => (
						<StyledEntry>{entry.value}</StyledEntry>
					))}
					{meanings.map(meaning => (
						<StyledEntry>{meaning}</StyledEntry>
					))}
				</ul>
			</StyledGrid>
		</StyledContainer>
	);
}

AddDictionary.propType = {
	dictionary: PropType.obj
};

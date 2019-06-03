import React, { useState } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Title, Input, Label, Button, Formular } from '../misc/Style.js';

const StyledContainer = styled.section`
	display: grid;
	padding: 20px;
`;

const StyledForm = styled(Formular)`
	grid-template-rows: auto;
`;
const StyledInput = styled(Input)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledTitle = styled(Title)`
	justify-self: center;
`;

const StyledOutputList = styled.section`
	display: grid;
	grid-template-columns: 50% 50%;
`;
const StyledHeadlines = styled.section`
	display: grid;
	grid-template-columns: 50% 50%;
`;

export default function AddDictionary({ dictionary }) {
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
	}

	return (
		<StyledContainer>
			<StyledTitle>{title}</StyledTitle>
			<StyledForm onSubmit={handleSubmit}>
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
			</StyledForm>
			<StyledHeadlines>
				<h6>Synonyms</h6>
				<h6>Meanings</h6>
			</StyledHeadlines>
			<StyledOutputList>
				<ul>
					{entries.map(entry => (
						<li>{entry.key}</li>
					))}
					{synonyms.map(synonym => (
						<li>{synonym}</li>
					))}
				</ul>

				<ul>
					{entries.map(entry => (
						<li>{entry.value}</li>
					))}
					{meanings.map(meaning => (
						<li>{meaning}</li>
					))}
				</ul>
			</StyledOutputList>
		</StyledContainer>
	);
}

AddDictionary.propType = {
	dictionary: PropType.obj
};

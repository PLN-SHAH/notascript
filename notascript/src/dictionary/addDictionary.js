import React, { useState } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Title, Input, Label, Button } from '../misc/Style.js';

const StyledContainer = styled.section`
	display: grid;
	padding: 20px;
`;

const StyledInput = styled(Input)``;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledTitle = styled(Title)``;

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
			<ul>
				{entries.map(entry => (
					<li>{entry.key}</li>
				))}
			</ul>
			<ul>
				{entries.map(entry => (
					<span>{entry.value}</span>
				))}
			</ul>
			{synonyms}
			{meanings}
		</StyledContainer>
	);
}

AddDictionary.propType = {
	dictionary: PropType.obj
};

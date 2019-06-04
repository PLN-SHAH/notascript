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

const StyledEntry = styled.span`
	padding-left: 20px;
`;

const StyledContainer = styled.section`
	padding: 20px;
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
				<ul>
					<li>
						<span>Synonyms</span>
						<span>Meanings</span>
					</li>
					{entries.map(entry => (
						<li>
							<span>{entry.key}</span>|<span>{entry.value}</span>
						</li>
					))}
				</ul>
			</StyledGrid>
		</StyledContainer>
	);
}

AddDictionary.propType = {
	dictionary: PropType.obj,
	onFormSubmitEntries: PropType.func
};

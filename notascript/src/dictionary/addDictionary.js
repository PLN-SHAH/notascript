import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Input, Formular, Label, Button, Title } from '../misc/Style.js';

const StyledContainer = styled.section`
	display: grid;
	padding: 20px;
`;

const StyledInput = styled(Input)``;
const StyledForm = styled(Formular)`
	grid-template-rows: auto;
	padding: 0;
`;
const StyledLabel = styled(Label)``;
const StyledButton = styled(Button)``;
const StyledTitle = styled(Title)``;

const StyledInputContainer = styled.section`
	display: grid;
	grid-template-columns: 50% 50%;
`;

const StyledOutput = styled.section`
	display: grid;
	grid-template-columns: 50% 50%;
`;

export default function DictionaryPage({ onFormSubmit, dictionaries }) {
	console.log(dictionaries.shorthands);
	function handleSubmit(event) {
		event.preventDefault();

		const form = event.target;
		const synonym = form.synonym.value;
		const meaning = form.meaning.value;
		onFormSubmit(
			dictionaries.shorthands[0].push(synonym),
			dictionaries.shorthands[1].push(meaning)
		);
	}

	return (
		<StyledContainer>
			<StyledTitle>Add or edit dictionaries</StyledTitle>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInputContainer>
					<StyledLabel>
						synonym:
						<StyledInput
							type='text'
							name='synonym'
							placeholder='add synonym name here..'
						/>
					</StyledLabel>

					<StyledLabel>
						New meaning:
						<StyledInput
							type='text'
							name='meaning'
							placeholder='add meaning name here..'
						/>
					</StyledLabel>
				</StyledInputContainer>
				<StyledButton>add</StyledButton>
			</StyledForm>
			<StyledOutput>
				<ul>
					{dictionaries.shorthands[0].map(synonym => (
						<li>synonym</li>
					))}
				</ul>
				<ul>
					{dictionaries.shorthands[1].map(meaning => (
						<li>meaning</li>
					))}
				</ul>
			</StyledOutput>
		</StyledContainer>
	);
}

DictionaryPage.propType = {
	onFormSubmit: PropType.func
};

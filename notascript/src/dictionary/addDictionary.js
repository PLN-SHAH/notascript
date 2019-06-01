import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { Title } from '../misc/Style.js';

const StyledContainer = styled.section`
	display: grid;
	padding: 20px;
`;

const StyledTitle = styled(Title)``;

export default function addDictionary({ dictionary }) {
	const { title, entries } = dictionary;
	console.log(dictionary, 'dictionary');
	return (
		<StyledContainer>
			<StyledTitle>Add or edit {title}</StyledTitle>
			{entries.map(entry => (
				<span>{entry.key}</span>
			))}
			{entries.map(entry => (
				<span>{entry.value}</span>
			))}
		</StyledContainer>
	);
}

addDictionary.propType = {
	onFormSubmit: PropType.func
};

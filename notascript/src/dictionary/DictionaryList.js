import React from 'react';
import PropType from 'prop-types';
import Dictionary from './Dictionary.js';
import styled from 'styled-components';
import { Title } from '../misc/Style.js';

const StyledTitle = styled(Title)`
	text-align: center;
`;

export default function DictionaryList({ dictionaries }) {
	console.log(dictionaries, 'dictionaries');
	return (
		<>
			<StyledTitle>Dictionaries</StyledTitle>
			{dictionaries.map(dictionary => (
				<Dictionary dictionary={dictionary} key={dictionary.id} />
			))}
		</>
	);
}

DictionaryList.propType = {
	dictionaries: PropType.array
};

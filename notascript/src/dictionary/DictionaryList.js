import React from 'react';
import PropType from 'prop-types';
import Dictionary from './Dictionary.js';

export default function DictionaryList({ dictionaries }) {
	console.log(dictionaries, 'dictionaries');
	return (
		<>
			{dictionaries.map(dictionary => (
				<Dictionary dictionary={dictionary} key={dictionary.id} />
			))}
		</>
	);
}

DictionaryList.propType = {
	dictionaries: PropType.array
};

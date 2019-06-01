import React from 'react';
import PropType from 'prop-types';
import Dictionary from './Dictionary.js';

export default function Dictionaries({ dictionaries }) {
	console.log(dictionaries);
	return (
		<>
			{dictionaries.map(dictionary => (
				<Dictionary dictionary={dictionary} key={dictionary.id} />
			))}
		</>
	);
}

Dictionaries.propType = {
	onFormSubmit: PropType.func
};
import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../app/NavLink.js';

export default function Dictionary({ dictionary }) {
	const { title, id } = dictionary;
	return (
		dictionary && (
			<section>
				<h4>{title}</h4>
				<NavLink to={`dictionaries/${id}`}>edit dict</NavLink>
				<ul />
			</section>
		)
	);
}

Dictionary.propTypes = {
	dictionary: PropTypes.obj
};

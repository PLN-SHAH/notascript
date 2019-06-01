import React from 'react';
import NavLink from '../app/NavLink.js';

export default function Dictionary({ dictionary }) {
	const { title, id } = dictionary;
	return (
		dictionary && (
			<section>
				<h4>{title}</h4>
				<NavLink to={`/editDict/${id}`}>edit dict</NavLink>
			</section>
		)
	);
}

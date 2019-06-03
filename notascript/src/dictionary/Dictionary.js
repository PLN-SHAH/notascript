import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';
import PropType from 'prop-types';
import { Title } from '../misc/Style.js';
import ReactSVG from 'react-svg';

const StyledTitle = styled(Title)``;

const StyledNavLink = styled(NavLink)`
	grid-template-columns: 50% 50%;
	text-align: left;
	font-size: 1em;
	justify-content: space-between;
`;

export default function Dictionary({ dictionary }) {
	const { title, id } = dictionary;
	return (
		<StyledNavLink to={`/editDictionary/${id}`}>
			<StyledTitle>{title}</StyledTitle>
			<ReactSVG src='icon-edit.svg' />
		</StyledNavLink>
	);
}

Dictionary.propType = {
	dictionary: PropType.obj
};

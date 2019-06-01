import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';
import PropType from 'prop-types';
import { Title } from '../misc/Style.js';

const StyledTitle = styled(Title)``;

export default function Dictionary({ dictionary }) {
	const { title, id } = dictionary;
	return (
		<>
			<StyledTitle>{title}</StyledTitle>
			<NavLink to={`/editDictionary/${id}`}>Edit</NavLink>
		</>
	);
}

Dictionary.propType = {
	dictionary: PropType.obj
};

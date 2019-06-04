import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';
import PropType from 'prop-types';
import { Title } from '../misc/Style.js';

const StyledTitle = styled(Title)``;

const StyledNavLink = styled(NavLink)`
	grid-template-columns: 50% 50%;
	text-align: left;
	font-size: 1em;
	margin: 0;
	padding: 0 20px;
	display: grid;
	justify-content: space-between;
`;

const StyledButton = styled.button`
	background: transparent;
	border: none;
	justify-self: right;
	width: 30px;
	margin-right: 20px;
`;

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: auto 30px;
`;

export default function Dictionary({ dictionary, onDelete }) {
	const { title, id } = dictionary;
	return (
		<StyledContainer>
			<StyledNavLink to={`/editDictionary/${id}`}>
				<StyledTitle>{title}</StyledTitle>
				<i className='far fa-edit' />
			</StyledNavLink>
			<StyledButton onClick={onDelete}>
				<i className='fas fa-trash-alt' />
			</StyledButton>
		</StyledContainer>
	);
}

Dictionary.propType = {
	dictionary: PropType.obj,
	onDelete: PropType.func
};

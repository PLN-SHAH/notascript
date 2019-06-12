import NavLink from '../../app/NavLink.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 20px;
`;

const StyledIcons = styled.section`
	text-align: right;

	i {
		color: #373f43;
	}
`;

const StyledButton = styled.button`
	font-size: 1em;
`;

export default function Dictionary({ dictionary, onDelete }) {
	const { title, _id } = dictionary;

	return (
		<StyledContainer>
			<NavLink to={`/editDictionary/${_id}`}>
				<h4>{title}</h4>
			</NavLink>
			<StyledIcons>
				<NavLink to={`/editDictionary/${_id}`}>
					<i className='far fa-edit' />
				</NavLink>
				<StyledButton onClick={onDelete}>
					<i className='fas fa-trash-alt' />
				</StyledButton>
			</StyledIcons>
		</StyledContainer>
	);
}

Dictionary.propType = {
	dictionary: PropType.obj,
	onDelete: PropType.func
};

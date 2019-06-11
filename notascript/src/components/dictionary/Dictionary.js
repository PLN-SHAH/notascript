import NavLink from '../../app/NavLink.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 20px;
`;

const StyledButtonDelete = styled.button`
	justify-self: end;
	background: white;
`;

const StyledIcons = styled.section`
	text-align: right;
`;

export default function Dictionary({ dictionary, onDelete }) {
	const { title, _id } = dictionary;

	return (
		<StyledContainer>
			<h4>{title}</h4>
			<StyledIcons>
				<NavLink to={`/editDictionary/${_id}`}>
					<i className='far fa-edit' />
				</NavLink>
				<StyledButtonDelete onClick={onDelete}>
					<i className='fas fa-trash-alt' />
				</StyledButtonDelete>
			</StyledIcons>
		</StyledContainer>
	);
}

Dictionary.propType = {
	dictionary: PropType.obj,
	onDelete: PropType.func
};

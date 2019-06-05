import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';
import PropType from 'prop-types';

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 20px;
`;

const StyledButtonDelete = styled.button`
	justify-self: end;
`;

const StyledIcons = styled.section`
	display: grid;
	justify-content: end;
`;

export default function Dictionary({ dictionary, onDelete }) {
	const { title, id } = dictionary;

	return (
		<StyledContainer>
			<h4>{title}</h4>
			<StyledIcons>
				<NavLink to={`/editDictionary/${id}`}>
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

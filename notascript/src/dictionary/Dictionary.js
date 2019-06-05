import React from 'react';
import NavLink from '../app/NavLink.js';
import styled from 'styled-components';
import PropType from 'prop-types';

const StyledContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	padding: 0 20px;
`;

export default function Dictionary({ dictionary, onDelete }) {
	const { title, id } = dictionary;

	return (
		<StyledContainer>
			<h4>{title}</h4>
			<NavLink to={`/editDictionary/${id}`}>
				<i className='far fa-edit' />
			</NavLink>
			<button onClick={onDelete}>
				<i className='fas fa-trash-alt' />
			</button>
		</StyledContainer>
	);
}

Dictionary.propType = {
	dictionary: PropType.obj,
	onDelete: PropType.func
};

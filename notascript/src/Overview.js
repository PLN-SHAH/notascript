import NavLink from './NavLink.js';
import React from 'react';
import DocumentList from './DocumentList';
import styled from 'styled-components';
import PropType from 'prop-types';

const StyledNavLink = styled(NavLink)`
	color: #170444;
	height: 50px;
	display: grid;
	margin: 0 20px;
	font-size: 2em;
	text-align: right;
	font-family: 'Dancing Script', cursive;
	align-items: center;

	&:hover {
		text-decoration: none;
	}
`;

export default function Overview({ documentList, onDelete }) {
	return (
		<>
			<StyledNavLink to='/create'>create new file</StyledNavLink>
			<DocumentList documentList={documentList} onDelete={onDelete} />
		</>
	);
}

Overview.propType = {
	documentList: PropType.array,
	onDelete: PropType.func
};

import NavLink from '../app/NavLink.js';
import React from 'react';
import DocumentList from './DocumentList.js';
import styled from 'styled-components';
import PropType from 'prop-types';

const StyledNavLink = styled(NavLink)`
	color: #170444;
	height: 50px;
	display: grid;
	font-size: 2em;
	text-align: right;
	font-family: 'Dancing Script', cursive;
	align-items: center;

	&:hover {
		text-decoration: none;
	}
`;

const StyledDocumentsContainer = styled.section`
	padding: 20px;
`;

export default function DocumentsPage({ documentList, onDelete }) {
	return (
		<StyledDocumentsContainer>
			<StyledNavLink to='/create'>create new file</StyledNavLink>
			<DocumentList documentList={documentList} onDelete={onDelete} />
		</StyledDocumentsContainer>
	);
}

DocumentsPage.propType = {
	documentList: PropType.array,
	onDelete: PropType.func
};

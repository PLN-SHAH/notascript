import DocumentList from './DocumentList.js';
import NavLink from '../../app/NavLink.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavIcon } from '../../misc/Style.js';

const StyledDocumentsContainer = styled.section`
	padding: 20px;
	border-top: 5px solid #7cd365;
`;

const StyledNavLink = styled(NavLink)`
	font-family: 'Raleway', sans-serif;
	font-size: 1em;
	margin: 20px 0;
`;

const StyledIcon = styled.i`
	margin-bottom: 10px;
	color: #7cd365;
	font-size: 2em;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function DocumentsPage({ onDelete, documents }) {
	return (
		<>
			<StyledDocumentsContainer>
				<StyledNavLink to='/create'>
					<StyledIcon className='far fa-plus-square' />
				</StyledNavLink>
				<DocumentList documents={documents} onDelete={onDelete} />
			</StyledDocumentsContainer>
			<StyledNavIcon className='fas fa-copy' />
		</>
	);
}

DocumentsPage.propType = {
	onDelete: PropType.func,
	documents: PropType.array
};

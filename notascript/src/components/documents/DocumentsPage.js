import DocumentList from './DocumentList.js';
import NavLink from '../../app/NavLink.js';
import PropType from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	display: grid;
	margin: 10px;
`;

const StyledIcon = styled.i`
	font-size: 2em;
	justify-self: end;
	color: #4d6c99;
`;

const StyledDocumentsContainer = styled.section`
	padding: 20px;
`;

export default function DocumentsPage({ documentList, onDelete }) {
	return (
		<StyledDocumentsContainer>
			<StyledNavLink to='/create'>
				<StyledIcon className='far fa-plus-square' />
			</StyledNavLink>
			<DocumentList documentList={documentList} onDelete={onDelete} />
		</StyledDocumentsContainer>
	);
}

DocumentsPage.propType = {
	documentList: PropType.array,
	onDelete: PropType.func
};

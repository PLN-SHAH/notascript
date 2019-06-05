import NavLink from '../app/NavLink.js';
import React from 'react';
import DocumentList from './DocumentList.js';
import styled from 'styled-components';
import PropType from 'prop-types';

const StyledNavLink = styled(NavLink)`
	display: grid;
	margin: 10px;
	> i {
		font-size: 2em;
		justify-self: end;
		color: #4d6c99;
	}
`;

const StyledDocumentsContainer = styled.section`
	padding: 20px;
`;

export default function DocumentsPage({ documentList, onDelete }) {
	return (
		<StyledDocumentsContainer>
			<StyledNavLink to='/create'>
				<i className='far fa-plus-square' />
			</StyledNavLink>
			<DocumentList documentList={documentList} onDelete={onDelete} />
		</StyledDocumentsContainer>
	);
}

DocumentsPage.propType = {
	documentList: PropType.array,
	onDelete: PropType.func
};

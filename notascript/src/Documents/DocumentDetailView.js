import React from 'react';
import styled from 'styled-components';
import NavLink from '../app/NavLink.js';
import DomainList from '../domains/DomainList.js';
import { Title } from '../misc/Style.js';

const StyledSymbolsSheet = styled.section`
	font-size: 3em;
	background-color: white;
	padding: 20px;
	box-shadow: -2px 3px 3px 0 #ccc;
`;

const StyledTitle = styled(Title)`
	word-break: break-all;
`;

const StyledDetailsView = styled.section`
	display: inline-grid;
	height: 100%;
	grid-template-rows: 1fr 1fr;
`;

const StyledNavLink = styled(NavLink)`
	color: #170444;
	margin: 0 20px;
	font-size: 2em;
	display: grid;
	text-align: right;
	font-family: 'Dancing Script', cursive;

	&:hover {
		text-decoration: none;
	}
`;

const StyledSymbolsContainer = styled.section`
	background-color: #f2f2f2;
	padding: 20px;
	border-top: 3px solid #170444;
	display: grid;
`;

const StyledDocument = styled.section`
	padding: 20px;
`;

export default function DocumentDetailView({ selectedDocument }) {
	return (
		<StyledDetailsView>
			<StyledDocument>
				<StyledNavLink to='/overview'>back to view</StyledNavLink>
				<StyledTitle>{selectedDocument.title}</StyledTitle>
				<p>{selectedDocument.description}</p>
				<DomainList domainList={selectedDocument.domains} />
			</StyledDocument>
			<StyledSymbolsContainer>
				<StyledSymbolsSheet>{selectedDocument.symbols}</StyledSymbolsSheet>
			</StyledSymbolsContainer>
		</StyledDetailsView>
	);
}

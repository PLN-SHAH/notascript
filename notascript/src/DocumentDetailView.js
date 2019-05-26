import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink.js';

const StyledSymbolsSheet = styled.section`
	font-size: 3em;
	background-color: white;
	padding: 20px;
	box-shadow: -2px 3px 3px 0 #ccc;
`;

const StyledTitle = styled.h4`
	font-size: 3rem;
	margin: 0;
	font-family: 'Dancing Script', cursive;
	margin: 20px;
`;

const StyledDetailsView = styled.section`
	display: grid;
	height: 100%;
`;

const StyledDescription = styled.p`
	margin: 20px;
`;

const StyledDomainList = styled.ul`
	margin: 20px;
	list-style: none;
	padding: 0;
	display: flex;

	> li {
		margin-right: 10px;
		background-color: #170444;
		color: white;
		padding: 10px;
	}
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
	grid-template-rows: 1fr 1fr;
	display: grid;
`;

export default function DocumentDetailView({ selectedDocument }) {
	return (
		<StyledDetailsView>
			<section>
				<StyledNavLink to='/settings'>back to view</StyledNavLink>
				<StyledTitle>{selectedDocument[0].title}</StyledTitle>
				<StyledDescription>{selectedDocument[0].description}</StyledDescription>
				<StyledDomainList>{selectedDocument[0].domains}</StyledDomainList>
			</section>
			<StyledSymbolsContainer>
				<StyledSymbolsSheet>{selectedDocument[0].symbols}</StyledSymbolsSheet>
			</StyledSymbolsContainer>
		</StyledDetailsView>
	);
}

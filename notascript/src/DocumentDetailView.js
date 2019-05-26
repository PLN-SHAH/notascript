import React from 'react';
import styled from 'styled-components';

const StyledSymbolsSheet = styled.section`
	font-size: 3em;
	background-color: white;
	padding: 20px;
	box-shadow: -2px 3px 3px 0 #ccc;
`;

const StyledTitle = styled.h4`
	font-size: 2rem;
	margin: 0;
	color: #562323;
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
		background-color: #562323;
		color: white;
		padding: 10px;
	}
`;

const StyledSymbolsContainer = styled.section`
	background-color: #f2f2f2;
	padding: 20px;
	border-top: 1px solid #562323;
`;

export default function DocumentDetailView({ selectedDocument }) {
	return (
		<StyledDetailsView>
			<StyledTitle>{selectedDocument[0].title}</StyledTitle>
			<StyledDescription>{selectedDocument[0].description}</StyledDescription>
			<StyledDomainList>{selectedDocument[0].domains}</StyledDomainList>
			<StyledSymbolsContainer>
				<StyledSymbolsSheet>{selectedDocument[0].symbols}</StyledSymbolsSheet>
			</StyledSymbolsContainer>
		</StyledDetailsView>
	);
}

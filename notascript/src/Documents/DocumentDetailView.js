import React from 'react';
import styled from 'styled-components';
import NavLink from '../app/NavLink.js';
import DomainList from '../domains/DomainList.js';
import PropTypes from 'prop-types';
import { Title } from '../misc/Style.js';

const StyledDocument = styled.section`
	padding: 20px;
	border-left-width: 15px;
	border-left-color: #170444;
	border-left-style: solid;
	word-break: break-all;
	width: 100vw;
	padding: 20px;
`;

const StyledTitle = styled(Title)``;

const StyledNavLink = styled(NavLink)``;

const StyledSymbols = styled.section`
	background-color: #f2f2f2;
	padding: 20px;
	border-top: 3px solid #170444;
	width: 100vw;
`;

const StyledSymbolsSheet = styled.section`
	font-size: 2em;
	background-color: white;
	padding: 20px;
	box-shadow: -2px 3px 3px 0 #ccc;
	word-break: break-all;
`;

export default function DocumentDetailView({ selectedDocument }) {
	const { title, description, symbols, domains } = selectedDocument;
	return (
		<>
			<StyledDocument>
				<StyledNavLink to='/documents'>back to view</StyledNavLink>
				<StyledTitle>{title}</StyledTitle>
				<p>{description}</p>
				<DomainList domainList={domains} />
			</StyledDocument>
			<StyledSymbols>
				<StyledSymbolsSheet>{symbols}</StyledSymbolsSheet>
			</StyledSymbols>
		</>
	);
}

DocumentDetailView.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	domains: PropTypes.array,
	symbols: PropTypes.array
};

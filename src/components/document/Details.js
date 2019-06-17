import React from 'react';
import styled from 'styled-components';
import NavLink from '../../app/NavLink.js';
import PropTypes from 'prop-types';
import { Title, NavIcon } from '../../misc/Style.js';

const StyledDocument = styled.section`
	border-top: 5px solid #7cd365;
	padding: 20px;
	word-break: break-all;
	width: 100vw;
	padding: 20px;
`;

const StyledSymbols = styled.section`
	background-color: #f2f2f2;
	padding: 20px;
	border-top: 3px solid #170444;
	width: 100vw;
	height: 100%;
`;
const StyledTitle = styled(Title)`
	font-weight: bold;
	color: #7cd365;
`;
const StyledIcon = styled.i`
	display: grid;
	justify-content: flex-end;
	color: #373f43;
`;

const StyledSymbolsSheet = styled.section`
	font-size: 2em;
	background-color: white;
	padding: 20px;
	box-shadow: -2px 3px 3px 0 #ccc;
	word-break: break-all;
	height: 100%;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function Details({ selectedDocument }) {
	const { title, description, symbols } = selectedDocument;

	return (
		<>
			<StyledDocument>
				<NavLink to='/documents'>
					<StyledIcon className='fas fa-angle-double-left' />
				</NavLink>
				<StyledTitle>{selectedDocument && title}</StyledTitle>
				<p>{selectedDocument && description}</p>
			</StyledDocument>
			<StyledSymbols>
				<StyledSymbolsSheet>{selectedDocument && symbols}</StyledSymbolsSheet>
			</StyledSymbols>
			<StyledNavIcon className='fas fa-copy' />
		</>
	);
}

Details.propTypes = {
	selectedDocument: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		symbols: PropTypes.array
	})
};

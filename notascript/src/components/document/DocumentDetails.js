import React from 'react';
import styled from 'styled-components';
import NavLink from '../../app/NavLink.js';
import PropTypes from 'prop-types';
import { Title, NavIcon } from '../../misc/Style.js';

const StyledTitle = styled(Title)`
	font-weight: bold;
	color: #7cd365;
`;
const StyledNavLink = styled(NavLink)`
	display: grid;
	justify-content: flex-end;
`;
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

const StyledSymbolsSheet = styled.section`
	font-size: 2em;
	background-color: white;
	padding: 20px;
	box-shadow: -2px 3px 3px 0 #ccc;
	word-break: break-all;
	height: 100%;
`;

const StyledNavIcon = styled(NavIcon)``;

export default function DocumentDetail({ selectedDocument }) {
	const { title, description, symbols } = selectedDocument;

	return (
		selectedDocument && (
			<>
				<StyledDocument>
					<StyledNavLink to='/documents'>
						<i className='fas fa-angle-double-left' />
					</StyledNavLink>
					<StyledTitle>{title}</StyledTitle>
					<p>{description}</p>
				</StyledDocument>
				<StyledSymbols>
					<StyledSymbolsSheet>{symbols}</StyledSymbolsSheet>
				</StyledSymbols>

				<StyledNavIcon className='fas fa-copy' />
			</>
		)
	);
}

DocumentDetail.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	symbols: PropTypes.array
};

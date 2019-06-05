import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSymbolsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
`;

const StyledSymbol = styled.button`
	font-size: 1.3em;
	height: 30px;
	width: auto;
	padding: 5px;
	color: #4d6c99;
	padding: 5px;
	font-weight: 200;
	background: transparent;
`;

const StyledButtons = styled.button`
	background-color: #4d6c99;
	color: #fff;
	padding: 10px;
`;

const StyledButtonContainer = styled.section`
	border-bottom: 1px solid #4d6c99;
`;

export default function Buttons({
	createdSymbols,
	handleButtonClick,
	dictionaries
}) {
	const [filter, setFilter] = useState('');

	function getFilterTitle() {
		return dictionaries.map(dict => dict.title);
	}

	function handleOnClick(filter) {
		setFilter(filter);
	}

	function getFilteredOutput() {
		const dict = filter && dictionaries.find(dict => dict.title === filter);

		filter === 'all' ? (dict.entries = createdSymbols) : console.log('no all');

		return (dict && dict.entries) || createdSymbols;
	}

	return (
		<>
			<StyledButtonContainer>
				{getFilterTitle().map(filter => (
					<StyledButtons key={filter} onClick={() => handleOnClick(filter)}>
						{filter}
					</StyledButtons>
				))}
			</StyledButtonContainer>
			<StyledSymbolsContainer>
				{getFilteredOutput().map(symbol => (
					<StyledSymbol
						key={symbol.key}
						onClick={() => handleButtonClick(symbol.key)}
					>
						{symbol.key}
					</StyledSymbol>
				))}
			</StyledSymbolsContainer>
		</>
	);
}

Buttons.propTypes = {
	createdSymbols: PropTypes.array,
	handleButtonClick: PropTypes.func,
	dictionaries: PropTypes.array
};

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
	color: #373f43;
	border: none;
	background: transparent;
`;

const StyledButtons = styled.button`
	background-color: #d32e4a;
	color: #fff;
	padding: 10px;
`;

const StyledButtonContainer = styled.section`
	border-bottom: 1px solid #d32e4a;
`;

export default function Buttons({
	createdSymbols,
	handleButtonClick,
	dictionaryList
}) {
	const [filter, setFilter] = useState('');

	function getFilterTitle() {
		return dictionaryList.map(dict => dict.title);
	}

	function handleOnClick(filter) {
		setFilter(filter);
	}

	function getFilteredOutput() {
		const dict = filter && dictionaryList.find(dict => dict.title === filter);

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
	dictionaryList: PropTypes.array
};
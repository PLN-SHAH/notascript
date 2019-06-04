import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSymbolsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	background: linear-gradient(135deg, #562323, #4c4a58);
	position: absolute;
	width: 100%;
	bottom: 80px;
`;

const StyledButton = styled.button`
	font-size: 1.8em;
	padding: 5px;
	color: white;
	border: none;
	background: transparent;

	&:hover,
	&:active {
		font-size: 2.2em;
	}
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

		return (dict && dict.entries) || createdSymbols;
	}

	const output = getFilteredOutput();

	return (
		<>
			<section>
				{getFilterTitle().map(filter => (
					<button key={filter} onClick={() => handleOnClick(filter)}>
						{filter}
					</button>
				))}
			</section>
			<StyledSymbolsContainer>
				{output.map(symbol => (
					<StyledButton
						key={symbol.key}
						onClick={() => handleButtonClick(symbol.key)}
					>
						{symbol.key}
					</StyledButton>
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

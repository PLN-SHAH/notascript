import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { isObject } from 'util';

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
	filterList,
	dictionaries
}) {
	console.log(dictionaries[0].entries, 'shorthands');

	function getContentFromFilter(entries) {
		const keys = entries.map(obj => obj.key);
		return keys;
	}

	let [output, setOutput] = useState(createdSymbols);
	let [filter, setFilter] = useState([]);

	function handleClick(event) {
		setFilter((filter = event.target.innerHTML));
		if (filter === 'shorthands') {
			setOutput((output = getContentFromFilter(dictionaries[0].entries)));
		} else if (filter === 'stuff') {
			setOutput((output = getContentFromFilter(dictionaries[1].entries)));
		} else {
			setOutput((output = createdSymbols));
		}
	}

	return (
		<>
			<section>
				{filterList.map(filter => (
					<button onClick={handleClick}>{filter}</button>
				))}
			</section>
			<StyledSymbolsContainer>
				{output.map(symbol => (
					<StyledButton key={symbol} onClick={() => handleButtonClick(symbol)}>
						{symbol}
					</StyledButton>
				))}
			</StyledSymbolsContainer>
		</>
	);
}

Buttons.propTypes = {
	createdSymbols: PropTypes.array,
	handleButtonClick: PropTypes.func
};

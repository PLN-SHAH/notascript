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
	filterList
}) {
	const fakeContent = ['TR', 'Z', 'BGH'];

	let [output, setOutput] = useState(createdSymbols);
	let [filter, setFilter] = useState(filterList);

	function handleClick(event) {
		setFilter((filter = event.target.innerHTML));
		if (filter === 'filter 1') {
			//think about
			setOutput((output = createdSymbols));
		} else {
			setOutput((output = fakeContent));
		}
	}

	return (
		<>
			<section>
				<button onClick={handleClick}>filter 1</button>
				<button onClick={handleClick}>filter 2</button>
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

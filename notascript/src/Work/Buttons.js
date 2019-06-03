import React from 'react';
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

export default function Buttons({ createdSymbols, handleButtonClick }) {
	return (
		<>
			<section>
				<button>filter 1</button>
				<button>filter 2</button>
			</section>
			<StyledSymbolsContainer>
				{createdSymbols.map(symbol => (
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

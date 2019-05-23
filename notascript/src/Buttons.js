import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSymbolsContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: auto;
	background: linear-gradient(135deg, #562323, #4c4a58);
`;

const StyledButton = styled.button`
	font-size: 1.8em;
	padding: 5px;
	color: white;
	height: 50px;
	background-color: transparent;

	&:hover,
	&:active {
		font-size: 2.2em;
	}
`;

export default function Buttons({ buttonLabels, handleButtonClick }) {
	return (
		<StyledSymbolsContainer>
			{buttonLabels.map(label => (
				<StyledButton key={label} onClick={() => handleButtonClick(label)}>
					{label}
				</StyledButton>
			))}
		</StyledSymbolsContainer>
	);
}

Buttons.propTypes = {
	buttonLabels: PropTypes.array,
	handleButtonClick: PropTypes.func
};

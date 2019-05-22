import React from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';

const StyledSymbols = styled.section`
	max-width: 100vw;
	border: 1px solid black;
	word-break: break-all;
	font-size: 3em;
`;

export default function Work(props) {
	return (
		<>
			<StyledSymbols>{props.symbols}</StyledSymbols>
			<Buttons
				buttonLabels={[
					String.fromCodePoint(0x03a3),
					String.fromCodePoint(0x03b6),
					String.fromCodePoint(0x03a6),
					String.fromCodePoint(0x03a9),
					String.fromCodePoint(0x03df),
					String.fromCodePoint(0x03f4)
				]}
				handleButtonClick={buttonLabel => props.handleButtonClick(buttonLabel)}
			/>
		</>
	);
}

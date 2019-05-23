import React from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';

const StyledSymbols = styled.section`
	font-size: 3em;
`;

export default function Work(props) {
	let symbols = createUnicodes('0200', 50);

	function createUnicodes(start, counter) {
		const newArray = Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});

		return newArray;
	}

	return (
		<>
			<StyledSymbols>{props.symbols}</StyledSymbols>
			<Buttons
				buttonLabels={symbols}
				handleButtonClick={buttonLabel => props.handleButtonClick(buttonLabel)}
			/>
		</>
	);
}

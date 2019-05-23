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
	const symbols = [
		String.fromCodePoint(0x0471),
		String.fromCodePoint(0x0472),
		String.fromCodePoint(0x0473),
		String.fromCodePoint(0x0474),
		String.fromCodePoint(0x0475),
		String.fromCodePoint(0x0476),
		String.fromCodePoint(0x0477),
		String.fromCodePoint(0x0478),
		String.fromCodePoint(0x0479),
		String.fromCodePoint(0x0480),
		String.fromCodePoint(0x0481),
		String.fromCodePoint(0x0482),
		String.fromCodePoint(0x0483),
		String.fromCodePoint(0x0484)
	];

	//createEmptyArray(10);

	function createUnicodes(start, counter) {
		//create an array with placeholders

		const newArray = Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});

		return newArray;
	}
	console.log(createUnicodes('0500', 20), 'this is function call');

	//const test = createUnicodes('0500', 30);

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

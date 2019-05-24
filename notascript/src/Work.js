import React from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSymbols = styled.section`
	font-size: 3em;
`;

const StyledContent = styled.section`
	display: grid;
	grid-template-rows: 2fr 1fr;
`;

export default function Work({ symbols, handleButtonClick }) {
	const createdSymbols = createUnicodes('0200', 50);
	console.log(createUnicodes('0200', 10));

	function createUnicodes(start, counter) {
		return Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});
	}

	return (
		<StyledContent>
			<StyledSymbols>{symbols}</StyledSymbols>
			<Buttons
				buttonLabels={createdSymbols}
				handleButtonClick={buttonLabel => handleButtonClick(buttonLabel)}
			/>
		</StyledContent>
	);
}

Work.propTypes = {
	symbols: PropTypes.array,
	handleButtonClick: PropTypes.func
};

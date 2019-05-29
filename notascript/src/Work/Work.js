import React from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSymbols = styled.section`
	font-size: 3em;
	padding: 20px;
	font-weight: light;
`;

const StyledContent = styled.section`
	display: grid;
	grid-template-rows: 60% 40%;
	height: 100%;
	font-weight: light;
`;

export default function Work({ symbols, handleButtonClick }) {
	const createdSymbols = createUnicodes('0200', 40);

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
				createdSymbols={createdSymbols}
				handleButtonClick={symbolFromButton =>
					handleButtonClick(symbolFromButton)
				}
			/>
		</StyledContent>
	);
}

Work.propTypes = {
	symbols: PropTypes.array,
	handleButtonClick: PropTypes.func
};

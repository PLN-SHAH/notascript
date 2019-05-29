import React, { useState } from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title } from '../misc/Style.js';

const StyledSymbols = styled.section`
	font-size: 3em;
	padding: 20px;
	font-weight: light;
`;

const StyledTitle = styled(Title)`
	display: grid;
	justify-content: center;
`;

export default function WorkPage({ selectedDocument }) {
	const createdSymbols = createUnicodes('0200', 40);
	let [symbolList, setSymbolList] = useState([]);

	function createUnicodes(start, counter) {
		return Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});
	}

	function renderSymbols(symbolFromButton) {
		setSymbolList(
			(symbolList = [...symbolList, symbolFromButton]),
			(selectedDocument.symbols = [...selectedDocument.symbols, symbolList])
		);
	}

	return (
		<>
			<StyledTitle>{selectedDocument && selectedDocument.title}</StyledTitle>
			<StyledSymbols>
				{selectedDocument && selectedDocument.symbols}
			</StyledSymbols>
			<div>{symbolList}</div>
			<Buttons
				createdSymbols={createdSymbols}
				handleButtonClick={symbolFromButton => {
					renderSymbols(symbolFromButton);
				}}
			/>
		</>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object
};

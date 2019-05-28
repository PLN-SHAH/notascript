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

export default function WorkPage({
	symbols,
	handleButtonClick,
	selectedDocument
}) {
	const createdSymbols = createUnicodes('0200', 40);
	let [symbolSet, setSymbolSet] = useState([symbols || 'startsymbols']);

	function createUnicodes(start, counter) {
		return Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});
	}

	function handleOnClick(buttonLabel) {
		setSymbolSet((symbolSet = [...symbolSet, buttonLabel]));
		console.log(buttonLabel, symbolSet);
	}

	return (
		<>
			<StyledTitle>{selectedDocument && selectedDocument.title}</StyledTitle>
			<StyledSymbols>
				{selectedDocument && selectedDocument.symbols}
			</StyledSymbols>
			<Buttons
				buttonLabels={createdSymbols}
				handleButtonClick={buttonLabel => {
					handleButtonClick(buttonLabel, symbolSet);
					handleOnClick(buttonLabel);
				}}
			/>
		</>
	);
}

WorkPage.propTypes = {
	symbols: PropTypes.array,
	handleButtonClick: PropTypes.func,
	selectedDocument: PropTypes.object
};

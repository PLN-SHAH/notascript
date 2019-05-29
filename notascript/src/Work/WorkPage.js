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

	let [symbolList, setSymbolList] = useState([selectedDocument.symbols]);
	let [newsymbolList, setNewsymbolList] = useState([]);

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
		setNewsymbolList((newsymbolList = [...newsymbolList, symbolFromButton]));
	}

	//save
	function updateDocument() {
		setSymbolList(
			newsymbolList.forEach(item => selectedDocument.symbols.push(item))
		);
		console.log(symbolList, 'new file ');
	}

	return (
		<>
			<StyledTitle>{selectedDocument && selectedDocument.title}</StyledTitle>
			<StyledSymbols>
				{selectedDocument && selectedDocument.symbols}
				{newsymbolList}
			</StyledSymbols>
			<Buttons
				createdSymbols={createdSymbols}
				handleButtonClick={symbolFromButton => {
					renderSymbols(symbolFromButton);
				}}
			/>
			<button onClick={updateDocument}>save</button>
		</>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object
};

import React, { useState } from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title } from '../misc/Style.js';

const StyledSymbols = styled.section`
	font-size: 3em;
	padding: 20px;
	word-break: break-all;
	width: 100vw;
`;

const StyledTitle = styled(Title)`
	display: grid;
	justify-content: center;
	word-break: break-all;
`;

const StyledContainer = styled.section`
	display: inline-grid;
	grid-template-columns: 1fr;
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
		<StyledContainer>
			<StyledTitle>{selectedDocument && selectedDocument.title}</StyledTitle>
			<StyledSymbols>
				<span>
					{selectedDocument && selectedDocument.symbols}
					{newsymbolList}
				</span>
			</StyledSymbols>
			<Buttons
				createdSymbols={createdSymbols}
				handleButtonClick={symbolFromButton => {
					renderSymbols(symbolFromButton);
				}}
			/>
			<button onClick={updateDocument}>save</button>
		</StyledContainer>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object
};

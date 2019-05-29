import React, { useState } from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title, Button } from '../misc/Style.js';

const StyledSymbols = styled.section`
	font-size: 2em;
	word-break: break-all;
	width: 100vw;
	padding: 20px;
`;

const StyledTitle = styled(Title)`
	padding: 20px;
`;

const StyledButton = styled(Button)`
	align-self: end;
`;

const StyledContainer = styled.section`
	display: inline-grid;
	grid-template-columns: 1fr;
	grid-template-rows: 100px 1fr 1fr;
	height: 100%;
`;

export default function WorkPage({ selectedDocument, history }) {
	const createdSymbols = createUnicodes('0200', 40);

	//let symbolList = selectedDocument.symbols || [];

	let [newSymbolList, setNewSymbolList] = useState([]);

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
		setNewSymbolList((newSymbolList = [...newSymbolList, symbolFromButton]));
	}

	//save
	function updateDocument() {
		setNewSymbolList(
			newSymbolList.forEach(item => selectedDocument.symbols.push(item)) ||
				selectedDocument.symbols
		);
		history.push('/');
	}

	return (
		<StyledContainer>
			<StyledTitle>{selectedDocument && selectedDocument.title}</StyledTitle>
			<StyledSymbols>
				<span>
					{selectedDocument && selectedDocument.symbols}
					{newSymbolList}
				</span>
			</StyledSymbols>
			<StyledButton onClick={updateDocument}>save</StyledButton>
			<Buttons
				createdSymbols={createdSymbols}
				handleButtonClick={symbolFromButton => {
					renderSymbols(symbolFromButton);
				}}
			/>
		</StyledContainer>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object
};

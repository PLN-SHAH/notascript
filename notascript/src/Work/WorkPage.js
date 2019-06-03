import React, { useState } from 'react';
import Buttons from './Buttons';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title } from '../misc/Style.js';

const StyledSymbols = styled.section`
	font-size: 2em;
	word-break: break-all;
	width: 100vw;
	padding: 20px;
	min-height: 350px;
	overflow-y: scroll;
`;

const StyledTitle = styled(Title)`
	padding: 20px;
`;

const StyledButton = styled.button`
	position: absolute;
	right: 0;
	width: 100px;
	border: none;
	padding: 5px;
	background: #170444;
	color: white;
`;

const StyledContainer = styled.section`
	display: grid;
	grid-template-rows: 50px auto auto;
`;

export default function WorkPage({
	selectedDocument,
	history,
	filterList,
	dictionaries
}) {
	const { title, symbols } = selectedDocument;
	const createdSymbols = createUnicodes('0200', 40);

	console.log(filterList, 'filerList in workpage');

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

	function updateSymbols() {
		setNewSymbolList(
			(newSymbolList &&
				newSymbolList.forEach(symbol => symbols.push(symbol))) ||
				symbols
		);
		history.push('/');
	}

	return (
		<StyledContainer>
			<StyledTitle>{selectedDocument && title}</StyledTitle>
			<StyledSymbols>
				<span>
					{selectedDocument && symbols}
					{newSymbolList}
				</span>
			</StyledSymbols>
			<StyledButton onClick={updateSymbols}>save</StyledButton>
			<Buttons
				createdSymbols={createdSymbols}
				handleButtonClick={symbolFromButton => {
					renderSymbols(symbolFromButton);
				}}
				filterList={filterList}
				dictionaries={dictionaries}
			/>
		</StyledContainer>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object
};

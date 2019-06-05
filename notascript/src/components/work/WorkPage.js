import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Symbols from './Symbols';
import styled from 'styled-components';
import { Title } from '../../misc/Style.js';

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
	font-size: 1em;
	background: lightgrey;
	padding: 5px;

	> i {
		color: white;
	}
`;

const StyledContainer = styled.section`
	display: grid;
	grid-template-rows: 50px auto auto;
`;

const StyledToolbar = styled.section`
	position: absolute;
	right: 0;
`;

export default function WorkPage({
	selectedDocument,
	history,
	dictionaryList
}) {
	const { title, symbols } = selectedDocument || {};
	const createdSymbols = createUnicodes(200, 40);

	let [newSymbolList, setNewSymbolList] = useState(symbols);

	function createUnicodes(start, range) {
		return Array(range)
			.fill('')
			.map((item, index) => {
				const charCode = start + index;
				const unicode = '0x0' + charCode;
				const key = String.fromCodePoint(unicode);

				return {
					key,
					value: key // TODO: choose some value
				};
			});
	}

	function renderSymbols(symbolFromButton) {
		setNewSymbolList((newSymbolList = [...newSymbolList, symbolFromButton]));
	}

	function updateSymbols(event) {
		setNewSymbolList(
			(newSymbolList &&
				newSymbolList.forEach(symbol => symbols.push(symbol))) ||
				symbols
		);
		history.push('/');
	}

	function unDoSymbols() {
		newSymbolList.pop();
		setNewSymbolList((newSymbolList = [...newSymbolList]));
	}

	return (
		<StyledContainer>
			<StyledTitle>{selectedDocument && title}</StyledTitle>
			<StyledSymbols>
				<span>{selectedDocument && newSymbolList}</span>
			</StyledSymbols>
			<StyledToolbar>
				<StyledButton onClick={updateSymbols}>
					<i className='far fa-check-square' />
				</StyledButton>
				<StyledButton onClick={unDoSymbols}>
					<i className='fas fa-undo' />
				</StyledButton>
			</StyledToolbar>
			<Symbols
				createdSymbols={createdSymbols}
				dictionaryList={dictionaryList}
				handleButtonClick={symbolFromButton => {
					renderSymbols(symbolFromButton);
				}}
			/>
		</StyledContainer>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object,
	dictionaryList: PropTypes.array
};

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Symbols from './Symbols';
import styled from 'styled-components';
import { Title, Subtitle, NavIcon } from '../../misc/Style.js';

const StyledSymbols = styled.section`
	font-size: 2em;
	word-break: break-all;
	width: 100vw;
	padding: 20px;
	min-height: 350px;
	overflow-y: scroll;

	span {
		padding: 0 10px;
	}
`;

const StyledTitle = styled(Title)`
	padding: 20px;
	color: #373f43;
	display: grid;
	font-weight: bold;
`;

const StyledSubtitle = styled(Subtitle)``;

const StyledNavIcon = styled(NavIcon)``;

const StyledButton = styled.button`
	font-size: 1.5em;
	background: lightgrey;
	padding: 5px;

	> i {
		color: white;
	}
`;

const StyledContainer = styled.section`
	display: grid;
	grid-template-rows: 50px auto auto;
	border-top: 5px solid #d32e4a;
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
			<StyledTitle>
				<StyledSubtitle>document title</StyledSubtitle>
				{selectedDocument && title}
			</StyledTitle>
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
			<StyledNavIcon className='fas fa-file-signature' />
		</StyledContainer>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object,
	dictionaryList: PropTypes.array
};

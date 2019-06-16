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
	height: 350px;
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

const StyledContainer = styled.section`
	display: grid;
	grid-template-rows: 50px auto auto;
	border-top: 5px solid #d32e4a;
`;

const StyledToolbar = styled.section`
	position: absolute;
	right: 0;
	top: 35px;

	> button {
		background: lightgrey;
		padding: 5px;
		font-size: 1.5em;
	}
`;

export default function WorkPage({
	dictionaries,
	selectedDocument,
	updateDocumentSymbols,
	history
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
					value: key
				};
			});
	}

	function renderSymbols(symbolFromButton) {
		setNewSymbolList((newSymbolList = [...newSymbolList, symbolFromButton]));
	}

	const updateSymbols = () => {
		selectedDocument.symbols = [...newSymbolList];
		updateDocumentSymbols(selectedDocument);
		history.push('/');
	};

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
			<section>
				<StyledToolbar>
					<button onClick={updateSymbols}>
						<i className='far fa-check-square' />
					</button>
					<button onClick={unDoSymbols}>
						<i className='fas fa-undo' />
					</button>
				</StyledToolbar>
				<Symbols
					handleButtonClick={symbolFromButton => {
						renderSymbols(symbolFromButton);
					}}
					createdSymbols={createdSymbols}
					dictionaries={dictionaries}
				/>
			</section>
			<StyledNavIcon className='fas fa-file-signature' />
		</StyledContainer>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object,
	dictionaries: PropTypes.array,
	updateDocumentSymbols: PropTypes.func,
	history: PropTypes.object
};

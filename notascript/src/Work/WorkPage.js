import React, { useState } from './node_modules/react';
import Buttons from './Buttons';
import styled from './node_modules/styled-components';
import PropTypes from './node_modules/prop-types';
import { Title } from '../../misc/Style.js';

const StyledContainer = styled.section`
	display: grid;
	grid-template-rows: 50px auto auto;
`;

const StyledTitle = styled(Title)`
	padding: 20px;
`;

const StyledSymbols = styled.section`
	font-size: 2em;
	word-break: break-all;
	width: 100vw;
	padding: 20px;
	min-height: 350px;
	overflow-y: scroll;
`;

const StyledToolbar = styled.section`
	position: absolute;
	right: 0;
`;

const StyledButton = styled.button`
	font-size: 1em;
	background: lightgrey;
	padding: 5px;

	> i {
		color: white;
	}
`;

export default function WorkPage({ dictionaries, selectedDocument, history }) {
	const { title, symbols } = selectedDocument;
	const createdSymbols = createUnicodes(200, 40);

	let [newSymbols, setNewSymbols] = useState(symbols);

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
		setNewSymbols([...newSymbols, symbolFromButton]);
	}

	function updateSymbols() {
		setNewSymbols(
			(newSymbols && newSymbols.forEach(symbol => symbols.push(symbol))) ||
				symbols
		);
		history.push('/');
	}

	function unDoSymbols() {
		newSymbols.pop();
		setNewSymbols([...newSymbols]);
	}

	return (
		<>
			{selectedDocument && (
				<StyledContainer>
					<StyledTitle>{title}</StyledTitle>
					<StyledSymbols>
						<span>{newSymbols}</span>
					</StyledSymbols>
					<StyledToolbar>
						<StyledButton onClick={updateSymbols}>
							<i className='far fa-check-square' />
						</StyledButton>
						<StyledButton onClick={unDoSymbols}>
							<i className='fas fa-undo' />
						</StyledButton>
					</StyledToolbar>
					<Buttons
						createdSymbols={createdSymbols}
						dictionaries={dictionaries}
						handleButtonClick={symbolFromButton => {
							renderSymbols(symbolFromButton);
						}}
					/>
				</StyledContainer>
			)}
		</>
	);
}

WorkPage.propTypes = {
	selectedDocument: PropTypes.object,
	dictionaries: PropTypes.array,
	history: PropTypes.object
};

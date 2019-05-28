import React from 'react';
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

	function createUnicodes(start, counter) {
		return Array(counter)
			.fill('')
			.map(() => {
				start++;
				let unicode = '0x' + start;
				return String.fromCodePoint(unicode);
			});
	}

	return (
		<>
			<StyledTitle>{selectedDocument && selectedDocument.title}</StyledTitle>
			<StyledSymbols>{symbols}</StyledSymbols>
			<Buttons
				buttonLabels={createdSymbols}
				handleButtonClick={buttonLabel => handleButtonClick(buttonLabel)}
			/>
		</>
	);
}

WorkPage.propTypes = {
	symbols: PropTypes.array,
	handleButtonClick: PropTypes.func,
	selectedDocument: PropTypes.object
};

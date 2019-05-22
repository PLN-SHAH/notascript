import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Buttons from './Buttons';
import Test from './Test';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

const StyledOutput = styled.section`
	max-width: 100vw;
	border: 1px solid black;
	word-break: break-all;
	font-size: 3em;
`;

export default class Work extends Component {
	render() {
		return (
			<>
				<StyledOutput>{this.state.outputStream}</StyledOutput>
				<Buttons
					buttonLabels={[
						String.fromCodePoint(0x03a3),
						String.fromCodePoint(0x03b6),
						String.fromCodePoint(0x03a6),
						String.fromCodePoint(0x03a9),
						String.fromCodePoint(0x03df),
						String.fromCodePoint(0x03f4)
					]}
					handleButtonClick={label => this.handleButtonClick(label)}
				/>
			</>
		);
	}
}

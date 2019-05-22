import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: white;
	border: 0;
	margin-right: 5px;
	border-bottom: 5px solid #4c4a58;
	height: 50px;
	width: 50px;

	&:hover,
	&:active {
		border-bottom: 15px solid #4c4a58;
		font-size: 2.2em;
	}
`;

const StyledOutput = styled.section`
	max-width: 100vw;
	border: 1px solid black;
	word-break: break-all;
	font-size: 3em;
`;

const StyledButtonContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-self: end;
`;

export default class App extends Component {
	state = {
		outputStream: [],
		actualSign: ''
	};

	//getButtonValue
	handleClick = event => {
		const content = event.target.innerHTML;
		this.setState({
			actualSign: content,
			outputStream: [...this.state.outputStream, content]
		});
		if (this.state.outputStream.length % 4 === 0) {
			//console.log("outputStream: mod 4  ", outputStream);
			this.sliceArray(this.state.outputStream);
		}
	};

	sliceArray(array) {
		let slicedArray = [];

		//toDo change 4 dynamically
		for (let i = 0; i < array.length; i += 4) {
			slicedArray.push(array.slice(i, i + 4));
		}
		console.log(slicedArray, 'sliced array');

		console.log(this.state.outputStream);
		return slicedArray;
	}

	render() {
		return (
			<main>
				<Header />
				<StyledOutput>{this.state.outputStream}</StyledOutput>
				<StyledButtonContainer>
					<StyledButton onClick={this.handleClick}>&#1049;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#859;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#1029;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#995;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#1049;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#859;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#1029;</StyledButton>
					<StyledButton onClick={this.handleClick}>&#995;</StyledButton>
				</StyledButtonContainer>
				<Footer />
			</main>
		);
	}
}

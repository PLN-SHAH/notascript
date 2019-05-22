import React, { Component } from 'react';
import styled from 'styled-components';

const StyledOutput = styled.section`
	max-width: 100vw;
	border: 1px solid black;
	word-break: break-all;
	font-size: 3em;
`;

const StyledButton = styled.button`
	padding: 20px;
	font-size: 2em;
	color: white;
	border: 0;
	margin-right: 5px;
	border-bottom: 5px solid #4c4a58;

	&:hover,
	&:active {
		border-bottom: 15px solid #4c4a58;
		font-size: 2.2em;
	}
`;

export default class Work extends Component {
	render() {
		return (
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
		);
	}
}

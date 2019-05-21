import React, { Component } from "react";
import styled from "styled-components";

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

export default class Button extends Component {
  state = {
    buttons: ["a", "b", "c", "d"]
  };

  renderButtons() {
    this.state.buttons.forEach(button => {});
  }

  render() {
    return <StyledButton render={this.renderButtons()}>&#1049;</StyledButton>;
  }
}

/*
      <StyledButton onClick={this.handleClick}>&#859;</StyledButton>
      <StyledButton onClick={this.handleClick}>&#1029;</StyledButton>
      <StyledButton onClick={this.handleClick}>&#995;</StyledButton>
      */

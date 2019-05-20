import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
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

export default class App extends Component {
  state = {
    outputStream: [],
    output: ""
  };

  //getButtonValue
  handleClick = event => {
    const content = event.target.innerHTML;
    this.setState({
      outputStream: [...this.state.outputStream, content],
      output: content
    });
  };

  render() {
    console.log(this.state);
    return (
      <main>
        <Header />
        <div>output: content={this.state.output}</div>
        <div>
          outputStream: {this.state.outputStream}{" "}
          {this.state.outputStream.length}
        </div>
        <StyledButton onClick={this.handleClick}>&#1049;</StyledButton>
        <StyledButton onClick={this.handleClick}>&#859;</StyledButton>
        <StyledButton onClick={this.handleClick}>&#1029;</StyledButton>
        <StyledButton onClick={this.handleClick}>&#995;</StyledButton>
        <Footer />
      </main>
    );
  }
}

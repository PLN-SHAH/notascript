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

const StyledOutput = styled.section`
  max-width: 100vw;
  border: 1px solid black;
  word-break: break-all;
`;

export default class App extends Component {
  state = {
    outputStream: [],
    actualSign: ""
  };

  //getButtonValue
  handleClick = event => {
    const content = event.target.innerHTML;
    this.setState({
      actualSign: content,
      outputStream: [...this.state.outputStream, content]
    });
  };

  componentDidUpdate() {
    const outputStream = this.state.outputStream;

    //save every 9 item array in cache
    if (outputStream.length % 4 === 0) {
      //console.log("outputStream: mod 4  ", outputStream);
      this.sliceArray(outputStream);
    }
  }

  sliceArray(array) {
    let slicedArray = [];

    //toDo change 4 dynamically
    for (let i = 0; i < array.length; i += 4) {
      slicedArray.push(array.slice(i, i + 4));
    }

    console.log(slicedArray, "sliced array function");
  }

  render() {
    console.log(this.state, "this state");
    return (
      <main>
        <Header />
        <StyledOutput>
          outputStream: {this.state.outputStream.length} <br />
          {this.state.outputStream}
        </StyledOutput>
        <StyledButton onClick={this.handleClick}>&#1049;</StyledButton>
        <StyledButton onClick={this.handleClick}>&#859;</StyledButton>
        <StyledButton onClick={this.handleClick}>&#1029;</StyledButton>
        <StyledButton onClick={this.handleClick}>&#995;</StyledButton>
        <Footer />
      </main>
    );
  }
}

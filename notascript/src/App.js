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
    outputStreamArray: [this.outputStream],
    output: ""
  };

  //getButtonValue
  handleClick = event => {
    const content = event.target.innerHTML;
    this.setState({
      output: content,
      outputStream: [...this.state.outputStream, content]
    });
  };

  componentDidMount() {
    //console.log("did mount", this.state.outputStream);
  }

  componentDidUpdate() {
    const outputStream = this.state.outputStream;
    let outputStreamArray = this.state.outputStreamArray;

    //save every 9 item array in cache
    if (outputStream.length % 9 === 0) {
      console.log("rest 0");
      let accStream = [];
      accStream = [...accStream, outputStream];
      outputStreamArray = [...outputStreamArray, accStream];
      console.log("outputStreamArray", outputStreamArray);

      console.log("zwischengespeichertes array", accStream);
      return accStream;
    } else {
      console.log("outputStream.length != 0", outputStream.length);
    }
  }

  render() {
    //console.log(this.state);
    return (
      <main>
        <Header />
        <div>typed {this.state.output}</div>
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

import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Buttons from "./Buttons";
import styled from "styled-components";

const StyledOutput = styled.section`
  max-width: 100vw;
  border: 1px solid black;
  word-break: break-all;
  font-size: 3em;
`;

export default class App extends Component {
  state = {
    outputStream: [],
    actualSign: ""
  };

  //getButtonValue
  handleButtonClick(label) {
    console.log("handleButtonClick", label);
    const content = label;

    this.setState({
      actualSign: content,
      outputStream: [...this.state.outputStream, content]
    });
    if (this.state.outputStream.length % 4 === 0) {
      //console.log("outputStream: mod 4  ", outputStream);
      this.sliceArray(this.state.outputStream);
    }
  }

  sliceArray(array) {
    let slicedArray = [];

    //toDo change 4 dynamically
    for (let i = 0; i < array.length; i += 4) {
      slicedArray.push(array.slice(i, i + 4));
    }
    console.log(slicedArray, "sliced array");

    console.log(this.state.outputStream);
    return slicedArray;
  }

  render() {
    return (
      <main>
        <Header />
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
        <Footer />
      </main>
    );
  }
}

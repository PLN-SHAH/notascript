import React, { Component } from "react";
import OutputStream from "./OutputStream";
import Buttons from "./Buttons";
import Header from "./Header";

export default class App extends Component {
  state = {
    cards: [],
    target: undefined
  };

  componentDidMount() {
    fetch("/cards")
      .then(res => res.json())
      .then(data => this.setState({ cards: data }))
      .catch(error => console.log(error));
  }

  render() {
    const { cards } = this.state;
    const { target } = this.state;

    return (
      <main>
        <Header />
        <OutputStream input="hajsjsldosdh" />
        <Buttons />
        <h1>git notascript</h1>
        <output>&#1049;</output>
        <p>typed: {target}</p>
      </main>
    );
  }
}

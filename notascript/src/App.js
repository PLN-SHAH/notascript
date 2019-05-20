import React, { Component } from "react";
import OutputStream from "./OutputStream";
import Buttons from "./Buttons";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends Component {
  state = {
    target: undefined
  };

  render() {
    return (
      <main>
        <Header />
        <OutputStream input="hajsjsldosdh" />
        <Buttons />
        <Footer />
      </main>
    );
  }
}

import Pokedex from "./Pokedex";
import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <>
        <Pokedex id="pokedex"></Pokedex>
      </>
    );
  }
}

export default App;

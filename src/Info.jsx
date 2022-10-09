import ABOUT from './InfoComponents/About.jsx';
import CHARACTERISTICS from './InfoComponents/Characteristics.jsx';
import TYPE from './InfoComponents/Type.jsx';

import React, { Component } from "react";

export class INFO extends Component {
  constructor(props) {
    // constructor
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <ABOUT flavortext={this.props.flavortext}></ABOUT>
        <CHARACTERISTICS
          abilities={this.state.abilities}
          height={this.state.height}
          weight={this.state.weight}
        ></CHARACTERISTICS>
        <TYPE types={this.state.types}></TYPE>
      </>
    );
  }
}

export default INFO;

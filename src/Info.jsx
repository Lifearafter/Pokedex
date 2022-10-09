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
          abilities={this.props.abilities}
          height={this.props.height}
          weight={this.props.weight}
        ></CHARACTERISTICS>
        <TYPE types={this.props.types}></TYPE>
      </>
    );
  }
}

export default INFO;

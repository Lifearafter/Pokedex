import ABOUT from "./About.jsx";
import CHARACTERISTICS from "./Characteristics.jsx";
import TYPE from "./Type.jsx";

import React, { Component } from "react";

export class INFO extends Component {
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

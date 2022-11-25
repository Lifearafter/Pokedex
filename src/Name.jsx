import React, { Component } from "react";
import "./Name.css";

export class NAME extends Component {
  name = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
  pokeid = "#" + this.props.pokeid.toString().padStart(3, "0");

  render() {
    return (
      <>
        <div id="main-container">
          <div id="pokeid-container">{this.pokeid}</div>
          <div id="name-container">{this.name}</div>
        </div>
      </>
    );
  }
}

export default NAME;

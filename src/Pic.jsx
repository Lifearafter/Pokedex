import React, { Component } from "react";

export class Pic extends Component {

  render() {
    return (
      <>
        <img src={this.props.artwork} alt="artwork" />
      </>
    );
  }
}

export default Pic;

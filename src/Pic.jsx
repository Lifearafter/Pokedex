import React, { Component } from "react";

export class Pic extends Component {

  render() {
    return (
      <div index='ImageContainer'>
        <img src={this.props.artwork} alt="artwork" />
      </div>
    );
  }
}

export default Pic;

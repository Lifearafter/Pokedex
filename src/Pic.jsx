import React, { Component } from "react";

export class Pic extends Component {
  constructor(props) {
    // constructor
    super(props);
    this.state = {};
    console.log(this.props.artwork);
  }

  render() {
    return (
      <>
        <img src={this.props.artwork} alt="artwork" />
      </>
    );
  }
}

export default Pic;

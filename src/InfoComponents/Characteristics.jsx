import React, { Component } from "react";

export class Characteristics extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>{this.props.height}</div>
        <div>{this.props.weight}</div>
      </>
    );
  }
}

export default Characteristics;

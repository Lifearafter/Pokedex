import React, { Component } from "react";

export class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.flavortext}</div>;
  }
}

export default About;

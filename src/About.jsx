import React, { Component } from "react";

export class About extends Component {
  description = this.props.flavortext.replace(/\f/g, " ");

  render() {
    return <div>{this.description}</div>;
  }
}

export default About;

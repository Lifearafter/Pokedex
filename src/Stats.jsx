import React, { Component } from "react";

export class Stats extends Component {
  render() {
    if (Array.isArray(this.props.stats) === false) {
      console.log("not an array");
    } else {
      return (
        <>
          {this.props.stats.map((stat, index) => {
            return <div key={index}>{stat.stat.name}</div>;
          })}
        </>
      );
    }
  }
}

export default Stats;
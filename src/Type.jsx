import React, { Component } from "react";

export class Type extends Component {
  render() {
    return (
      <>
        {this.props.types.map((type, index) => {
          return <div key={index}>{type.type.name}</div>;
        })}
      </>
    );
  }
}

export default Type;

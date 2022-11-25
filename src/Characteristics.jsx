import React, { Component } from "react";

export class Characteristics extends Component {
  render() {
    return (
      <>
        <div>{this.props.height}</div>
        <div>{this.props.weight}</div>

        {this.props.abilities.map((ability, index) => {
            return <div key={index}>{ability.ability.name}</div>;
        }
        )}
                
      </>
    );
  }
}

export default Characteristics;

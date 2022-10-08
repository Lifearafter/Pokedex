import React, { Component } from 'react'

export class Pokedex extends Component {
  render() {
    return (
      <>
        <div id='pic-pokemon'></div>
        <div id='info-pokemon'></div>
        <div id='stats-pokemon'></div>
        <div id='evolution-pokemon'></div>
      </>
    )
  }
}

export default Pokedex
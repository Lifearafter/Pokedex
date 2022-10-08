import INFO from './Info'
import STATS from './Stats'
import EVOLUTION from './Evolution'
import React, { Component } from 'react'


export class Pokedex extends Component {
  render() {
    return (
      <>
        <div id='pic-pokemon'></div>
        <INFO></INFO>
        <STATS></STATS>
        <EVOLUTION></EVOLUTION>
      </>
    )
  }
}

export default Pokedex
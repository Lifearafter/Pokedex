import INFO from "./Info";
import STATS from "./Stats";
import EVOLUTION from "./Evolution";
import PIC from "./Pic";

import React, { Component } from "react";

export class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadedPokeEnd: false,
      isLoadedSpeciesEnd: false,
      error: null, // error handling
      abilities: [],
      id: "",
      stats: [],
      types: [],
      artwork: "",
      flavortext: "",
      height: "",
      weight: "",
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({

            isLoadedPokeEnd: true,
            abilities: data.abilities,
            id: data.id,
            stats: data.stats,
            types: data.types,
            artwork: data.sprites.other["official-artwork"].front_default,
            height: data.height,
            weight: data.weight,
          })
        },
        (error) => { 
          this.setState({
            isLoadedPokeEnd: true,
            error,})})

    fetch("https://pokeapi.co/api/v2/pokemon-species/bulbasaur")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoadedSpeciesEnd: true,
            flavortext: result.flavor_text_entries[0].flavor_text,
          });
        },
        (error) => {
          this.setState({
            isLoadedSpeciesEnd: true,
            error,
          });
        }
      );
  }

  render() {
    if (
      this.state.isLoadedPokeEnd === true &&
      this.state.isLoadedSpeciesEnd === true
    ) {
      return (
        <>
          <PIC artwork={this.state.artwork}></PIC>
          <INFO
            flavortext={this.state.flavortext}
            abilities={this.state.abilities}
            height={this.state.height}
            weight={this.state.weight}
            types={this.state.types}
          ></INFO>
          <STATS stats={this.state.stats}></STATS>
          <EVOLUTION></EVOLUTION>
        </>
      );
    }
  }
}

export default Pokedex;

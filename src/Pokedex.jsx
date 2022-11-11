import INFO from "./Info";
import STATS from "./Stats";
import EVOLUTION from "./Evolution";
import PIC from "./Pic";

import { average } from "color.js";

import "./Pokedex.css";
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
      japname: "",
      color: "",
      colorbackground: "",
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
          });
        },
        (error) => {
          this.setState({
            isLoadedPokeEnd: true,
            error,
          });
        }
      );

    fetch("https://pokeapi.co/api/v2/pokemon-species/bulbasaur")
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoadedSpeciesEnd: true,
            flavortext: result.flavor_text_entries[0].flavor_text,
            japname: result.names[0].name,
            color: result.color.name,
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

  colorRandomizer(img) {
    average(img, {format: 'hex'} ).then((err, color) => {
      if (err) {
        console.log(err);
        return "#ffffff";
      } else {
        this.setState({colorbackground: color});
      }
    });
  
  }

  render() {
    if (
      this.state.isLoadedPokeEnd === true &&
      this.state.isLoadedSpeciesEnd === true
    ) {
      let color = this.colorRandomizer(this.state.artwork);
      console.log(color);
      return (
        <div id="dex-container" style={this.state.backgroundColor}>
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
        </div>
      );
    }
  }
}

export default Pokedex;

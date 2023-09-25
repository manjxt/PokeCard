// PokemonList.js
import "./style.css";
import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCards";

function PokemonList({ pokemonData }) {
  return (
    <div className="pokemon-list">
      {pokemonData.map((pokemon, index) => (
        <PokemonCard key={index} {...pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;

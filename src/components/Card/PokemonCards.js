// PokemonCard.js

import React from "react";
import "./style.css";

function PokemonCard({ name, image, hp, attack, defense, type, speed }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Type: {type}</p>
      <p>Speed: {speed}</p>
    </div>
  );
}

export default PokemonCard;

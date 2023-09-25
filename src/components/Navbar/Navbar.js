import React, { useState } from "react";
import "./style.css";

function Navbar({ pokemonData, setFilteredPokemon }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredPokemon = pokemonData.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemon(filteredPokemon);
  };

  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="      Search Pokemon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
}

export default Navbar;

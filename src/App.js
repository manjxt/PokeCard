import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import PokemonList from "./components/Card/PokemonList";
import Pagination from "./components/pagination"; // Import Pagination component

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8; // Number of cards per page
  const totalResults = 20; // Total results to display
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const pokemonList = data.results.slice(
          (currentPage - 1) * cardsPerPage,
          currentPage * cardsPerPage
        );
        const updatedData = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url);
            const detailsData = await detailsResponse.json();
            return {
              name: pokemon.name,
              hp: detailsData.stats[0].base_stat,
              image: detailsData.sprites.other.dream_world.front_default,
              attack: detailsData.stats[1].base_stat,
              defense: detailsData.stats[2].base_stat,
              type: detailsData.types[0].type.name,
              speed: detailsData.stats[5].base_stat,
            };
          })
        );
        setPokemonData(updatedData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / cardsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <div className="App">
        <h1 className="title">PokeCard</h1>
        <Navbar
          pokemonData={pokemonData}
          setFilteredPokemon={setPokemonData} // Updated to setPokemonData
        />
        <PokemonList pokemonData={pokemonData} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;

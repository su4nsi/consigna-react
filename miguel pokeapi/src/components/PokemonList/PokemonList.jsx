// components/PokemonList/PokemonList.jsx
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = ({ pokedata, index, loadItems }) => {
  const currentData = pokedata[index];

  if (!currentData || currentData.length === 0) {
    return (
      <div>
        <p>No results found</p>
        <button
          onClick={() => {
            localStorage.setItem("query", "");
            loadItems();
          }}
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <>
      {currentData.map((pokemon) => {
        const parts = pokemon.url.split("/");
        const id = parts[parts.length - 2];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
          <Link
            key={id}
            className="link-pokemon"
            to={`/pokedex/${pokemon.name}`}
          >
            <PokemonCard
              id={id}
              name={pokemon.name}
              imageUrl={imageUrl}
              to={`/pokedex/${pokemon.name}`}
            />
          </Link>
        );
      })}
    </>
  );
};

export default PokemonList;

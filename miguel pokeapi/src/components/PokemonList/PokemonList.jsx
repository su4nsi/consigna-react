import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";
import { useNavigate } from "react-router-dom";

const PokemonList = ({ pokedata, index }) => {
  const currentData = pokedata[index];
  const navigate = useNavigate();

  if (!currentData || currentData.length === 0) {
    return (
      <div className="error-list-box">
        <h2 className="noresults-list">No results found</h2>
        <button
          className="link-region alt"
          onClick={() => {
            localStorage.setItem("query", "");
            navigate(0);
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

import { useEffect } from "react";
import { usePokemonLogic } from "./usePokemonLogic";
import { useNavigate } from "react-router-dom";
import "./Pokemon.css";
const Pokemon = () => {
  const {
    status,
    error,
    loadItemsById,
    data,
    pokemonName,
    pokemonBehind,
    pokemonAfter,
  } = usePokemonLogic();

  useEffect(() => {
    loadItemsById(pokemonName);
  }, [pokemonName]);

  const navigate = useNavigate();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") return <p>Error: {error}</p>;
  console.log(pokemonName, pokemonBehind(), pokemonAfter());
  return (
    <>
      <div className="pokemon-container">
        <div className="pokemon-header">
          <img src={data?.sprites?.front_default} alt={data?.name} />
          <h3>
            {"#"}
            {data.id}
          </h3>
          <h3> {data.name}</h3>
        </div>
        <div className="pokemon-more">
          <p>
            {"Height"}
            {data.height}
          </p>
          <p>
            {" "}
            {"Weight"}
            {data.weight}
          </p>
          TYPE
          {data?.types?.map((typeO) => (
            <span key={typeO.type.name}>{typeO.type.name}</span>
          ))}
        </div>
        <div className="abilities-moves">
          ABILITIES
          {data?.abilities?.map((abilitiesO) => (
            <span key={abilitiesO.ability.name}>{abilitiesO.ability.name}</span>
          ))}
          MOVES
          {data?.moves?.map((movesO) => (
            <span key={movesO.move.name}>{movesO.move.name}</span>
          ))}
        </div>

        <button
          className="link-pokedex"
          disabled={!pokemonBehind()}
          onClick={() => navigate(`/pokedex/${pokemonBehind()}`)}
        >
          Backward
        </button>
        <button
          className="link-pokedex"
          disabled={!pokemonAfter()}
          onClick={() => navigate(`/pokedex/${pokemonAfter()}`)}
        >
          Forward
        </button>
        <button className="link-pokedex" onClick={() => navigate(`/`)}>
          Go Back to Pokedex
        </button>
      </div>
    </>
  );
};

export default Pokemon;

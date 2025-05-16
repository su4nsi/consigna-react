import { useEffect } from "react";
import { usePokemonLogic } from "./usePokemonLogic";
import { useNavigate } from "react-router-dom";

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
          <img src={data?.sprites?.front_default} alt={data?.name} />
          {data.name}
          {" #"}
          {data.id}
        </div>
        <div className="pokemon-more">
          {"height"}
          {data.height}
          {"weight"}
          {data.weight}
          TYPE
          {data?.types?.map((typeO) => (
            <span key={typeO.type.name}>{typeO.type.name}</span>
          ))}
          ABILITIES
          {data?.abilities?.map((abilitiesO) => (
            <span key={abilitiesO.ability.name}>{abilitiesO.ability.name}</span>
          ))}
          MOVES
          {data?.moves?.map((movesO) => (
            <span key={movesO.move.name}>{movesO.move.name}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokemon;

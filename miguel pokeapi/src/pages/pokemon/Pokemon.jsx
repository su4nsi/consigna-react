import { useEffect } from "react";
import { usePokemonLogic } from "./usePokemonLogic";
import { Link } from "react-router-dom";
const Pokemon = () => {
  const { status, error, loadItemsById, data, pokemonName } = usePokemonLogic();

  useEffect(() => {
    loadItemsById(pokemonName());
  }, [pokemonName()]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <>
      <div className="pokemon-container">
        <div className="pokemon-header">
          <Link className="link-pokedex" to={`/`}>
            Go Back to Pokedex
          </Link>
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
        </div>
      </div>
    </>
  );
};

export default Pokemon;

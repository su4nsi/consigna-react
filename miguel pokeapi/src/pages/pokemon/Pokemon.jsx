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
    region,
  } = usePokemonLogic();

  useEffect(() => {
    loadItemsById(pokemonName);
  }, [pokemonName]);

  const navigate = useNavigate();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "failed") return <p>Error: {error}</p>;
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
          <div className="buttons">
            {region ? (
              <button
                className="link-pokedex"
                onClick={() => navigate(`/regions/${region}`)}
              >
                Back to region
              </button>
            ) : (
              <button className="link-pokedex" onClick={() => navigate(`/`)}>
                Back
              </button>
            )}
            <button
              className="link-pokedex"
              disabled={!pokemonBehind()}
              onClick={() => navigate(`/pokedex/${pokemonBehind()}`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              className="link-pokedex"
              disabled={!pokemonAfter()}
              onClick={() => navigate(`/pokedex/${pokemonAfter()}`)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
          <div className="morph">
            <p>
              <strong>Height:</strong> {data.height}
            </p>
            <p>
              <strong>Weight:</strong> {data.weight}
            </p>
          </div>
          <div className="pokemon-types">
            <strong>Types:</strong>
            {data?.types?.map((typeO) => (
              <span key={typeO.type.name} className="type">
                {typeO.type.name}
              </span>
            ))}
          </div>
          <div className="abilities-list">
            <strong>Abilities:</strong>
            {data?.abilities?.map((ab) => (
              <span key={ab.ability.name} className="ability">
                {ab.ability.name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <strong>Moves:</strong>
          <div className="moves-box">
            {data?.moves?.map((mv) => (
              <span key={mv.move.name} className="move">
                {mv.move.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;

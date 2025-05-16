import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import "./HomePage.css";
import { Link } from "react-router-dom";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
const HomePage = () => {
  const {
    status,
    error,
    loadItems,
    data,
    pokedata,
    index,
    isPokedataReady,
    setIndex,
    handleSearch,
  } = useHomePageLogic();

  useEffect(() => {
    loadItems();
  }, []);
  if (status === "loading" || isPokedataReady === false) {
    return <p>Loading...</p>;
  }
  if (status === "failed") return <p>Error: {error}</p>;
  else {
    return (
      <div className="pokedex-container">
        <div className="pokedex-subheader">
          <h1>Pokedex</h1>
          <Search onSearch={handleSearch} />
        </div>
        <div className="pokedex-grid">
          {pokedata[index]?.map((pokemon) => {
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
          }) || <p>No results found</p>}

          <Pagination
            index={index}
            setIndex={setIndex}
            total={pokedata.length}
          />
        </div>
      </div>
    );
  }
};

export default HomePage;

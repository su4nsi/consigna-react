import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import PokemonList from "../../components/PokemonList/PokemonList";
const HomePage = () => {
  const {
    status,
    error,
    loadItems,
    pokedata,
    index,
    setIndex,
    handleSearch,
    typesPokemon,
    handleFilterChange,
    isFilterOpen,
    setIsFilterOpen,
  } = useHomePageLogic();

  useEffect(() => {
    loadItems();
  }, []);

  console.log(isFilterOpen);
  return (
    <div className="pokedex-container">
      <div className="pokedex-subheader">
        <h1>Pokedex</h1>
        <Search onSearch={handleSearch} />
        <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
          Toggle Filter
        </button>
        {isFilterOpen && (
          <Filter
            typesPokemon={typesPokemon}
            onFilterChange={handleFilterChange}
          />
        )}
      </div>
      <div className="pokedex-grid">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "failed" ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <PokemonList
              pokedata={pokedata}
              index={index}
              loadItems={loadItems}
            />
            <Pagination
              index={index}
              setIndex={setIndex}
              total={pokedata.length}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;

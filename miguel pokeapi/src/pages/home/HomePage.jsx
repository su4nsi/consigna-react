import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import "./HomePage.css";
import ModalFilter from "../../components/filter/modalFilter/ModalFilter";
import PokemonList from "../../components/PokemonList/PokemonList";
import { useNavigate } from "react-router-dom";

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
    region,
  } = useHomePageLogic();
  const navigate = useNavigate();
  console.log("region is ", region, pokedata);
  return (
    <div className="pokedex-container">
      <div className="pokedex-subheader">
        {region && (
          <button
            className="link-region pokedex"
            onClick={() => navigate(`/regions`)}
          >
            Back
          </button>
        )}
        <h1>{region ? region + " pokedex" : "pokedex"}</h1>

        <div className="homepage-buttons">
          <Search onSearch={handleSearch} />
          {region === undefined && (
            <button onClick={() => setIsFilterOpen(true)}>
              Filter by Type
            </button>
          )}
        </div>
        <ModalFilter
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          typesPokemon={typesPokemon}
          onFilterChange={(filters) => {
            handleFilterChange(filters);
            setIsFilterOpen(false);
          }}
        />
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

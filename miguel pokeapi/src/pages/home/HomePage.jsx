import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import "./HomePage.css";
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
        <h1>Pokedex</h1>
        <Search onSearch={handleSearch} />
        {pokedata[index]?.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        )) || <p>No results found</p>}
        <Pagination index={index} setIndex={setIndex} total={pokedata.length} />
      </div>
    );
  }
};

export default HomePage;

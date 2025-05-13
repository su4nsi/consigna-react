import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";

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
        {pokedata[index].map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
        <Pagination index={index} setIndex={setIndex} total={pokedata.length} />
      </div>
    );
  }
};

export default HomePage;

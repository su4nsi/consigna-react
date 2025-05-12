import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";

const HomePage = () => {
  const { status, error, loadItems, data, pokedata, index, setIndex } =
    useHomePageLogic();

  useEffect(() => {
    loadItems();
  }, []);

  if (status === "loading" || !data || !Array.isArray(data) || !data[index]) {
    return <p>Loading...</p>;
  }
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="pokedex-container">
      <h1>Pokedex</h1>
      {data[index].map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
      <Pagination index={index} setIndex={setIndex} total={data.length} />
    </div>
  );
};

export default HomePage;

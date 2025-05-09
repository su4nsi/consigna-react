import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";
import Pagination from "../../components/pagination/Pagination";

const HomePage = () => {
    const { status, error, loadItems, data, pokedata, index,setIndex } = useHomePageLogic();

    useEffect(() => {
        loadItems();
    }, []);
    
    if (status === "loading" || !data?.results) return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    console.log("data",data);
    
    return (
        <div className="pokedex-container">
            <h1>Pokedex</h1>
            {data.results
            .slice(index * 20, (index  + 1) *20)
            .map((pokemon) => (
                    <li key={pokemon.name}>
                        {pokemon.name}
                    </li>
            ))}
            <Pagination index={index} setIndex={setIndex} total={data.results.length}/>
        </div>
    );
};

export default HomePage;

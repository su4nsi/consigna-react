import { useEffect } from "react";
import { useHomePageLogic } from "./useHomePageLogic";

const HomePage = () => {
    const { status, error, loadItems, data, pokedata } = useHomePageLogic();

    useEffect(() => {
        loadItems();
    }, []);

    if (status === "loading" || !data?.results) return <p>Loading...</p>;
    if (status === "failed") return <p>Error: {error}</p>;
    console.log("data",data);

    return (
        <div className="pokedex-container">
            <h1>Pokedex</h1>
            {data.results.map((pokemon) => (
                    <li key={pokemon.name}>
                        {pokemon.name}
                    </li>
                ))}
        </div>
    );
};

export default HomePage;

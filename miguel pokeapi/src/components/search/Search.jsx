import { useSearchLogic } from "./useSearchLogic";
import "./Search.css";

function Search({ onSearch }) {
  const { query, handleInputChange } = useSearchLogic(onSearch);

  return (
    <div className="search-container">
      <input
        type="text"
        className="input-search"
        placeholder="Search for pokemons"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;

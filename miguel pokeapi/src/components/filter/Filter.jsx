import useFilterLogic from "./useFilterLogic";
import "./Filter.css";

function Filter({ typesPokemon, onFilterChange }) {
  const { selectedTypes, handleTypeChange, getSelectedType } = useFilterLogic();

  const applyFilters = () => {
    onFilterChange({
      typesPokemon: getSelectedType(),
    });
  };

  return (
    <div className="filter-container">
      <h3>Filter by Type</h3>
      {typesPokemon.map((typePokemon) => (
        <label key={typePokemon}>
          <input
            type="checkbox"
            value={typePokemon}
            onChange={() => handleTypeChange(typePokemon)}
            checked={selectedTypes.includes(typePokemon)}
          />
          {typePokemon}
        </label>
      ))}
      <button onClick={applyFilters}> Apply </button>
    </div>
  );
}

export default Filter;

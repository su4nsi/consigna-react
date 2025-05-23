import useFilterLogic from "./useFilterLogic";
import "./Filter.css";

function Filter({ typesPokemon, onFilterChange, onClose }) {
  const { selectedTypes, handleTypeChange, getSelectedType } = useFilterLogic();

  const applyFilters = () => {
    onFilterChange({
      typesPokemon: getSelectedType(),
    });
  };

  return (
    <div className="filter-container">
      <h2>Types</h2>
      <div className="filter-grid">
        {typesPokemon.map((type) => {
          const isSelected = selectedTypes.includes(type);
          return (
            <div
              key={type}
              className={`type-box ${isSelected ? "selected" : ""}`}
              onClick={() => handleTypeChange(type)}
            >
              {type}
            </div>
          );
        })}
      </div>
      <div className="modal-filter-buttons">
        <button className="cancel" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="apply" onClick={applyFilters}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Filter;

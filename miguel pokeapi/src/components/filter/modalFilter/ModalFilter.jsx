import "./modalFilter.css";
import Filter from "../Filter";
const ModalFilter = ({ isOpen, onClose, typesPokemon, onFilterChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-filter-backdrop">
      <div className="modal-filter-content">
        <Filter
          typesPokemon={typesPokemon}
          onFilterChange={onFilterChange}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default ModalFilter;

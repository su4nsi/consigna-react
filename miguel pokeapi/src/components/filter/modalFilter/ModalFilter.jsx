import "./ModalFilter.css";
import Filter from "../Filter";
const ModalFilter = ({ isOpen, onClose, typesPokemon, onFilterChange }) => {
  if (!isOpen) return null;
  const handleBackdropClick = () => {
    onClose();
  };
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal-filter-backdrop" onClick={handleBackdropClick}>
      <div className="modal-filter-content" onClick={handleContentClick}>
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

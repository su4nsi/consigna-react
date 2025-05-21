import { useState } from "react";

const useFilterLogic = (initialTypes = []) => {
  const [selectedTypes, setSelectedTypes] = useState(initialTypes);

  const handleTypeChange = (typePokemon) => {
    setSelectedTypes((prev) =>
      prev.includes(typePokemon)
        ? prev.filter((item) => item !== typePokemon)
        : [...prev, typePokemon]
    );
  };

  const getSelectedType = () => selectedTypes;

  return {
    selectedTypes,
    handleTypeChange,
    getSelectedType,
  };
};

export default useFilterLogic;

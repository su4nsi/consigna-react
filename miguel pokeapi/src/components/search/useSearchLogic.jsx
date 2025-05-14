import { useState, useEffect } from "react";

export const useSearchLogic = (onSearch) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("query");
    if (saved) {
      setQuery(saved);
      onSearch(saved, true);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
    localStorage.setItem("query", value);
  };
  return {
    query,
    handleInputChange,
  };
};

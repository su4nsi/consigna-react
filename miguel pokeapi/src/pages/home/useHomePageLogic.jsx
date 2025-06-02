import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchItems,
  fetchItemsByType,
  clearItems,
} from "../../store/items/itemsSlice";
import { paginateArray } from "../../utils/pagination";
export const useHomePageLogic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.pokemons);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);
  const [pokedata, setPokedata] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [index, setIndex] = useState();
  const typesPokemon = [
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "stellar",
    "unknown",
  ];

  console.log("index", index);

  useEffect(() => {
    setPokedata(data);
  }, [data]);

  useEffect(() => {
    const numIndex = parseInt(localStorage.getItem("index"));
    if (numIndex && numIndex >= 0) {
      setIndex(numIndex);
    } else {
      localStorage.setItem("index", 0);
      setIndex(0);
    }
  }, []);

  useEffect(() => {
    if (index !== undefined) localStorage.setItem("index", index);
  }, [index]);

  const { region } = useParams();

  const loadItems = () => {
    dispatch(fetchItems());
  };

  const loadItemsByType = (typesFiltered) => {
    dispatch(fetchItemsByType(typesFiltered));
  };

  const clear = () => {
    dispatch(clearItems());
  };

  const handleSearch = (query, preload = false) => {
    const lowercasedQuery = query.toLowerCase();
    //Flat array pokedata
    const flatData = [];
    for (let i = 0; i < data.length; i++) {
      const subData = data[i];
      for (let j = 0; j < subData.length; j++) {
        flatData.push(subData[j]);
      }
    }
    //Filter
    const filtered = flatData.filter((pokemon) =>
      pokemon?.name?.toLowerCase().includes(lowercasedQuery)
    );
    //Paginate array pokedata
    const paginated = paginateArray(filtered);
    setPokedata(paginated);
    if (!preload) {
      setIndex(0);
    }
  };

  const handleFilterChange = (filters) => {
    const typesFiltered = filters.typesPokemon;
    localStorage.setItem("query", "");
    if (typesFiltered.length > 0) {
      loadItemsByType(typesFiltered);
    } else {
      loadItems();
    }
  };

  return {
    data,
    status,
    error,
    loadItems,
    clear,
    pokedata,
    index,
    setIndex,
    handleSearch,
    typesPokemon,
    handleFilterChange,
    setIsFilterOpen,
    region,
    isFilterOpen,
  };
};

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchItems, clearItems } from "../../store/items/itemsSlice";
export const useHomePageLogic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);
  const [pokedata, setPokedata] = useState([]);
  const [isPokedataReady, setIsPokedataReady] = useState(false);
  const [index, setIndex] = useState();
  console.log("index", index);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setPokedata(data);
      setIsPokedataReady(true);
    }
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

  const loadItems = () => {
    dispatch(fetchItems());
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
    const paginated = [];
    for (let i = 0; i < filtered.length; i += 20) {
      paginated.push(filtered.slice(i, i + 20));
    }
    setPokedata(paginated);
    if (!preload) {
      setIndex(0);
    }
    setIsPokedataReady(true);
  };

  return {
    data,
    status,
    error,
    loadItems,
    clear,
    pokedata,
    index,
    isPokedataReady,
    setIndex,
    handleSearch,
  };
};

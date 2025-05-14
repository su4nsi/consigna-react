import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  fetchItems,
  fetchItemById,
  clearItems,
} from "../../store/items/itemsSlice";
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

  const loadItemById = (id) => {
    dispatch(fetchItemById(id));
  };

  const clear = () => {
    dispatch(clearItems());
  };

  return {
    data,
    status,
    error,
    loadItems,
    loadItemById,
    clear,
    pokedata,
    index,
    isPokedataReady,
    setIndex,
  };
};

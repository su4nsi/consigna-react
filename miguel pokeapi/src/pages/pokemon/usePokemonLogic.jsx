import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchItemById, clearItems } from "../../store/items/itemsSlice";
export const usePokemonLogic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.data);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);
  useEffect(() => {
    console.log("data updated", data);
  }, [data]);

  const loadItemsById = (id) => {
    dispatch(fetchItemById(id));
  };

  const pokemonName = () => {
    return document.location.pathname.split("/").filter(Boolean).pop();
  };
  const clear = () => {
    dispatch(clearItems());
  };

  return {
    data,
    status,
    error,
    loadItemsById,
    pokemonName,
  };
};

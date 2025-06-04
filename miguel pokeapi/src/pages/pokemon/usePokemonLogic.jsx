import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchItemById, fetchItems } from "../../store/items/itemsSlice";
export const usePokemonLogic = () => {
  const dispatch = useDispatch();
  const dataAll = useSelector((state) => state.items.pokemons);
  const data = useSelector((state) => state.items.pokemon);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);
  const { pokemonName } = useParams();

  useEffect(() => {
    console.log("data pokemon updated", data);
  }, [data]);

  const loadItemsById = (id) => {
    dispatch(fetchItemById(id));
  };

  useEffect(() => {
    if (!dataAll || dataAll.length === 0) {
      dispatch(fetchItems());
    }
  }, [dataAll]);

  const region = localStorage.getItem("region");
  const pokemonBehind = () => {
    const flatData = [];
    for (let i = 0; i < dataAll?.length; i++) {
      const subData = dataAll[i];
      for (let j = 0; j < subData.length; j++) {
        flatData.push(subData[j]);
      }
    }
    const currentIndex = flatData.findIndex((p) => p.name === pokemonName);
    const prevPokemon = currentIndex > 0 ? flatData[currentIndex - 1] : null;
    return prevPokemon ? prevPokemon.name : null;
  };

  const pokemonAfter = () => {
    const flatData = [];
    for (let i = 0; i < dataAll.length; i++) {
      const subData = dataAll[i];
      for (let j = 0; j < subData.length; j++) {
        flatData.push(subData[j]);
      }
    }
    const currentIndex = flatData.findIndex((p) => p.name === pokemonName);
    const nextPokemon =
      currentIndex !== -1 && currentIndex < flatData.length - 1
        ? flatData[currentIndex + 1]
        : null;
    return nextPokemon ? nextPokemon.name : null;
  };

  return {
    data,
    status,
    error,
    loadItemsById,
    pokemonName,
    pokemonBehind,
    pokemonAfter,
    region,
  };
};

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRegionInfo } from "../../store/items/itemsSlice";
import { useParams } from "react-router-dom";
export const useLocationPageLogic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.regionInfo);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  const { region } = useParams();

  useEffect(() => {
    console.log("data regions locations updated", data);
  }, [data]);

  const loadRegionLocationItems = (id) => {
    dispatch(fetchRegionInfo(id));
  };

  const clear = () => {
    dispatch(clearItems());
  };

  return {
    data,
    status,
    error,
    loadRegionLocationItems,
    region,
  };
};

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRegionInfo } from "../../store/items/itemsSlice";
export const useRegionDetailLogic = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.items.regionInfo);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  useEffect(() => {
    console.log("data regions updated", data);
  }, [data]);

  const loadRegionItems = (id) => {
    dispatch(fetchRegionInfo(id));
  };

  const clear = () => {
    dispatch(clearItems());
  };

  return {
    data,
    status,
    error,
    loadRegionItems,
  };
};

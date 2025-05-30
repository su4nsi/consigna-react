import { useEffect } from "react";
import { useRegionDetailLogic } from "./useRegionDetailLogic";
const RegionDetailPage = () => {
  const { status, error, data, loadRegionItems, region } =
    useRegionDetailLogic();

  useEffect(() => {
    loadRegionItems(region);
  }, []);

  console.log("Here is the data", data);
  return (
    <div className="region-detail-container">
      <div className="region-detail-subheader">{region}</div>
      <div className="region-detail-content">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "failed" ? (
          <p>Error: {error}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RegionDetailPage;

import { useEffect } from "react";
import { useRegionDetailLogic } from "./useRegionDetailLogic";
const RegionDetailPage = () => {
  const { status, error, data, loadRegionItems } = useRegionDetailLogic();

  useEffect(() => {
    loadRegionItems("kanto");
  }, []);

  console.log("Here is the data", data);
  return (
    <div className="region-container">
      <div className="region-subheader"></div>
      <div className="region-content">
        {status === "loading" ? (
          <p>Loading...</p>
        ) : status === "failed" ? (
          <p>Error: {error}</p>
        ) : (
          <>RegionDetail</>
        )}
      </div>
    </div>
  );
};

export default RegionDetailPage;

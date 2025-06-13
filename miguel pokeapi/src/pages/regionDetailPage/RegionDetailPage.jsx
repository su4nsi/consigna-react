import { useEffect } from "react";
import { useRegionDetailLogic } from "./useRegionDetailLogic";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./RegionDetailPage.css";

const RegionDetailPage = () => {
  const { status, error, data, loadRegionItems, region, generation } =
    useRegionDetailLogic();
  const navigate = useNavigate();
  useEffect(() => {
    loadRegionItems(region);
  }, []);

  console.log("Here is the data", data);
  return (
    <div className="region-detail-container">
      {status === "loading" ? (
        <>
          <div className="info-container">
            <p>Loading...</p>
          </div>
        </>
      ) : status === "failed" ? (
        <div className="info-container">
          <p>Error: {error}</p>
        </div>
      ) : (
        <>
          <div className="region-detail-subheader">
            <h2>{region}</h2>
            <h3>generation {generation}</h3>
          </div>

          <div className="region-detail-content">
            <div className="region-detail-links">
              <Link
                className="region-detail-link"
                to={`/regions/${region}/pokedex`}
              >
                <h2>{region} pokedex</h2>
              </Link>
              <Link
                className="region-detail-link"
                to={`/regions/${region}/locations`}
              >
                <h2>locations</h2>
              </Link>
            </div>
            <button
              className="link-region"
              onClick={() => navigate(`/regions`)}
            >
              Back to regions
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RegionDetailPage;

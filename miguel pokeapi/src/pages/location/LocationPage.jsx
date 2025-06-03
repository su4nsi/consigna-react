import { useEffect } from "react";
import { useLocationPageLogic } from "./useLocationPageLogic";
import "./LocationPage.css";
import { useNavigate } from "react-router-dom";

const LocationPage = () => {
  const { status, error, data, loadRegionLocationItems, region } =
    useLocationPageLogic();
  const navigate = useNavigate();

  useEffect(() => {
    loadRegionLocationItems(region);
  }, []);

  console.log("Here is the locations data", data);
  return (
    <div className="location-detail-container">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "failed" ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="location-detail-subheader">
            <h2>{region} locations</h2>
          </div>

          <div className="location-detail-content">
            <div className="location-box">
              {data?.locations?.map((location, index) => (
                <span key={location.name} className="location">
                  {location.name}
                </span>
              ))}
            </div>
            <button
              className="link-region"
              onClick={() => navigate(`/regions/${region}`)}
            >
              Back to {region}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LocationPage;

import { useRegionLogic } from "./useRegionLogic.";
import RegionMenuCard from "../../components/RegionMenuCard/RegionMenuCard";
import { Link } from "react-router-dom";
import "./RegionPage.css";
const RegionPage = () => {
  const { regions } = useRegionLogic();
  console.log(regions);
  return (
    <div className="region-container">
      <div className="region-subheader">
        <h2>Regions</h2>
      </div>
      <div className="region-content">
        <>
          {regions.map((region, index) => (
            <Link key={index} className="region-link" to={`/regions/${region}`}>
              <RegionMenuCard
                name={region}
                index={index}
                to={`/regions/${region}`}
              ></RegionMenuCard>
            </Link>
          ))}
        </>
      </div>
    </div>
  );
};

export default RegionPage;

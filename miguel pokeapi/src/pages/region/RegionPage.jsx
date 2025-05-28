import { useRegionLogic } from "./useRegionLogic.";
import { Link } from "react-router-dom";
import RegionMenuCard from "../../components/RegionMenuCard/RegionMenuCard";
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
            <Link key={index} to={`/regions/${region}`}>
              <RegionMenuCard name={region}></RegionMenuCard>
            </Link>
          ))}
        </>
      </div>
    </div>
  );
};

export default RegionPage;

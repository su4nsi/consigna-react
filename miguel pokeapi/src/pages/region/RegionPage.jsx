import { useRegionLogic } from "./useRegionLogic.";
import { Link } from "react-router-dom";
const RegionPage = () => {
  const { regions } = useRegionLogic();
  console.log(regions);
  return (
    <div className="region-container">
      <div className="region-subheader"></div>
      <div className="region-content">
        <>
          {regions.map((region, index) => (
            <Link key={index} to={`/region/${region}`}></Link>
          ))}
        </>
      </div>
    </div>
  );
};

export default RegionPage;

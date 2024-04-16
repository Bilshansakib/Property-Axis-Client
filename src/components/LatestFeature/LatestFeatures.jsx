import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestFeatures = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} speed={50}>
        <Link to="/register">
          <div className="mt-8">
            <h2 className="uppercase p-2 underline items-center text-center text-3xl h-14 bg-gradient-to-r from-sky-500 to-indigo-500 ">
              ● agricultural land • ranches • farms • vineyards • forests •
              Plantations
            </h2>
          </div>
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestFeatures;

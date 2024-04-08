import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestFeatures = () => {
  return (
    <div>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/">
          sI can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestFeatures;

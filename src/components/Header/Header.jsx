import LatestFeatures from "../LatestFeature/LatestFeatures";

const Header = () => {
  return (
    <div className="bg-[url('/image/building.jpg')] relative min-h-screen min-w-96 rounded-xl bg-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  text-center object-fill mx-auto bg-no-repeat ">
      <h2 className="absolute top-80 mt-24 left-5 text-5xl font-semibold text-white ">
        Property Axis Invest
      </h2>
      <LatestFeatures></LatestFeatures>
    </div>
  );
};

export default Header;

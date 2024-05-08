import LatestFeatures from "../LatestFeature/LatestFeatures";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import SwiperImage from "../SwiperImage/SwiperImage";

const Header = () => {
  return (
    <div className="bg-[url('/image/building.jpg')] relative min-h-screen min-w-96 rounded-xl bg-cover transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  text-center object-fill mx-auto bg-no-repeat ">
      <h2
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="absolute transform  bottom-2 mt-24 left-5 text-5xl font-semibold text-white "
      >
        Property <span className="text-violet-600 md:text-blue-600">Axis</span>{" "}
        Invest
      </h2>
      <LatestFeatures></LatestFeatures>
      <div className="mt-11">
        <SwiperImage></SwiperImage>
      </div>
    </div>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Map from "../Map/Map";
import Stats from "../Stats/Stats";
import AsideImage from "./../AsideImage/AsideImage";

const Aside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="mt-4 space-y-12 p-6 rounded-t-xl bg-[url('/image/banner.jpg')]">
        <h2 className="text-3xl gap-4 ">All categories</h2>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="block ml-4 text-xl font-semibold"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
        <div className=" rounded-xl">
          <Map></Map>
        </div>
        <div className="text-center">
          <Stats></Stats>
        </div>
      </div>
      <div>
        <AsideImage></AsideImage>
      </div>
    </>
  );
};

export default Aside;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Map from "../Map/Map";

const Aside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <>
      <div className="h-96 w-52 border-6"></div>
      <div>
        {/* <Map></Map> */}
        <h2 className="text-2xl">All categories</h2>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="block ml-4 text-xl font-semibold"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Aside;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
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
  );
};

export default Aside;

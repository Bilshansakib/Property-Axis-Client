import { useLoaderData } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import EstateCard from "./EstateCard";
const Home = () => {
  const estate = useLoaderData();
  console.log(estate);
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-3">
          {estate.map((oneEstate) => (
            <EstateCard key={oneEstate.id} estate={oneEstate}></EstateCard>
          ))}
        </div>
        <div>
          <Aside></Aside>
        </div>
      </div>
    </div>
  );
};

export default Home;

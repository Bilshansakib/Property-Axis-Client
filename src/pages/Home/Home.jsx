import { useLoaderData } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import EstateCard from "./EstateCard";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const estate = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Property Axis | Home</title>
      </Helmet>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div data-aos="fade-up" data-aos-duration="1000" className="col-span-3">
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

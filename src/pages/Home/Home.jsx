import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import LatestFeatures from "../../components/LatestFeature/LatestFeatures";
import MainSide from "../../components/MainSide/MainSide";
import NavBar from "../../components/NavBar/NavBar";
const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <LatestFeatures></LatestFeatures>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-3">
          <MainSide></MainSide>
        </div>
        <div>
          <Aside></Aside>
        </div>
      </div>
    </div>
  );
};

export default Home;

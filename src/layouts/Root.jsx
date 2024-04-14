import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
const Root = () => {
  return (
    <div className=" mx-auto max-w-9xl font-kanit">
      <div className="mx-auto h-16">
        <NavBar></NavBar>
      </div>
      <div className="container lg:px-8 mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="container mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;

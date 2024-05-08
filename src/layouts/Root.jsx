import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const Root = () => {
  return (
    <div className=" mx-auto max-w-9xl font-kanit">
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        className="mx-auto  h-16"
      >
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

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../components/Scrolltop";
import AOS from "aos";
import "aos/dist/aos.css";

const AppLayout = () => {
  AOS.init({
    once: true,
    duration: 500,
  });
  return (
    <div>
      <Header />
      <div className="mt-20 lg:mt-[124px]">
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;

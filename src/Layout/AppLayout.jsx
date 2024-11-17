import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-20 lg:mt-[124px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;

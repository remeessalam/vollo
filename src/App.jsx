import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./landingpage/LandingPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutusPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/contact-us", element: <ContactPage /> },
    ],
  },
  {
    path: "/web-development",
    element: <LandingPage page={"web"} />,
  },
  {
    path: "/app-development",
    element: <LandingPage page={"app"} />,
  },
]);

export default AppRouter;

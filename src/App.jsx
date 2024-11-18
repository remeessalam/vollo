import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import ServicesPage from "./pages/ServicesPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutusPage /> },
      { path: "/services", element: <ServicesPage /> },
    ],
  },
]);

export default AppRouter;

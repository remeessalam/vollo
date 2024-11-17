import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about-us", element: <AboutusPage /> },
    ],
  },
]);

export default AppRouter;

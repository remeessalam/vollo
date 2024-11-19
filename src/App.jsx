import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutusPage = lazy(() => import("./pages/AboutusPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const LandingPage = lazy(() => import("./landingpage/LandingPage"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),

    children: [
      {
        path: "/",
        element: (
          // <Suspense fallback={<Loader />}>
          <HomePage />
          // </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          // <Suspense fallback={<Loader />}>
          <AboutusPage />
          // </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          // <Suspense fallback={<Loader />}>
          <ServicesPage />
          // </Suspense>
        ),
      },
      {
        path: "/contact-us",
        element: (
          // <Suspense fallback={<Loader />}>
          <ContactPage />
          // </Suspense>
        ),
      },
    ],
  },
  {
    path: "/web-development",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage page={"web"} />
      </Suspense>
    ),
  },
  {
    path: "/app-development",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage page={"app"} />
      </Suspense>
    ),
  },
]);

export default AppRouter;

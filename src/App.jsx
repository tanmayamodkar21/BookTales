import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AnalysisPage from "./page/AnalysisPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <OurServices />
          <AboutUs />
          <ContactUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/analysis",
      element: <AnalysisPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

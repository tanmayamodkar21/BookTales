import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <AboutUs />
      <ContactUs />
    </>
  );
};

export default App;

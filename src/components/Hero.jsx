import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { heroData } from "../data";
import HeroImage from "../assets/hero_img.svg";

const Hero = () => {
  const { isAuthenticated } = useAuth0();
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    if (isAuthenticated) {
      window.location.href = "https://hotel-app.streamlit.app/";
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-red-500 text-white font-bold rounded-t px-7 py-2">
            Alert
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>Please log in to explore.</p>
          </div>
        </div>
      )}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-20 md:py-44 md:justify-between">
        <section className="md:flex md:flex-col justify-center capitalize font-bold text-center md:text-left md:pl-28">
          <h1 className="text-4xl md:text-6xl text-gray-900 mb-4">
            {heroData.text1}
          </h1>
          <h1 className="text-4xl md:text-6xl text-orange-600 mb-4">
            {heroData.text2}
          </h1>
          <h1 className="text-4xl md:text-6xl text-gray-900 mb-8">
            {heroData.text3}
          </h1>
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300"
            type="button"
            onClick={handleClick}
          >
            Explore Now
          </button>
        </section>
        <section className="flex justify-center md:justify-end">
          <img
            src={HeroImage}
            alt="Hero"
            className="h-auto w-full md:max-w-lg rounded-lg shadow-lg"
          />
        </section>
      </div>
    </>
  );
};

export default Hero;

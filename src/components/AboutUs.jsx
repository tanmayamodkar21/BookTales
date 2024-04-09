import React from "react";
import pic from "../assets/about_img.svg";
import { about_data } from "../data";

const AboutUs = () => {
  return (
    <div
      className="py-16 md:py-44 text-center text-orange-900 font-bold text-4xl md:text-5xl"
      id="about"
    >
      <h1 className="underline underline-offset-8">About Us</h1>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-10 justify-evenly">
        <section className="flex flex-col items-center justify-center">
          <img src={pic} alt="Data pic" className="h-64 md:h-96 w-64 md:w-96" />
        </section>
        <section>
          <p className="text-left text-lg md:text-3xl font-thin px-4 sm:px-52 pt-6 md:pt-44 pb-10 text-gray-800 tracking-wide">
            {about_data.text}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

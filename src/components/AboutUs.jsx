import React from "react";
import pic from "../assets/about_img.svg";
import { about_data } from "../data";

const AboutUs = () => {
  return (
    <div
      className="py-44 text-center text-orange-900 font-bold text-5xl"
      id="about"
    >
      <h1 className="underline underline-offset-8">About Us</h1>
      <div
        className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4  justify-evenly"
        id="about"
      >
        <section className="flex flex-col items-center justify-center">
          <img src={pic} alt="Data pic" className="h-96 w-96 " />
        </section>
        <section>
          <p className="text-left text-3xl font-thin px-52 pt-44 text-gray-800 tracking-wide no-underline">
            {about_data.text}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

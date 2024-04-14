import React from "react";
import pic from "../assets/about_img.svg";
import { about_data } from "../data";

const AboutUs = () => {
  return (
    <div className="py-16 md:py-32 text-center text-orange-900 font-bold text-4xl md:text-5xl bg-gray-100" id="about">
      <h1 className="underline underline-offset-8 mt-8 mb-6">About Us</h1> {/* Added margin top and bottom */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-10 justify-center items-center">
        <section className="flex justify-center items-center">
          <img src={pic} alt="Data pic" className="h-auto md:h-full max-w-full" />
        </section>
        <section className="text-left">
          <p className="text-lg md:text-2xl font-normal px-4 md:px-0 pb-10 text-gray-800 leading-relaxed">
            {about_data.text}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

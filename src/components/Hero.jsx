import React from "react";
import { heroData } from "../data";
import HeroImage from "../assets/hero_img.svg"; // Correct the import path

const Hero = () => {
  return (
    <div className=" mx-auto grid grid-cols-2 gap-4 px-4 py-44 justify-evenly">
      <section className=" capitalize font-bold text-9xl pt-20 md:pl-28">
        <h1>{heroData.text1}</h1>
        <h1 className="text-orange-900">{heroData.text2}</h1>
        <h1>{heroData.text3}</h1>
      </section>
      <section>
        <img src={HeroImage} alt="Hero" className="h-91 w-91 hidden md:block" />{" "}
        {/* Use imported image directly */}
      </section>
    </div>
  );
};

export default Hero;

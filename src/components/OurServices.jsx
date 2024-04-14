import React from "react";
import { services_data } from "../data";
import collect_data from "../assets/collect_data.svg";
import done_checking from "../assets/done_checking.svg";
import show_data from "../assets/show_data.svg";

const OurServices = () => {
  return (
    <div className="mx-auto bg-orange-800 py-20 md:py-40" id="services">
      <section>
        <h1 className="text-center text-white font-bold text-3xl md:text-5xl py-4 underline underline-offset-8 pt-2">
          {services_data.title}
        </h1>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-28 px-4 sm:px-10 pt-5">
        <div className="flex flex-col items-center bg-white rounded-md md:col-span-1 p-8">
          <img src={collect_data} alt="" className="services-cols-img h-40 mb-6" />
          <p className="text-lg font-normal text-center text-black tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat aperiam nobis eaque vero. Architecto fuga illo ipsum,
            consequatur quam quidem laudantium amet, aspernatur soluta pariatur
            esse ex odit consectetur?
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-md md:col-span-1 p-8">
          <img src={done_checking} alt="" className="services-cols-img h-40 mb-6" />
          <p className="text-lg font-normal text-center text-black tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat aperiam nobis eaque vero. Architecto fuga illo ipsum,
            consequatur quam quidem laudantium amet, aspernatur soluta pariatur
            esse ex odit consectetur?
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-md md:col-span-1 p-8">
          <img src={show_data} alt="" className="services-cols-img h-40 mb-6" />
          <p className="text-lg font-normal text-center text-black tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat aperiam nobis eaque vero. Architecto fuga illo ipsum,
            consequatur quam quidem laudantium amet, aspernatur soluta pariatur
            esse ex odit consectetur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

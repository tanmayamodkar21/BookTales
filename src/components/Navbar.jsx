import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <div className="mx-auto px-4 py-4 sm:flex sm:justify-between sm:items-center fixed top-0 left-0 right-0 bg-white rounded-sm">
      <section>
        <h1 className="text-3xl sm:text-5xl">
          Book<span className="text-orange-900">Tales</span>
        </h1>
      </section>
      <div className="flex gap-x-4">
        {links.map((link) => (
          <a
            className="py-4 text-lg hover:text-orange-900 hover:cursor-pointer capitalize font-medium"
            key={link.id}
            href={link.href}
          >
            {link.text}
          </a>
        ))}
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-orange-900 transition-colors duration-300 ease-out border-2 border-orange-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Track Expenses</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

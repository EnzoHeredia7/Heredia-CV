import React, { useState } from "react";
import { Laptop, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SecondaryBtn from "../Button/SecondaryBtn";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Technology",
      link: "/Technology",
    },
    {
      name: "Education",
      link: "/education",
    },
    {
      name: "Project",
      link: "/project",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="w-full h-auto bg-black shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3 fixed top-0 z-50">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              <Link to="/" className="text-3xl text-green-800 hover:text-green-300 ease-out duration-700 font-semibold tracking-[0.0.5rem] flex items-end gap-x-1 relative">
                HEREDIA, ENZO 
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-black rounded-md outline-none border border-transparent focus:border-black focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Navbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-green-800 text-lg font-medium hover:text-green-300 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <SecondaryBtn>DOWNLOAD CV</SecondaryBtn>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

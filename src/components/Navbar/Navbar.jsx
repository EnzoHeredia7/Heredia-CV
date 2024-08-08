import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import SecondaryBtn from "../Button/SecondaryBtn";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    { name: "Home", link: "hero" },
    { name: "About", link: "about" },
    { name: "Technology", link: "technology" },
    { name: "Education", link: "education" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      <nav className="w-full h-auto bg-black shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3 fixed top-0 z-50">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <ScrollLink
                to="hero"
                smooth={true}
                duration={1000} // Cambia este valor para ajustar la velocidad
                className="text-3xl text-green-800 hover:text-green-300 ease-out duration-700 font-semibold tracking-[0.0.5rem] flex items-end gap-x-1 relative cursor-pointer"
              >
                HEREDIA, ENZO 
              </ScrollLink>
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
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink
                    to={item.link}
                    smooth={true}
                    duration={1000} // Ajusta la duración para hacer la transición más suave
                    className="text-green-800 text-lg font-medium hover:text-green-300 ease-out duration-700 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
                  <a
          href="src/assets/Heredia-CV.pdf"
          download
            className='text-base text-white bg-green-600 font-medium px-3 py-1.5 rounded-full flex items-center border border-green-600 gap-x-1 hover:border-green-400 hover:bg-green-400 ease-out duration-500'
        >
          <SecondaryBtn>
            DOWNLOAD CV
          </SecondaryBtn>
        </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

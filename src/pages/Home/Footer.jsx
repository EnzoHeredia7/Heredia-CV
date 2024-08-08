import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MdOutlineEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Github } from 'lucide-react';
import { Laptop } from 'lucide-react';
import { TbDeviceMobileMessage } from 'react-icons/tb';

const Footer = () => {
  return (
    <div className='w-full h-auto flex items-center justify-center bg-black/30 flex-col py-3 lg:px-20 md:px-16 sm:px-6 px-4'>
      <div className='w-full h-auto flex items-start lg:justify-between md:justify-between sm:justify-center justify-center gap-5 mb-2 flex-wrap'>
        <div className='lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex lg:items-start md:items-start sm:items-center items-center flex-col justify-center'>
          <Link to="hero" smooth={true} duration={500} className="text-3xl justify-center text-green-800 hover:text-green-300 ease-out duration-700 font-semibold tracking-[0.0.5rem] flex items-end gap-x-1 relative cursor-pointer">
            HEREDIA, ENZO 
          </Link>
          <div className='w-full h-auto space-y-2'>
          <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
  <a href="mailto:Enzoarielheredia@gmail.com" className='flex items-center'>
    <MdOutlineEmail className='w-5 h-5' />
    <p className='text-base'>Enzoarielheredia@gmail.com</p>
  </a>
</div>
<div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
  <a href="https://wa.me/543434479528" target="_blank" rel="noopener noreferrer" className='flex items-center'>
    <FiPhone className='w-5 h-5' />
    <p className='text-base'>+58 9 3434479528</p>
  </a>
</div>
<div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
  <a href="https://www.linkedin.com/in/enzo-ariel-heredia" target="_blank" rel="noopener noreferrer" className='flex items-center'>
    <FaLinkedin className='w-5 h-5' />
    <p className='text-base'>Enzo Ariel Heredia</p>
  </a>
</div>

          </div>
        </div>

        <div className='lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex items-start lg:justify-between md:justify-between sm:justify-center justify-center flex-wrap gap-5'>
          <div className='lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center'>
            <h2 className='text-lg text-gray-200 font-medium mb-2 flex items-center gap-2'>
              <TbDeviceMobileMessage className='w-6 h-6 text-green-400' />
              Social Media
            </h2>
            <div className='w-full h-auto'>
              <ul className='w-full h-auto space-y-2'>
                <li className='w-full h-auto flex items-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <a href="https://www.instagram.com/enzoheredia7/" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <FaInstagram className='w-5 h-5'/> Instagram
                  </a>
                </li>
                <li className='w-full h-auto flex items-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <a href="https://github.com/EnzoHeredia7" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <Github className='w-5 h-5'/> GitHub
                  </a>
                </li>
                <li className='w-full h-auto flex items-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <a href="https://www.facebook.com/enzofutbal/" target="_blank" rel="noopener noreferrer" className='flex items-center'>
                    <FaFacebook className='w-5 h-5'/> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='lg:w-[30%] md:w-[48%] sm:w-[48%] w-full h-auto flex items-center flex-col justify-center'>
            <h2 className='text-lg text-gray-200 font-medium mb-2 flex items-center gap-2'>
              <Laptop className='w-5 h-5 text-green-400' />
              Platforms
            </h2>
            <div className='w-full h-auto'>
              <ul className='w-full h-auto space-y-2'>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Link to="hero" smooth={true} duration={500} className='flex items-center'>
                    Home
                  </Link>
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Link to="about" smooth={true} duration={500} className='flex items-center'>
                    About
                  </Link>
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Link to="technology" smooth={true} duration={500} className='flex items-center'>
                    Technology
                  </Link>
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Link to="education" smooth={true} duration={500} className='flex items-center'>
                    Education
                  </Link>
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Link to="projects" smooth={true} duration={500} className='flex items-center'>
                    Projects
                  </Link>
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Link to="contact" smooth={true} duration={500} className='flex items-center'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

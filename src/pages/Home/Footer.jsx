import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="text-3xl text-green-800 hover:text-green-300 ease-out duration-700 font-semibold tracking-[0.0.5rem] flex items-end gap-x-1 relative">
            HEREDIA, ENZO 
          </Link>
          <div className='w-full h-auto space-y-2'>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
              <MdOutlineEmail className='w-5 h-5'/>
              <p className='text-base'>Enzoarielheredia@gmail.com</p>
            </div>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
              <FiPhone className='w-5 h-5'/>
              <p className='text-base'> +58 9 3434479528</p>
            </div>
            <div className='w-full h-auto flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
              <FaLinkedin className='w-5 h-5'/>
              <p className='text-base'> Enzo Ariel Heredia</p>
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
                  <FaInstagram className='w-5 h-5'/> Instagram
                </li>
                <li className='w-full h-auto flex items-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <Github className='w-5 h-5'/> GitHub
                </li>
                <li className='w-full h-auto flex items-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  <FaFacebook className='w-5 h-5'/> Facebook
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
                  Home
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  About
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  Tecnologia
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  Education
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  Project
                </li>
                <li className='w-full h-auto flex items-center lg:justify-center md:justify-center sm:justify-center justify-center gap-x-2 text-gray-400 hover:text-green-600 ease-out duration-300 cursor-pointer'>
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Footer;

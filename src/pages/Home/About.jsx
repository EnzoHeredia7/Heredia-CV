import { Download, Laptop } from 'lucide-react';
import React from 'react';
import SecondaryBtn from '../../components/Button/SecondaryBtn';
import AboutsImg from '../../assets/Abouts-img.jpg'; // Corrige la ruta de la imagen
import "./about.css";

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-between gap-7 lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse">
      <div className='lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start md:text-start sm:text-start text-center'>
        <h6 className='text-lg font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 mb-3'>
          <Laptop className='w-5 h-5 -rotate-55 text-green-400' /> About Us
        </h6>
        <h1 className='lg:text-md md:text-md sm:text-sm text-xl font-semibold text-gray-500  mb-4 leading-normal lg:pe-3 md:pe-4 sm:pe-1 pe-0'>
          I am a frontend web developer passionate about creating well-designed and user-friendly web pages. I love what I do and am eager to keep learning and improving. My goal is always to deliver work that makes my clients happy.
        </h1>
        <h2 className='text-lg font-medium text-gray-200 mb-2'>Experience:</h2>
        <p className='lg:text-md md:text-md sm:text-sm text-sm text-gray-500 font-medium mb-8'>
          +1 Year Programming
        </p>
        <h2 className='text-lg font-medium text-gray-200 mb-2'>Cursos</h2>
        <p className='lg:text-md md:text-md sm:text-sm text-sm text-gray-500 font-medium mb-8'>
          +6 Completed 
        </p>
      </div>
      {/* Sección de Imagen */}
      <div className='image-container lg:w-[28%] md:w-[58%] sm:w-[55%] w-full h-auto relative overflow-hidden rounded-lg'>
        <img 
          src={AboutsImg}
          alt="About image"
          className='w-full lg:h-[50vh] md:h-[50vh] sm:h-[50vh] h-[55vh] object-cover' 
        />
        <a
          href="src/assets/CV-Heredia.pdf"
          download
        >
        <SecondaryBtn className='lg:w-full sm:w-full w-full px-7 py-2 text-base font-medium uppercase justify-center'>
          Download CV <Download className='w-5 h-5 -rotate-55 text-white' />
        </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default About;


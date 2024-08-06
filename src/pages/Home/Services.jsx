import { Dumbbell, MoveRight } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import React from 'react';
import TertiaryLink from '../../components/LinkBtn/TertiaryLink';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceData = [
    {
      id: 2,
      serviceImg: "https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      icons: [
        { component: FaHtml5, name: "HTML5" },
        { component: FaCss3Alt, name: "CSS3" },
        { component: FaReact, name: "React.js" },
      ],
      title: "Aprendiendo",
      desc: "Aprendizaje continuo de nuevas tecnologías web.",
      link: "/aprendiendo",
    },
  ];

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
      <Link className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-orange-400" />
        Servicios
      </Link>
      <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
        {serviceData.map((data) => {
          return (
            <div
              key={data.id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[60vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url(${data.serviceImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-full h-full bg-black/20 absolute top-0 left-0 z-10"></div>
              <div className="w-full h-full flex items-center justify-center flex-col text-white p-4 z-50">
                <h1 className="text-3xl text-gray-100 font-semibold text-center mb-4">{data.title}</h1>
                {data.icons.map((iconData, index) => {
                  const IconComponent = iconData.component;
                  return (
                    <div key={index} className='flex items-center mb-5'>
                      <div className='w-14 h-14 rounded-full bg-orange-600/20 border-4 border-orange-400/80 flex items-center justify-center mr-2'>
                        <IconComponent className='w-7 h-7 text-white' />
                      </div>
                      <span className='text-white text-lg'>{iconData.name}</span>
                    </div>
                  );
                })}
                <p className="text-base text-white font-normal text-center mb-4">
                  {data.desc}
                </p>
                <TertiaryLink link={data.link} className='rounded-full bg-orange-600/20 border-4 border-orange-400/80 text-white'>
                  Read More <MoveRight className="w-4 h-4" />
                </TertiaryLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;

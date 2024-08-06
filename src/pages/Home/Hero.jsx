import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import { FaGithub, FaLinkedin} from 'react-icons/fa';
import SecondaryBtn from '../../components/Button/SecondaryBtn';
import {MdOutlineMail } from 'react-icons/md';

const Hero = () => {
    const swiperData = [
        {
            id: 1,
            bgImg: "https://th.bing.com/th/id/OIP.siD0hKE8SrZwfxtBTd4HLwHaEK?rs=1&pid=ImgDetMain",
            slogan: "Developer Web",
            title: "With no requirements or design, programming alone is the art of adding errors to an empty file.",
            desc: "LOUIS, SRYGLEY",
        },

    ];

    const swiperStyles = {
        '.swiper-button-next, .swiper-button-prev': {
            color: '#ff4500', 
        },
        '.swiper-button-next::after, .swiper-button-prev::after': {
            fontSize: '50px', 
        },
    };

    return (
        <>
            <style>
                {`
                    .swiper-button-next, .swiper-button-prev {
                        color: ${swiperStyles['.swiper-button-next, .swiper-button-prev'].color};
                    }
                    .swiper-button-next::after, .swiper-button-prev::after {
                        font-size: ${swiperStyles['.swiper-button-next::after, .swiper-button-prev::after'].fontSize};
                    }
                `}
            </style>
            <div className='w-full h-auto'>
                <Swiper 
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper w-full h-auto"
                >
                    {swiperData.map((data) => (
          <SwiperSlide
          key={data.id}
          className='relative w-full h-[90vh]'
        >
          {/* Background Image with Opacity */}
          <div
            className='absolute inset-0 bg-black opacity-20'
            style={{
              backgroundImage: `url(${data.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        
          {/* Content */}
          <div className='relative w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4'>
            <h5 className='lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-green-400 font-semibold mb-2 uppercase'>{data.slogan}</h5>
            <h1 className='text-center lg:text-2xl md:text-2xl sm:text-xl text-xl font-bold text-white mb-4 uppercase'>"{data.title}"</h1>
            <p className='lg:text-lg md:text-base sm:text-base text-base text-gray-300 font-medium mb-6 text-center'>{data.desc}</p>
            
            {/* Button Container */}
            <div className='flex flex-wrap gap-4 justify-center'>
  <SecondaryBtn className='flex items-center h-14 text-xl font-semibold rounded-full px-6 py-2 sm:w-full md:w-auto'>
    <FaGithub className='w-6 h-6 mr-2' />
    GitHub
  </SecondaryBtn>
  <SecondaryBtn className='flex items-center h-14 text-xl font-semibold rounded-full px-6 py-2 sm:w-full md:w-auto'>
    <FaLinkedin className='w-6 h-6 mr-2' />
    LinkedIn
  </SecondaryBtn>
  <SecondaryBtn className='flex items-center h-14 text-xl font-semibold rounded-full px-6 py-2 sm:w-full md:w-auto'>
    <MdOutlineMail className='w-6 h-6 mr-2' />
    Email
  </SecondaryBtn>
</div>

          </div>
        </SwiperSlide>
        
                    ))}
                </Swiper>
         
             </div>
        </>
    )
}

export default Hero;

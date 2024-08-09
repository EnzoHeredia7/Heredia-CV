import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'
import SecondaryBtn from '../../components/Button/SecondaryBtn'

const Banner = () => {
  return (
    <>
     <div className='w-full h flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-10 lg:px-24 md:px=16 sm:px-6 px-4 relative z-10'
     style={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/1947484.jpg)',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          >
        <div className='w-full h-full bg-black/60 absolute top-0 left-0 -z-10'></div>
        <h1 className='lg:text-5xl md:text-5xl sm:-4xl text-4xl font-bold text-white uppercase mb-4 text-center'>
        If you can  <span className='text-green-600'>Think it </span>, you can {''}
          <span className='text-green-600'> Code it</span>
        </h1>
        <p className='text-lg text-white font-medium mb-8 text-center'>
            Programming the future
        </p>
        <a
          href="src/assets/Heredia-CV.pdf"
          download
          className='text-base text-white bg-green-600 font-medium px-3 py-1.5 rounded-full flex items-center border border-green-600 gap-x-1 hover:border-green-400 hover:bg-green-400 ease-out duration-500'
        >
          <SecondaryBtn>
            DOWNLOAD CV
          </SecondaryBtn>
        </a>
    </div> 
   </>
  )
}

export default Banner

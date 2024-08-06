import React from 'react'
import PrimaryBtn from '../../components/Button/PrimaryBtn'

const Banner = () => {
  return (
    <>
     <div className='w-full h flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-10 lg:px-24 md:px=16 sm:px-6 px-4 relative z-10'
     style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg)',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          >
        <div className='w-full h-full bg-black/50 absolute top-0 left-0 -z-10'></div>
        <h1 className='lg:text-6xl md:text-5xl sm:-4xl text-4xl font-bold text-white uppercase mb-4 text-center'>
        No <span className='text-orange-600'>Pain </span>, No{''}
          <span className='text-orange-600'> Gain</span>
        </h1>
        <p className='text-lg text-white font-medium mb-8 text-center'>
            Ignite Your Fitness Journey with Premium Solutions.
        </p>
        <PrimaryBtn className="px-10 py-3 uppercase rounded-full">
          Become a Member
        </PrimaryBtn>
    </div> 
   </>
  )
}

export default Banner

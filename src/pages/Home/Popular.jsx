import React from 'react';
import { Laptop } from 'lucide-react';
import Video from '../../assets/pag-votri.mp4';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const Popular = () => {
    const exerciseData = [
        {
            id: 1,
            exerciseVideo: Video,
            name: "VOTRI GYM",
        },
        {
            id: 2,
            exerciseVideo: Video,
            name: "VOTRI GYM",
        },
        {
            id: 3,
            exerciseVideo: Video,
            name: "VOTRI GYM",
        },
        {
            id: 4,
            exerciseVideo: Video,
            name: "VOTRI GYM",
        },
    ];

    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                    <Laptop className='w-5 h-5 -rotate-55 text-green-400' />
                    Projects
                </h6>
                <div className='w-full h-auto flex items-center gap-x-5 gap-y-6 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap'>
                    {exerciseData.map((data) => (
                        <div key={data.id} className='relative lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow-lg hover:shadow-green-400/50 ease-out duration-700 cursor-pointer'>
                            <div className="relative w-full lg:h-[40vh] md:h-[33vh] sm:h-[38vh] h-[40vh]">
                                <video 
                                    src={data.exerciseVideo} 
                                    className='w-full h-full object-cover'
                                    muted
                                    loop
                                    onMouseEnter={e => e.currentTarget.play()}
                                    onMouseLeave={e => {
                                        e.currentTarget.pause();
                                        e.currentTarget.currentTime = 0;
                                    }}
                                />
                            </div>
                            <div className='absolute bottom-0 w-full py-4 px-3 bg-green-900/100 bg-opacity-50 z-10'>
                                <h1 className='text-lg text-white font-semibold mb-1'>
                                    {data.name}
                                </h1>
                                <div className='w-full h-auto flex items-center gap-x-2'>
                                    <PrimaryBtn>
                                        Open Page    
                                    </PrimaryBtn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Popular;

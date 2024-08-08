import React from 'react';
import { Laptop } from 'lucide-react';
import SecondaryBtn from '../../components/Button/SecondaryBtn';
import votriImage from '../../assets/votri.png';
import empleadosImage from '../../assets/empleados.png';
import ecommerceImage from '../../assets/ecommerce.png';
import seleccionImage from '../../assets/seleccion.png';

const Projects = () => {
    const exerciseData = [
        {
            id: 1,
            image: votriImage,
            name: "VOTRI GYM",
            url: "https://votri1.vercel.app/"
        },
        {
            id: 2,
            image: empleadosImage,
            name: "PLANILLA RR.HH",
            url: "https://planilla-recursos-humanos.vercel.app/"
        },
        {
            id: 3,
            image: ecommerceImage,
            name: "E-COMMERCE",
            url: "https://ecommerce-sin-terminar-a8wn.vercel.app/"
        },
        {
            id: 4,
            image: seleccionImage,
            name: "SELECCION ARGENTINA",
            url: "https://enzoheredia7.github.io/Seleccion-Argentina-con-juego/"
        }

    ];


    return (
        <>
            <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
                <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
                    <Laptop className='w-5 h-5 -rotate-55 text-green-400' />
                    Projects
                </h6>
                <div className='w-full h-auto flex items-center justify-center gap-x-5 gap-y-6 lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap'>
                    {exerciseData.map((data) => (
                        <div key={data.id} className='relative lg:w-[24%] md:w-[48%] sm:w-[48%] w-full h-auto rounded-lg overflow-hidden hover:shadow-lg hover:shadow-green-400/50 ease-out duration-700 cursor-pointer'>
                            <div className="relative w-full lg:h-[40vh] md:h-[33vh] sm:h-[38vh] h-[40vh]">
                                <img 
                                    src={data.image} 
                                    alt={data.name} 
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='text-center absolute bottom-0 w-full py-4 px-3 bg-green-900/100 bg-opacity-50 z-10'>
                                <h1 className='text-lg text-white font-semibold mb-1'>
                                    {data.name}
                                </h1>
                                <div className='w-full h-auto flex items-center justify-center gap-x-2'>
                                    <SecondaryBtn onClick={() => window.open(data.url, '_blank')}>
                                        Open Page    
                                    </SecondaryBtn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;

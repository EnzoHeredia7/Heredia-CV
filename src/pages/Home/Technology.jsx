import React from 'react'
import { Laptop } from 'lucide-react'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { BsBookmarkCheck, BsBookmarkDash, BsBookmarkPlus, BsCheckSquare, BsDashSquare, BsPlusSquare } from 'react-icons/bs'
import { SiFirebase, SiNextdotjs, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'

const Technology = () => {
  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
      <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
      <Laptop className='w-5 h-5 -rotate-55 text-green-400' />
        Technology
      </h6>
      <div className='w-full h-auto flex justify-center gap-x-5 gap-y-8 flex-wrap' >
        {/*Frontend*/}
    <div className='lg:w-[25%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-green-600/30 hover:border-green-600 hover:bg-gray-600/10 ease-out duration-700 '>
    <h2 className='lg:text-3x md:text-3xl sm:text-2xl text-2xl text-white font-semibold mb-5 flex items-center'>
    Frontend <BsBookmarkCheck className="ml-3 w-7 h-9  text-green-600"/> 
    </h2> 
    <hr className='border-gray-600/40 my-7'/>
    <div className='w-full h-auto space-y-2 mb-8'>
    <div className="flex items-center">
  <BsCheckSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    CSS3 <FaCss3Alt className="ml-3 w-9 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsCheckSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    HTML <FaHtml5 className="ml-3 w-9 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsCheckSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    React.Js <FaReact className="ml-3 w-9 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsCheckSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    JavaScript <FaJs className="ml-3 w-9 h-9"/>
  </p>
</div>
<div className="flex items-center">
  <BsCheckSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    Bootstrap <FaBootstrap className="ml-3 w-9 h-9"/>
  </p>
</div>


</div>
    </div>
    {/*Aprendiendo*/ }
    <div className='lg:w-[25%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-green-600/30 hover:border-green-600 hover:bg-gray-600/10 ease-out duration-700 '>
    <h2 className='lg:text-3x md:text-3xl sm:text-2xl text-2xl text-white font-semibold mb-5 flex items-center'>
    Learning <BsBookmarkDash className="ml-3 w-7 h-9  text-green-600"/> 
    </h2> 
    <hr className='border-gray-600/40 my-7'/>
    <div className='w-full h-auto space-y-2 mb-8'>
  <div className="flex items-center">
  <BsDashSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    Firebase <SiFirebase className="ml-3 w-7 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsDashSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    Next.Js <SiNextdotjs className="ml-3 w-7 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsDashSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    TailwindCSS <SiTailwindcss className="ml-3 w-7 h-9"/>
  </p>
</div>
  </div>
</div>

    {/* Herramientas*/ }
    <div className='lg:w-[25%] md:w-full sm:w-full w-full h-auto px-10 lg:py-12 md:py-12 sm:py-10 py-10 bg-black/10 rounded-lg border-[6px] border-green-600/30 hover:border-green-600 hover:bg-gray-600/10 ease-out duration-700'>
    <h2 className='lg:text-3x md:text-3xl sm:text-2xl text-2xl text-white font-semibold mb-5 flex items-center'>
    Tools <BsBookmarkPlus className="ml-3 w-7 h-9  text-green-600"/> 
    </h2> 
    <hr className='border-gray-600/40 my-7'/>
    <div className='w-full h-auto space-y-2 mb-8'>
  <div className="flex items-center">
  <BsPlusSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    Git <FaGitAlt className="ml-3 w-7 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsPlusSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    GitHub <FaGithub className="ml-3 w-7 h-9"/>
  </p>
</div>

<div className="flex items-center">
  <BsPlusSquare className="w-6 h-6 text-green-600 mr-3"/>
  <p className="text-gray-400 lg:text-3xl md:text-lg sm:text-lg text-base flex items-center">
    VSCode<SiVisualstudiocode className="ml-3 w-7 h-9"/>
  </p>
</div>
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Technology

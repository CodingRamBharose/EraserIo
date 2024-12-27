import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='flex items-center justify-center pt-12 flex-col gap-2'>
      <h1 className='sm:text-7xl text-[10vw] text-blue-400 font-sans font-bold'>AI co-pilot</h1>
      <h2 className='text-white sm:text-7xl text-[9vw] font-bold font-sans'>‍for technical design</h2>
      <h4 className='sm:text-3xl text-[4vw] text-gray-700 pt-5 font-semibold'>Deliver accurate, consistent designs faster</h4>
      <a
            className="mt-6 rounded-md bg-gray-100 px-5 py-3 text-sm font-bold text-black transition hover:bg-gray-300 flex items-center"
            href="#"
          >
            Try Eraser <FaArrowRightLong className='ml-2'/>
          </a>
    </div>
  )
}

export default Hero

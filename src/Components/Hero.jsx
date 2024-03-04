import React from 'react'
import { ReactTyped } from "react-typed";
import Button from '@mui/material/Button';



const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-x-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl py-6 sm:text-6xl font-bold text-4xl'>Grow With Data</h1>
        <div className='flex justify-center md:text-4xl sm:text-3xl text-xl font-bold'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold'>fast , flexible financing</p>
          <ReactTyped className='mx-1 text-gray-500'
            strings={[
              "B2B",
              "C2C",
              "G2C",
            ]}
            typeSpeed={140}
            backSpeed={130}
            loop
          />
        </div>
        <p className='text-xl md:text-2xl font-bold text-gray-500 mt-1 py-4'>Monitor your data analytics to increase revenue from B2B , B2C and C2C</p>

        <div className="text-center ">
          <Button variant="contained" className='w-40 py-6 px-6' style={{ backgroundColor: '#00df9a' }}>Get Started</Button>
        </div>

      </div>
    </div>
  )
}

export default Hero

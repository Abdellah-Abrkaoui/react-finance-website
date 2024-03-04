import { Button } from '@mui/material'
import React from 'react'

const NewLetter = () => {
    return (
        <div className='w-full py-16 px-4 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h3 className='font-bold text-2xl md:text-4xl sm:text-3xl py-2'>Wants tips & tricks to optimize your flow ?</h3>
                    <p>Sign up to our newsLetter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <input className='p-2.5 w-full rounded text-black outline-none' type="email" placeholder='Enter Email' />
                    <div className="text-center ">
                        <Button variant="contained" className='w-40 py-6 px-6' style={{ backgroundColor: '#00df9a' , margin:'10px' }}>Get Started</Button>
                    </div>
                    <p>We care bout the protection of your data. <span className='text-[#00df9a] underline'>Read our Privacy Policies</span></p>
 
                </div>

            </div>

        </div>
    )
}

export default NewLetter

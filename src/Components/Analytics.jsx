import React from 'react'
import finance from '../assets/finance.avif'
import { Button } from '@mui/material'

const Analytics = () => {
    return (
        <div className='w-full py-16 px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={finance} className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-[#00df9a] py-4'>DATA ANALYTICS DASHBOARD</p>
                    <h2 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics</h2>
                    <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas praesentium ducimus recusandae officia totam accusantium aut iusto perspiciatis quis culpa, temporibus alias suscipit repudiandae assumenda ipsum repellendus cumque mollitia.</p>
                    <div className="text-center py-6">
                        <Button variant="contained" className='w-40 py-6 px-6' style={{ backgroundColor: 'black', color : '#00df9a' }}>Get Started</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Analytics

import React from 'react'
import {FaFacebookSquare , FaInstagram , FaGithubSquare, FaTwitterSquare, FaDribbbleSquare} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px]  py-16 px-10 text-white grid mx-auto lg:grid-cols-4 gap-8'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae distinctio inventore officia expedita quisquam sit nihil hic.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare className='hover:scale-110 duration-700' size={30}/>
                    <FaInstagram className='hover:scale-110 duration-700' size={30}/>
                    <FaGithubSquare className='hover:scale-110 duration-700'  size={30}/>
                    <FaDribbbleSquare className='hover:scale-110 duration-700' size={30}/>
                    <FaTwitterSquare className='hover:scale-110 duration-700' size={30}/>
                </div>           
            </div>
            <div className='lg:col-span-3 flex justify-between'>
                <div>
                    <h5 className='font-bold text-gray-400 pb-5'>Solutions</h5>
                    <ul className='text-green-400 font-semibold cursor-pointer'>
                        <li className='py-2 hover:scale-105 duration-500'>Analytics</li>
                        <li className='py-2 hover:scale-105 duration-500'>Marketing</li>
                        <li className='py-2 hover:scale-105 duration-500'>Commerce</li>
                        <li className='py-2 hover:scale-105 duration-500'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-bold text-gray-400 pb-5'>Support</h5>
                    <ul className='text-green-400 font-semibold cursor-pointer'>
                        <li className='py-2 hover:scale-105 duration-500'>Pricing</li>
                        <li className='py-2 hover:scale-105 duration-500'>Documentation</li>
                        <li className='py-2 hover:scale-105 duration-500'>Guide</li>
                        <li className='py-2 hover:scale-105 duration-500'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-bold text-gray-400 pb-5'>Company</h5>
                    <ul className='text-green-400 font-semibold cursor-pointer'>
                        <li className='py-2 hover:scale-105 duration-500'>About</li>
                        <li className='py-2 hover:scale-105 duration-500'>Blog</li>
                        <li className='py-2 hover:scale-105 duration-500'>Press</li>
                        <li className='py-2 hover:scale-105 duration-500'>Jobs</li>
                    </ul>
                </div>
                <div>
                    <h5 className='font-bold text-gray-400 pb-5'>Company</h5>
                    <ul className='text-green-400 font-semibold cursor-pointer'>
                        <li className='py-2 hover:scale-105 duration-500'>About</li>
                        <li className='py-2 hover:scale-105 duration-500'>Blog</li>
                        <li className='py-2 hover:scale-105 duration-500'>Press</li>
                        <li className='py-2 hover:scale-105 duration-500'>Jobs</li>
                    </ul>
                </div>
                

            </div>
        </div>
    )
}

export default Footer

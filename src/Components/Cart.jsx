import React from 'react'
import imgHead from '../assets/cart.png'
const Cart = () => {
    return (
        <div className='w-full py-16 px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='mt-8 w-full shadow-xl border rounded border-t-white hover:scale-105 duration-700 cursor-pointer flex flex-col items-center'>
                    <img src={imgHead} alt="Carts" className='w-[50px] mx-auto mt-[-2rem]' />
                    <h2 className='font-bold text-2xl text-center py-4 text-green-800'>Single User</h2>
                    <p className='font-black text-center text-4xl'>149$</p>
                    <div className='text-center font-medium py-3'>
                        <p className='py-1 font-bold text-green-600 border-b border-t border-gray-200 mx-8'>500GB Storage</p>
                        <p className='py-1 font-bold text-green-600 border-b border-gray-200 mx-8'>1 Granted User</p>
                        <p className='py-1 font-bold text-green-600 border-b border-gray-200 mb-4 mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='border py-1 px-5 font-bold text-black bg-green-400 rounded w-[40%] mb-4'>Start Trial</button>
                </div>
                <div className='mt-8 w-full shadow-xl border rounded border-t-white hover:scale-105 duration-700 cursor-pointer flex flex-col items-center'>
                    <img src={imgHead} alt="Carts" className='w-[50px] mx-auto mt-[-2rem]' />
                    <h2 className='font-bold text-2xl text-center py-4 text-green-800'>Single User</h2>
                    <p className='font-black text-center text-4xl'>149$</p>
                    <div className='text-center font-medium py-3'>
                        <p className='py-1 font-bold text-green-600 border-b border-t border-gray-200 mx-8'>500GB Storage</p>
                        <p className='py-1 font-bold text-green-600 border-b border-gray-200 mx-8'>1 Granted User</p>
                        <p className='py-1 font-bold text-green-600 border-b border-gray-200 mb-4 mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='border py-1 px-5 font-bold text-black bg-green-400 rounded w-[40%] mb-4'>Start Trial</button>
                </div>
                <div className=' mt-8 w-full shadow-xl border rounded border-t-white hover:scale-105 duration-700 cursor-pointer flex flex-col items-center'>
                    <img src={imgHead} alt="Carts" className='w-[50px] mx-auto mt-[-2rem]' />
                    <h2 className='font-bold text-2xl text-center py-4 text-green-800'>Single User</h2>
                    <p className='font-black text-center text-4xl'>149$</p>
                    <div className='text-center font-medium py-3'>
                        <p className='py-1 font-bold text-green-600 border-b border-t border-gray-200 mx-8'>500GB Storage</p>
                        <p className='py-1 font-bold text-green-600 border-b border-gray-200 mx-8'>1 Granted User</p>
                        <p className='py-1 font-bold text-green-600 border-b border-gray-200 mb-4 mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='border py-1 px-5 font-bold text-black bg-green-400 rounded w-[40%] mb-4'>Start Trial</button>
                </div>


            </div>
        </div>
    )
}

export default Cart

import { useState } from 'react'
import { AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [navi, setNavi] = useState(true);

    const handleNav = () => {
        setNavi(!navi);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className={`hidden md:flex`}> {/* Conditional rendering based on 'navi' state */}
                <li className='p-4 hover:scale-110 duration-700 hover:text-green-500 cursor-pointer'>Home</li>
                <li className='p-4 hover:scale-110 duration-700 hover:text-green-500 cursor-pointer'>Resources</li>
                <li className='p-4 hover:scale-110 duration-700 hover:text-green-500 cursor-pointer'>Company</li>
                <li className='p-4 hover:scale-110 duration-700 hover:text-green-500 cursor-pointer'>About</li>
                <li className='p-4 hover:scale-110 duration-700 hover:text-green-500 cursor-pointer'>Contact</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {navi ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/> }
            </div>

            {/* Side navigation menu */}
            
                <div className={!navi? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-700 z-40' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                    <ul className='pt-12 uppercase cursor-pointer'>
                        <li className='p-4 border-b border-gray-600' >Company</li>
                        <li className='p-4 border-b border-gray-600'>Resources</li>
                        <li className='p-4 border-b border-gray-600'>About</li>
                        <li className='p-4 border-b border-gray-600'>Contact</li>
                        <li className='p-4'>Home</li>
                    </ul>
                </div>
           
        </div>
    );
}

export default Navbar;

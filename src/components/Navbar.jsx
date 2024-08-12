import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-indigo-800 text-white py-2'>
            <div className="logo">
                <span className='font-bold text-xl mx-8'>iTask</span>
            </div>
            <ul className="flex gap-8 mx-9 justify-center items-center">
                <li className='hover:cursor-pointer hover:font-bold transition-all w-20'>Home</li>
                <li className='hover:cursor-pointer hover:font-bold transition-all w-20'>Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar

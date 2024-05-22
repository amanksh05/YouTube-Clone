import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
function Navbar() {
    return (
        <div className='flex justify-between px-6 h-14 items-center bg-[#212121] opacity-95 sticky '>
            <div className='flex gap-8 items-center justify-center text-2xl'>
                <div>
                    <GiHamburgerMenu className='text-xl ' />
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <FaYoutube className='text-2xl text-red-600' />
                    <span className='text-xl font-medium'>YouTube</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form action="">
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                        <div className='flex gap-5 items-center pr-5'>
                            <input type="text" placeholder='Search' className='w-96 bg-zinc-900 focus:outline-none border-none' />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl'>
                            <FiSearch className='text-xl ' />
                        </button>
                    </div>
                </form>

                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                    <FaMicrophone />
                </div>
            </div>
            <div>
                <div className='flex gap-5 items-center text-xl'>
                    <RiVideoAddFill />
                    <div className='relative'>
                        <BsBellFill />
                        <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'> 9+</span>
                    </div>
                    <img src="https://assets.leetcode.com/users/avatars/avatar_1653163501.png"  className='w-8 h-8 rounded-full'/>
                </div>
            </div>

        </div>

    )
}

export default Navbar
import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";



function Sidebar() {
    const mainLinks = [
        {
            icon: <MdHomeFilled  className='text-2xl'/>,
            name: 'Home',
        },

        {
            icon: <MdSlowMotionVideo className='text-2xl' />,
            name: 'Shorts',
        },

        {
            icon: <MdSubscriptions className='text-2xl' />,
            name: 'Subscription',
        }
    ]
    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className='text-2xl' />,
            name: 'Library',
        },
        {
            icon: <MdHistory className='text-2xl' />,
            name: 'History',
        },
        {
            icon: <BiSolidLike  className='text-2xl'/>,
            name: 'Liked Videos',
        },
        {
            icon: <MdWatchLater className='text-2xl'/>,
            name: 'Watch Later',
        }
    ]
    return (
        <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
            <ul className='flex flex-col border-b-2 border-gray-700 pl-3 pb-3'>
                {
                    mainLinks.map(
                        ({ icon, name }) => {
                            return (
                                <li key={name} className={`pl-3 py-3 rounded-md hover:bg-zinc-600  ${name === "Home" ? "bg-slate-600" : ""}`}>
                                    <a href="#" className='flex items-center gap-5'>
                                        {icon}
                                        <span className='text-base tracking-wide'>
                                            {name}
                                        </span>
                                    </a>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            <ul className='flex flex-col border-b-1 border-gray-800 pl-3 pt-3'>
                {
                    otherLinks.map(
                        ({ icon, name }) => {
                            return (
                                <li key={name} className={`pl-3 py-3 rounded-md hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : ""}`}>
                                    <a href="#" className='flex items-center gap-5'>
                                        {icon}
                                        <span className='text-base tracking-wide '>
                                            {name}
                                        </span>
                                    </a>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default Sidebar
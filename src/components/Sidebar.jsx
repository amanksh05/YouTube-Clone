import React from 'react'
import { MdHomeFilled, MdSlowMotionVideo, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdWatchLater } from "react-icons/md";
import { BiSolidLike } from 'react-icons/bi';

function Sidebar() {
  const mainLinks = [
    { icon: <MdHomeFilled className='text-2xl' />, name: 'Home' },
    { icon: <MdSlowMotionVideo className='text-2xl' />, name: 'Shorts' },
    { icon: <MdSubscriptions className='text-2xl' />, name: 'Subscription' }
  ];
  const otherLinks = [
    { icon: <MdOutlineVideoLibrary className='text-2xl' />, name: 'Library' },
    { icon: <MdHistory className='text-2xl' />, name: 'History' },
    { icon: <BiSolidLike className='text-2xl' />, name: 'Liked Videos' },
    { icon: <MdWatchLater className='text-2xl' />, name: 'Watch Later' }
  ];
  return (
    <div className='w-1/12 min-w-[200px] bg-[#212121] pr-5 overflow-auto pb-8 h-screen hidden sm:block'>
      <ul className='flex flex-col border-b-2 gap-1 border-gray-700 pl-3 pb-3'>
        {
          mainLinks.map(({ icon, name }) => (
            <li key={name} className={`pl-3 py-3 rounded-md hover:bg-zinc-600  ${name === "Home" ? "bg-slate-600" : ""}`}>
              <a href="#" className='flex items-center gap-5'>
                {icon}
                <span className='text-base tracking-wide'>{name}</span>
              </a>
            </li>
          ))
        }
      </ul>
      <ul className='flex flex-col border-b-1 border-gray-800 pl-3 pt-3'>
        {
          otherLinks.map(({ icon, name }) => (
            <li key={name} className={`pl-3 py-3 rounded-md hover:bg-zinc-600 ${name === "Home" ? "bg-slate-600" : ""}`}>
              <a href="#" className='flex items-center gap-5'>
                {icon}
                <span className='text-base tracking-wide '>{name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar

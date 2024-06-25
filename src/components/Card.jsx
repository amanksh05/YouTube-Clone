import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ data }) {
    return (
        <div className='flex flex-col gap-4 bg-gray-800 p-4 rounded-lg'>
            <div className='relative'>
                <span className='absolute bottom-2 right-2 text-sm bg-gray-900 px-2 py-0.5 z-10 rounded-lg'>
                    {data.videoDuration}
                </span>
                <Link to = {`/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} alt='Thumbnail' className='h-44 w-full rounded-md object-cover' />
                </Link>

            </div>
            <div className='flex gap-2 overflow-hidden text-ellipsis whitespace-nowrap'>
                <div className='min-w-fit '>
                    <a href='#'>
                        <img src={data.channelInfo.image} alt="channel image" className='h-9 w-9 rounded-full' />
                    </a>
                </div>
                <div className='flex flex-col gap-1 justify-between'>
                    <h3 className='truncate'>
                        <a href='#' className='text-white'>{data.videoTitle}</a>
                    </h3>
                    <div className='text-sm text-gray-400'>
                        <div className='truncate'>
                            <a href='#' className='hover:text-white'>{data.channelInfo.name}</a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">{data.videoViews} views</span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

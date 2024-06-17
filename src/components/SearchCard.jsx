import React from 'react'

function SearchCard({ data }) {
    return (
        <div className='flex gap-3 flex-row'>
            <div className='relative'>
                <span className='absolute bottom-2 right-2 text-sm bg-gray-900 px-2 py-0.5 z-10 rounded-lg'>
                    {data.videoDuration}
                </span>
                <img src={data.videoThumbnail} alt='Thumbnail' className='h-52 w-96 rounded-md' />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='max-w-2xl'>
                    <a href="#" className='line-clamp-2'>
                        {data.videoTitle}
                    </a>
                </h3>
                <div className='text-xs text-gray-400'>
                    <div>
                        <a href="#" className='hover:text-white'>
                            {data.channelInfo.name}
                        </a>
                    </div>
                    <div>
                        <span className="after:contents-['.'] after:mx-1">
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
                <div className='min-w-fit my-2'>
                    <a href="#" className='flex items-center gap-2 text-xs text-gray-400'>
                        <img src={data.channelInfo.image} alt="channel" className='h-9 w-9 rounded-full' />
                        <span>{data.channelInfo.name}</span>
                    </a>
                </div>
                <div>
                    <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'>
                        <p>{data.videoDescription}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCard

import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';

function Home() {
const dispatch = useAppDispatch();
const videos = useAppSelector((state)=>state.youtubeApp.videos)

useEffect(()=>{
  dispatch(getHomePageVideos(false));
},[dispatch])

  return (
    <div>
        <Navbar/>
        <Sidebar/>
    </div>
  )
}

export default Home
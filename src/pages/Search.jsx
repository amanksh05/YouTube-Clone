import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useApp';
import { clearVideos } from '../features/youtube/youtubeSlice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchCard from '../components/SearchCard';

function Search() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "") navigate("/");
        else {
            dispatch(getSearchPageVideos(false));
        }
    }, [dispatch, navigate, searchTerm]);

    return (
        <div className='max-h-screen overflow-hidden '>
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
            <div className='flex flex-row justify-normal gap-10'>
                <Sidebar />
                <div className='w-full overflow-auto flex flex-col justify-stretch mb-3'>
                    {
                        videos.length ? (
                            <InfiniteScroll
                                dataLength={videos.length}
                                next={() => dispatch(getSearchPageVideos(true))}
                                hasMore={videos.length < 500}
                                loader={<Spinner />}
                                height={"100vh"}
                                className='w-full'
                            >
                                <div className='flex flex-col gap-5 w-full'>
                                    {videos.map((item) => (
                                        <SearchCard data={item} key={item.videoId} />
                                    ))}
                                </div>
                            </InfiniteScroll>
                        ) : (
                            // <div className='flex flex-1 justify-center items-center'>
                                <Spinner />
                            // </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;

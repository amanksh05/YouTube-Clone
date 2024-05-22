import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "../features/youtube/youtubeSlice";


const store = configureStore({
    reducer:{
        youtubeApp:youtubeSlice
    }
})

export default store;
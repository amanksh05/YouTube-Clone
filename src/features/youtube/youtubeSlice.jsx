import {createSlice} from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";
const initialState = {
    videos:[],
    currentPlaying:null,
    searchTerm: "",
    searchResults:[],
    nextPageToker: null,
    recommendedVideo:[]
};

const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            if(action.payload && action.payload.parsedData){
                state.videos = action.payload.parsedData
                state.nextPageToker = action.payload.nextPageToken
            }
        })
    }
});

export default youtubeSlice.reducer